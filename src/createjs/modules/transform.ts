import { Transform } from 'pixi.js';
import { DEG_TO_RAD } from './utils';
import type { ICreatejsSyncNode } from './core';

/**
 * @ignore
 */
const RAD_TO_DEG = 180 / Math.PI;

/**
 * Transforms of nodes written through Pixi since the last take
 * (see {@link CjsTransform.logPixiWrite}).
 *
 * @ignore
 */
let pixiWrites: CjsTransform[] = [];

/**
 * @ignore
 */
let logSuspended = 0;

/**
 * Brackets the wrapper's own writes to Pixi nodes (the sync), which are not
 * Pixi-side writes to take over.
 */
export function suspendPixiWriteLog(): void {
	logSuspended++;
}

export function resumePixiWriteLog(): void {
	logSuspended--;
}

/**
 * The transforms of the nodes written through Pixi since the last call
 * (each once), clearing the log.
 */
export function takePixiWrites(): CjsTransform[] {
	const writes = pixiWrites;
	if (writes.length) {
		pixiWrites = [];
	}
	return writes;
}

/**
 * A Pixi Transform whose rotation and skew follow createjs, and which logs
 * writes made through Pixi.
 *
 * - The createjs values (degrees) are kept as written, so that reading them
 *   back gives exactly what was written (a degrees -> radians -> degrees
 *   round trip does not)
 * - Pixi's own fields carry the same values in Pixi's terms (rotation in
 *   radians, skew.x = -skewX, skew.y = skewY, all in radians), so code that
 *   uses the Pixi node sees the values it always saw. A write made through
 *   Pixi (node.rotation, node.skew) becomes the new createjs value
 * - The local matrix is built the createjs way (Matrix2D.appendTransform):
 *   skew x (rotation x scale), i.e. the object is rotated first and then
 *   skewed. Pixi composes them the other way round (skewed, then rotated as
 *   a whole); the two agree only while the rotation is 0 or skewX equals
 *   skewY. A rotation that is a multiple of 360 is taken as exactly none, as
 *   createjs does
 * - A change made through Pixi to the node's position, scale, pivot,
 *   rotation or skew (and, through the node classes, its anchor, alpha and
 *   visible) is logged once per node, so that the wrapper takes it over into
 *   createjs without walking the whole tree
 */
export class CjsTransform extends Transform {
	/** createjs rotation, in degrees */
	degRotation = 0;
	/** createjs skewX, in degrees */
	degSkewX = 0;
	/** createjs skewY, in degrees */
	degSkewY = 0;

	/** The createjs object this node mirrors (null until the wrapper links it) */
	owner: ICreatejsSyncNode | null = null;

	/** Whether the node is in the write log */
	logged = false;

	/** The radians last written to the Pixi fields for the values above */
	private _radRotation = 0;
	private _radSkewX = 0;
	private _radSkewY = 0;

	/**
	 * Logs a Pixi-side write to the node (once until the log is taken).
	 */
	logPixiWrite(): void {
		if (!logSuspended && !this.logged && this.owner) {
			this.logged = true;
			pixiWrites.push(this);
		}
	}

	/**
	 * Writes the createjs rotation, skewX and skewY (degrees), computing the
	 * matrix once.
	 */
	setRotationSkew(rotation: number, skewX: number, skewY: number): void {
		this.degRotation = rotation;
		this._radRotation = rotation * DEG_TO_RAD;
		this._rotation = this._radRotation;
		this.degSkewX = skewX;
		this._radSkewX = -skewX * DEG_TO_RAD;
		this.degSkewY = skewY;
		this._radSkewY = skewY * DEG_TO_RAD;

		if (this.skew.x !== this._radSkewX || this.skew.y !== this._radSkewY) {
			// Setting the point calls updateSkew when the value changes
			this.skew.set(this._radSkewX, this._radSkewY);
		} else {
			this.updateSkew();
		}
	}

	/**
	 * Called by the position, scale and pivot points when they change.
	 */
	protected onChange(): void {
		this._localID++;
		this.logPixiWrite();
	}

	protected updateSkew(): void {
		// Values written through Pixi become the createjs values
		if (this._rotation !== this._radRotation) {
			this._radRotation = this._rotation;
			this.degRotation = this._rotation * RAD_TO_DEG;
			this.logPixiWrite();
		}
		if (this.skew.x !== this._radSkewX) {
			this._radSkewX = this.skew.x;
			this.degSkewX = -this.skew.x * RAD_TO_DEG;
			this.logPixiWrite();
		}
		if (this.skew.y !== this._radSkewY) {
			this._radSkewY = this.skew.y;
			this.degSkewY = this.skew.y * RAD_TO_DEG;
			this.logPixiWrite();
		}

		// createjs Matrix2D.appendTransform: (skew) x (rotation, scale)
		let cos = 1;
		let sin = 0;
		if (this.degRotation % 360) {
			const r = this.degRotation * DEG_TO_RAD;
			cos = Math.cos(r);
			sin = Math.sin(r);
		}

		if (this.degSkewX || this.degSkewY) {
			const skewX = this.degSkewX * DEG_TO_RAD;
			const skewY = this.degSkewY * DEG_TO_RAD;
			const a1 = Math.cos(skewY);
			const b1 = Math.sin(skewY);
			const c1 = -Math.sin(skewX);
			const d1 = Math.cos(skewX);
			this._cx = a1 * cos + c1 * sin;
			this._sx = b1 * cos + d1 * sin;
			this._cy = a1 * -sin + c1 * cos;
			this._sy = b1 * -sin + d1 * cos;
		} else {
			this._cx = cos;
			this._sx = sin;
			this._cy = -sin;
			this._sy = cos;
		}

		this._localID++;
	}
}

/**
 * Backing fields of the logged `alpha` / `visible` (see logPixiWrites).
 */
interface ILoggedPixiFields {
	transform: Transform;
	_cjsAlpha: number;
	_cjsVisible: boolean;
}

/**
 * Makes `alpha` and `visible` of a Pixi node class log changes made through
 * Pixi (see {@link CjsTransform.logPixiWrite}). Pixi declares them as plain
 * fields, which an accessor in a subclass body cannot override (TS2611), so
 * they are defined on the prototype; the getters are plain field reads.
 */
export function logPixiWrites(proto: object): void {
	Object.defineProperty(proto, 'alpha', {
		configurable: true,
		enumerable: true,
		get(this: ILoggedPixiFields) {
			return this._cjsAlpha;
		},
		set(this: ILoggedPixiFields, value: number) {
			if (this._cjsAlpha !== value) {
				this._cjsAlpha = value;
				if (this.transform instanceof CjsTransform) {
					this.transform.logPixiWrite();
				}
			}
		}
	});
	Object.defineProperty(proto, 'visible', {
		configurable: true,
		enumerable: true,
		get(this: ILoggedPixiFields) {
			return this._cjsVisible;
		},
		set(this: ILoggedPixiFields, value: boolean) {
			if (this._cjsVisible !== value) {
				this._cjsVisible = value;
				if (this.transform instanceof CjsTransform) {
					this.transform.logPixiWrite();
				}
			}
		}
	});
}
