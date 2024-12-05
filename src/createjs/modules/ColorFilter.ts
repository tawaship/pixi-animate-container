import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsParam, createCreatejsParams } from './core';
import { createObject } from './utils';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.ColorMatrixFilter.html | PIXI.Sprite}
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

export interface IPixiColorMatrixFilterData {
	instance: PixiColorMatrixFilter;
};

/**
 * @ignore
 */
function createPixiColorMatrixFilterData(cjs: CreatejsColorFilter): IPixiColorMatrixFilterData {
	const pixi = new PixiColorMatrixFilter(cjs);
	
	return { instance: pixi };
}

export interface ICreatejsColorFilterParam extends ICreatejsParam {
	redMultiplier: number;
    greenMultiplier: number;
    blueMultiplier: number;
    alphaMultiplier: number;
    redOffset: number;
    greenOffset: number;
    blueOffset: number;
    alphaOffset: number;
}

/**
 * @ignore
 */
function createCreatejsColorFilterParams(): ICreatejsColorFilterParam {
	return Object.assign(createCreatejsParams(), {
		redMultiplier: 1,
        greenMultiplier: 1,
        blueMultiplier: 1,
        alphaMultiplier: 1,
        redOffset: 0,
        greenOffset: 0,
        blueOffset: 0,
        alphaOffset: 0
	});
}

/**
 * @ignore
 */
const P = createjs.ColorFilter;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 */
export class CreatejsColorFilter extends createjs.ColorFilter {
    protected _pixiData: IPixiColorMatrixFilterData;
    protected _createjsParams: ICreatejsColorFilterParam;

    constructor(...args: number[]) {
        super(args);

        const pixiData = this._pixiData = createPixiColorMatrixFilterData(this);
        const createjsParams = this._createjsParams = createCreatejsColorFilterParams();

        // ColorFilterのtweenは、列挙可能かつ hasOwnPropery なプロパティにアクセスしてしまうので、enumerableを切っておく
        Object.defineProperties(this, {
            _pixiData: {
                enumerable: false,
                value: pixiData
            },
            _createjsParams: {
                enumerable: false,
                value: createjsParams
            },
            redMultiplier: {
                get() {
                    return this._createjsParams.redMultiplier;
                },
                set(value) {
                    this._pixiData.instance.matrix[0] = value, this._createjsParams.redMultiplier = value;
                }
            },
            greenMultiplier: {
                get() {
                    return this._createjsParams.greenMultiplier;
                },
                set(value) {
                    this._pixiData.instance.matrix[6] = value, this._createjsParams.greenMultiplier = value;
                }
            },
            blueMultiplier: {
                get() {
                    return this._createjsParams.blueMultiplier;
                },
                set(value) {
                    this._pixiData.instance.matrix[12] = value, this._createjsParams.blueMultiplier = value;
                }
            },
            alphaMultiplier: {
                get() {
                    return this._createjsParams.alphaMultiplier;
                },
                set(value) {
                    this._pixiData.instance.matrix[18] = value, this._createjsParams.alphaMultiplier = value;
                },
            },
            redOffset: {
                get() {
                    return this._createjsParams.redOffset;
                },
                set(value) {
                    this._pixiData.instance.matrix[4] = value / 255, this._createjsParams.redOffset = value;
                }
            },
            greenOffset: {
                get() {
                    return this._createjsParams.greenOffset;
                },
                set(value) {
                    this._pixiData.instance.matrix[9] = value / 255, this._createjsParams.greenOffset = value;
                }
            },
            blueOffset: {
                get() {
                    return this._createjsParams.blueOffset;
                },
                set(value) {
                    this._pixiData.instance.matrix[14] = value / 255, this._createjsParams.blueOffset = value;
                }
            },
            alphaOffset: {
                get() {
                    return this._createjsParams.alphaOffset;
                },
                set(value) {
                    this._pixiData.instance.matrix[19] = value / 255, this._createjsParams.alphaOffset = value;
                }
            }
        });

        P.apply(this, args);
    }
    
    get pixi() {
        return this._pixiData.instance;
    }
}

// temporary prototype
Object.defineProperties(CreatejsColorFilter.prototype, {
	_createjsParams: {
		value: createCreatejsColorFilterParams(),
		writable: true
	},
	_pixiData: {
		value: createPixiColorMatrixFilterData(createObject<CreatejsColorFilter>(CreatejsColorFilter.prototype)),
		writable: true
	}
});