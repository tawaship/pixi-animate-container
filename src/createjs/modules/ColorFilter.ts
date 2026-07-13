import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { IColorFilterSyncSource } from './core';

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

/**
 * Members of the (untyped) createjs.ColorFilter runtime that the wrapper relies on.
 * The 8 scalars are plain enumerable data properties written by the original
 * constructor, exactly as in the original implementation.
 */
export interface ICreatejsColorFilterBase extends IColorFilterSyncSource {
}

export type TCreatejsColorFilterConstructorArgs = [
	number?, number?, number?, number?,
	number?, number?, number?, number?
];

export interface ICreatejsColorFilterBaseConstructor {
	new (...args: TCreatejsColorFilterConstructorArgs): ICreatejsColorFilterBase;
}

/**
 * @ignore
 */
const ColorFilterBase: ICreatejsColorFilterBaseConstructor = createjs.ColorFilter;

/**
 * External store for the paired Pixi filter, so that the createjs instance
 * carries no wrapper metadata (its own properties are exactly the original 8
 * scalars; tween's for-in sees the same surface as with the original createjs).
 */
const pixiFilterStore = new WeakMap<CreatejsColorFilter, PixiColorMatrixFilter>();

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
	let pixi = pixiFilterStore.get(filter);

	if (!pixi) {
		pixi = new PixiColorMatrixFilter(filter);
		syncMatrix(filter, pixi);
		pixiFilterStore.set(filter, pixi);
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
export class CreatejsColorFilter extends ColorFilterBase {
	constructor(...args: TCreatejsColorFilterConstructorArgs) {
		super(...args);
	}

	get pixi() {
		return getPixiColorMatrixFilter(this);
	}
}
