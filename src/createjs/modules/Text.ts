import { BLEND_MODES, Container, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Text.html | PIXI.Text}
 */
export class PixiText extends Text {}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
export class PixiTextContainer extends Container {
	private _createjs: CreatejsText;
	private _text: PixiText;

	constructor(cjs: CreatejsText, text: PixiText) {
		super();

		this._createjs = cjs;
		this._text = text;
	}

	get createjs() {
		return this._createjs;
	}

	get text() {
		return this._text;
	}
}

export type TCreatejsTextAlign = 'left' | 'center' | 'right';

/**
 * @ignore
 */
const DEF_ALIGN: TCreatejsTextAlign = 'left';

export type TCreatejsTextConstructorArgs = [string?, string?, string?];

/**
 * Members of the (untyped) createjs.Text runtime that the wrapper relies on.
 */
export interface ICreatejsTextBase extends ICreatejsDisplayObjectBase {
}

export interface ICreatejsTextBaseConstructor {
	new (...args: TCreatejsTextConstructorArgs): ICreatejsTextBase;
}

/**
 * @ignore
 */
const TextBase: ICreatejsTextBaseConstructor = createjs.Text;

export interface ICreatejsParsedText {
	fontSize: number;
	fontFamily: string;
	fontWeight: string;
}

export interface IPixiTextData extends IPixiData<PixiTextContainer> {
	text: string;
	font: string;
	color: string;
	textAlign: TCreatejsTextAlign;
	lineHeight: number;
	lineWidth: number;
}

/**
 * @ignore
 */
function createPixiTextData(cjs: CreatejsText): IPixiTextData {
	const text = new PixiText('', {
		wordWrap: true
	});
	const pixi = new PixiTextContainer(cjs, text);
	pixi.addChild(text);

	return Object.assign(createPixiData<PixiTextContainer>(pixi, pixi.pivot), {
		text: '',
		font: '',
		color: '',
		textAlign: DEF_ALIGN,
		lineHeight: 0,
		lineWidth: 0
	});
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsText, IPixiTextData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsText): IPixiTextData {
	const data = createPixiTextData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsText): IPixiTextData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text}
 */
export class CreatejsText extends TextBase implements ICreatejsDisplayObject<PixiTextContainer> {
	constructor(text: string, font: string, color: string = '#000000') {
		super(text, font, color);

		ensureData(this);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		ensureData(this).instance.text.blendMode = mode;
	}

	get text() {
		return ensureData(this).text;
	}

	set text(text) {
		const data = ensureData(this);

		data.instance.text.text = text;
		this._align(data.textAlign);

		data.text = text;
	}

	private _parseFont(font: string): ICreatejsParsedText {
		const p = font.split(' ');

		let w = 'normal';
		let s = p.shift() || '';

		if (s.indexOf('px') === -1) {
			w = s;
			s = p.shift() || '';
		}

		return {
			fontWeight: w,
			fontSize: Number((s || '0px').replace('px', '')),
			fontFamily: p.join(' ').replace(/'/g, '') //'
		};
	}

	get font() {
		return ensureData(this).font;
	}

	set font(font) {
		const data = ensureData(this);
		const _font = this._parseFont(font);

		data.instance.text.style.fontWeight = _font.fontWeight;
		data.instance.text.style.fontSize = _font.fontSize;
		data.instance.text.style.fontFamily = _font.fontFamily;

		data.font = font;
	}

	private _parseColor(color: string) {
		return parseInt(color.slice(1), 16);
	}

	get color() {
		return ensureData(this).color;
	}

	set color(color) {
		const data = ensureData(this);

		data.instance.text.style.fill = this._parseColor(color);

		data.color = color;
	}

	private _align(align: TCreatejsTextAlign) {
		const pixiText = ensureData(this).instance.text;

		if (align === 'left') {
			pixiText.x = 0;
			return;
		}

		if (align === 'center') {
			pixiText.x = -pixiText.width / 2;
			return;
		}

		if (align === 'right') {
			pixiText.x = -pixiText.width;
			return;
		}
	}

	get textAlign() {
		return ensureData(this).textAlign;
	}

	set textAlign(align) {
		const data = ensureData(this);

		data.instance.text.style.align = align;
		this._align(align);

		data.textAlign = align;
	}

	get lineHeight() {
		return ensureData(this).lineHeight;
	}

	set lineHeight(height) {
		const data = ensureData(this);

		data.instance.text.style.lineHeight = height;

		data.lineHeight = height;
	}

	get lineWidth() {
		return ensureData(this).lineWidth;
	}

	set lineWidth(width) {
		const data = ensureData(this);

		data.instance.text.style.wordWrapWidth = width;
		this._align(data.textAlign);

		data.lineWidth = width;
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
