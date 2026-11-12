import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 *
 * Its matrix follows the 8 scalars of its createjs ColorFilter. They are
 * plain data properties (tweens write them), so they are copied over when
 * the filter is about to be drawn (see PixiMovieClip.updateTransform) and
 * when `matrix` is read.
 */
export class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
	private _createjs: CreatejsColorFilter;

	constructor(cjs: CreatejsColorFilter) {
		super();

		this._createjs = cjs;
		this.syncFromCreatejs();
	}

	get createjs() {
		return this._createjs;
	}

	// pixi.js declares `matrix` as a plain field of ColorMatrixFilter, while it
	// is an accessor on its prototype (get/set of uniforms.m); TypeScript's
	// accessor-over-property check (TS2611) only sees the declaration.
	// @ts-expect-error TS2611 - see above
	get matrix(): number[] {
		this.syncFromCreatejs();
		return this.uniforms.m;
	}

	set matrix(value: number[]) {
		this.uniforms.m = value;
	}

	/**
	 * Copies the scalars of the createjs ColorFilter into the matrix.
	 */
	syncFromCreatejs(): void {
		const filter = this._createjs;
		if (!filter) {
			// inside the Pixi constructor
			return;
		}

		const matrix = this.uniforms.m;
		matrix[0] = filter.redMultiplier;
		matrix[6] = filter.greenMultiplier;
		matrix[12] = filter.blueMultiplier;
		matrix[18] = filter.alphaMultiplier;
		matrix[4] = filter.redOffset / 255;
		matrix[9] = filter.greenOffset / 255;
		matrix[14] = filter.blueOffset / 255;
		matrix[19] = filter.alphaOffset / 255;
	}
}

// Derived from the real constructor so there is a single source of truth.
export type TCreatejsColorFilterConstructorArgs = ConstructorParameters<typeof createjs.ColorFilter>;

/**
 * External store for the paired Pixi filter, so that the createjs instance
 * carries no wrapper metadata (its own properties are exactly the original 8
 * scalars; tween's for-in sees the same surface as with the original createjs).
 */
const pixiFilterStore = new WeakMap<CreatejsColorFilter, PixiColorMatrixFilter>();

export function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter {
	let pixi = pixiFilterStore.get(filter);

	if (!pixi) {
		pixi = new PixiColorMatrixFilter(filter);
		pixiFilterStore.set(filter, pixi);
	}

	return pixi;
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; the paired Pixi
 * filter copies them into its matrix before it is drawn and when its matrix is
 * read (see PixiColorMatrixFilter), not by accessors.
 */
export class CreatejsColorFilter extends createjs.ColorFilter {
	constructor(...args: TCreatejsColorFilterConstructorArgs) {
		super(...args);
	}

	get pixi() {
		return getPixiColorMatrixFilter(this);
	}
}
