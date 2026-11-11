import { Transform } from 'pixi.js';
import type { ICreatejsSyncNode } from './core';
/**
 * Brackets the wrapper's own writes to Pixi nodes (the sync), which are not
 * Pixi-side writes to take over.
 */
export declare function suspendPixiWriteLog(): void;
export declare function resumePixiWriteLog(): void;
/**
 * The transforms of the nodes written through Pixi since the last call
 * (each once), clearing the log.
 */
export declare function takePixiWrites(): CjsTransform[];
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
export declare class CjsTransform extends Transform {
    /** createjs rotation, in degrees */
    degRotation: number;
    /** createjs skewX, in degrees */
    degSkewX: number;
    /** createjs skewY, in degrees */
    degSkewY: number;
    /** The createjs object this node mirrors (null until the wrapper links it) */
    owner: ICreatejsSyncNode | null;
    /** Whether the node is in the write log */
    logged: boolean;
    /** The radians last written to the Pixi fields for the values above */
    private _radRotation;
    private _radSkewX;
    private _radSkewY;
    /**
     * Logs a Pixi-side write to the node (once until the log is taken).
     */
    logPixiWrite(): void;
    /**
     * Writes the createjs rotation, skewX and skewY (degrees), computing the
     * matrix once.
     */
    setRotationSkew(rotation: number, skewX: number, skewY: number): void;
    /**
     * Called by the position, scale and pivot points when they change.
     */
    protected onChange(): void;
    protected updateSkew(): void;
}
/**
 * Makes `alpha` and `visible` of a Pixi node class log changes made through
 * Pixi (see {@link CjsTransform.logPixiWrite}). Pixi declares them as plain
 * fields, which an accessor in a subclass body cannot override (TS2611), so
 * they are defined on the prototype; the getters are plain field reads.
 */
export declare function logPixiWrites(proto: object): void;
