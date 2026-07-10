import { Sprite, Texture, BaseTexture, BLEND_MODES, Rectangle } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export class PixiSprite extends Sprite {
	private _createjs: CreatejsSprite;

	constructor(cjs: CreatejsSprite) {
		super();

		this._createjs = cjs;
	}

	get createjs() {
		return this._createjs;
	}
}

export interface ICreatejsSpriteSheetFrame {
	image: HTMLImageElement | HTMLCanvasElement;
	rect: Rectangle;
}

export interface ICreatejsSpriteSheet {
	getFrame(frameIndex: number): ICreatejsSpriteSheetFrame;
}

export type TCreatejsSpriteConstructorArgs = [ICreatejsSpriteSheet?, (string | number)?];

/**
 * Members of the (untyped) createjs.Sprite runtime that the wrapper relies on.
 */
export interface ICreatejsSpriteBase extends ICreatejsDisplayObjectBase {
	spriteSheet: ICreatejsSpriteSheet;
	currentFrame: number;
	gotoAndStop(frameOrAnimation: string | number): void;
	initialize(...args: TCreatejsSpriteConstructorArgs): void;
}

export interface ICreatejsSpriteBaseConstructor {
	new (...args: TCreatejsSpriteConstructorArgs): ICreatejsSpriteBase;
}

/**
 * @ignore
 */
const SpriteBase: ICreatejsSpriteBaseConstructor = createjs.Sprite;

export interface IPixiSpriteData extends IPixiData<PixiSprite> {
}

/**
 * @ignore
 */
function createPixiSpriteData(cjs: CreatejsSprite): IPixiSpriteData {
	const pixi = new PixiSprite(cjs);

	return createPixiData<PixiSprite>(pixi, pixi.anchor);
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsSprite, IPixiSpriteData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsSprite): IPixiSpriteData {
	const data = createPixiSpriteData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsSprite): IPixiSpriteData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 */
export class CreatejsSprite extends SpriteBase implements ICreatejsDisplayObject<PixiSprite> {
	constructor(...args: TCreatejsSpriteConstructorArgs) {
		super(...args);

		ensureData(this);
	}

	initialize(...args: TCreatejsSpriteConstructorArgs) {
		resetData(this);

		return super.initialize(...args);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	/**
	 * The Pixi mirror is only updated through gotoAndStop, so the spritesheet
	 * animation must not self-advance when the original Sprite._tick runs
	 * (tick delegation would otherwise advance the createjs side alone and
	 * leave the display behind).
	 */
	advance(time?: number): void {
		// spritesheet self-animation is disabled
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		ensureData(this).instance.blendMode = mode;
	}

	gotoAndStop(frameOrAnimation: string | number): void {
		super.gotoAndStop(frameOrAnimation);

		const frame = this.spriteSheet.getFrame(this.currentFrame);
		const baseTexture = BaseTexture.from(frame.image);
		const texture = new Texture(baseTexture, frame.rect);

		ensureData(this).instance.texture = texture;
	}

	get mask() {
		return ensureData(this).mask;
	}

	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean) {
		const p = super.addEventListener(type, cb, useCapture);

		if (!(cb instanceof CreatejsButtonHelper)) {
			addInteractionListener(this, type, cb);
		}

		return p;
	}

	removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean) {
		super.removeEventListener(type, cb, useCapture);
		removeInteractionListener(this, type, cb);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}
