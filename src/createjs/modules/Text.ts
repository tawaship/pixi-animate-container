import { BLEND_MODES, Container, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { TCreatejsEventListener, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Text.html | PIXI.Text}
 */
export class PixiText extends Text {}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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
 *
 * `text`/`font`/`color`/`textAlign`/`lineHeight`/`lineWidth`/`mask` are all
 * plain data properties on the real createjs.Text/DisplayObject, but this
 * wrapper must intercept get/set on each to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts them despite TS2611/TS2416.
 */
export class CreatejsText extends createjs.Text implements ICreatejsDisplayObject<PixiTextContainer> {
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

	// @ts-expect-error TS2611 - see the class-level comment above
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

	// @ts-expect-error TS2611 - see the class-level comment above
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

	// @ts-expect-error TS2611 - see the class-level comment above
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

	// @ts-expect-error TS2611 - see the class-level comment above
	get textAlign() {
		return ensureData(this).textAlign;
	}

	set textAlign(align) {
		const data = ensureData(this);

		data.instance.text.style.align = align;
		this._align(align);

		data.textAlign = align;
	}

	// @ts-expect-error TS2611 - see the class-level comment above
	get lineHeight() {
		return ensureData(this).lineHeight;
	}

	set lineHeight(height) {
		const data = ensureData(this);

		data.instance.text.style.lineHeight = height;

		data.lineHeight = height;
	}

	// @ts-expect-error TS2611 - see the class-level comment above
	get lineWidth() {
		return ensureData(this).lineWidth;
	}

	set lineWidth(width) {
		const data = ensureData(this);

		data.instance.text.style.wordWrapWidth = width;
		this._align(data.textAlign);

		data.lineWidth = width;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	get mask() {
		return ensureData(this).mask;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	// Every overload of the real EventDispatcher.addEventListener has to be
	// redeclared verbatim to override it at all (see TCreatejsEventListener).
	// Text only ever receives the function-listener shapes in practice (the
	// `{ handleEvent }` shapes exist for ButtonHelper, which can only target
	// a Sprite/MovieClip) - that branch just forwards to the real
	// implementation with no interaction bridging.
	addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
	addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): Function | Object {
		if (typeof listener === 'function') {
			const res = super.addEventListener(type, listener, useCapture);
			addInteractionListener(this, type, listener);

			return res;
		}

		return super.addEventListener(type, listener, useCapture);
	}

	// See the class-level removeEventListener comment on CreatejsShape for why
	// the real 5th `Function` catch-all overload is intentionally not
	// redeclared here.
	removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
	removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): void {
		if (typeof listener === 'function') {
			super.removeEventListener(type, listener, useCapture);
			removeInteractionListener(this, type, listener);

			return;
		}

		super.removeEventListener(type, listener, useCapture);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}
