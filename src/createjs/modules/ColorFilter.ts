import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 */
export class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
	private _createjs: CreatejsColorFilter;

	constructor(cjs: CreatejsColorFilter) {
		super();

		this._createjs = cjs;
	}

	get createjs() {
		return this._createjs;
	}
}

// Derived from the real constructor so there is a single source of truth.
export type TCreatejsColorFilterConstructorArgs = ConstructorParameters<typeof createjs.ColorFilter>;

/**
 * Key of the paired Pixi filter on the createjs filter. A symbol key keeps
 * the createjs instance's surface as it is (for-in, Object.keys and
 * Object.getOwnPropertyNames show exactly the original 8 scalars; tween's
 * for-in sees the same surface as with the original createjs).
 */
export const PIXI_FILTER: unique symbol = Symbol('pixiFilter');

/**
 * @ignore
 */
function syncMatrix(filter: CreatejsColorFilter, pixi: PixiColorMatrixFilter): void {
	const matrix = pixi.matrix;

	matrix[0] = filter.redMultiplier;
	matrix[6] = filter.greenMultiplier;
	matrix[12] = filter.blueMultiplier;
	matrix[18] = filter.alphaMultiplier;
	matrix[4] = filter.redOffset / 255;
	matrix[9] = filter.greenOffset / 255;
	matrix[14] = filter.blueOffset / 255;
	matrix[19] = filter.alphaOffset / 255;
}

export function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter {
	let pixi = filter[PIXI_FILTER];

	// its own filter only (a symbol-keyed property is inherited through the prototype chain)
	if (!pixi || pixi.createjs !== filter) {
		pixi = new PixiColorMatrixFilter(filter);
		syncMatrix(filter, pixi);
		filter[PIXI_FILTER] = pixi;
	}

	return pixi;
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; they are copied
 * into the paired Pixi filter's matrix by the pull-sync pass at the end of each
 * tick (see core.ts syncToPixi), not by accessors.
 */
export class CreatejsColorFilter extends createjs.ColorFilter {
	/** The paired Pixi filter (see PIXI_FILTER) */
	declare [PIXI_FILTER]?: PixiColorMatrixFilter;

	constructor(...args: TCreatejsColorFilterConstructorArgs) {
		super(...args);
	}

	get pixi() {
		return getPixiColorMatrixFilter(this);
	}
}
