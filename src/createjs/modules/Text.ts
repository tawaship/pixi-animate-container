import { Container, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater } from './core';
import { createObject } from './utils';
import { CreatejsEventManager } from './EventManager';

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Text.html | PIXI.Text}
 */
export class PixiText extends Text {}

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container}
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

export interface ICreatejsTextParam extends ICreatejsParam {
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
function createCreatejsTextParams(text: string, font: string, color: string): ICreatejsTextParam {
	return Object.assign(createCreatejsParams(), {
		text: text,
		font: font,
		color: color,
		textAlign: DEF_ALIGN,
		lineHeight: 0,
		lineWidth: 0
	});
}

export interface IPixiTextData extends IPixiData<PixiTextContainer> {

}

/**
 * @ignore
 */
function createPixiTextData(cjs: CreatejsText, text: PixiText): IPixiTextData {
	const pixi = new PixiTextContainer(cjs, text);
	
	return createPixiData<PixiTextContainer>(pixi, pixi.pivot);
}

export interface ICreatejsParsedText {
	fontSize: number;
	fontFamily: string;
	fontWeight?: string | number;
}

/**
 * @ignore
 */
const P = createjs.Text;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text}
 */
export class CreatejsText extends mixinCreatejsDisplayObject(createjs.Text) implements ICreatejsDisplayObjectUpdater {
	protected _pixiData: IPixiTextData;
	protected _createjsParams: ICreatejsTextParam;
	protected _createjsEventManager: CreatejsEventManager;
	
	constructor(text: string, font: string, color: string = '#000000', ...args: any[]) {
		super(text, font, color, ...args);
		
		this._createjsParams = createCreatejsTextParams(text, font, color);
		
		const _font = this._parseFont(font);
		
		const t = new PixiText(text, {
			fontWeight: _font.fontWeight,
			fontSize: _font.fontSize,
			fontFamily: _font.fontFamily,
			fill: this._parseColor(color),
			wordWrap: true
		});
		
		this._pixiData = createPixiTextData(this, t);
		this._pixiData.instance.addChild(t);
		
		this._createjsEventManager = new CreatejsEventManager(this);
		
		P.call(this, text, font, color, ...args);
	}
	
	updateForPixi(e: ITickerData) {
		return true;
	}
	
	get text() {
		return this._createjsParams.text;
	}
	
	set text(text) {
		this._pixiData.instance.text.text = text;
		this._align(this.textAlign);
		
		this._createjsParams.text = text;
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
		return this._createjsParams.font;
	}
	
	set font(font) {
		const _font = this._parseFont(font);
		this._pixiData.instance.text.style.fontSize = _font.fontSize;
		this._pixiData.instance.text.style.fontFamily = _font.fontFamily;
		
		this._createjsParams.font = font;
	}
	
	private _parseColor(color: string) {
		return parseInt(color.slice(1), 16);
	}
	
	get color() {
		return this._createjsParams.color;
	}
	
	set color(color) {
		this._pixiData.instance.text.style.fill = this._parseColor(color);
		
		this._createjsParams.color = color;
	}
	
	private _align(align: TCreatejsTextAlign) {
		if (align === 'left') {
			this._pixiData.instance.text.x = 0;
			return;
		}
		
		if (align === 'center') {
			this._pixiData.instance.text.x = -this._pixiData.instance.text.width / 2;
			return;
		}
		
		if (align === 'right') {
			this._pixiData.instance.text.x =  -this._pixiData.instance.text.width;
			return;
		}
	}
	
	get textAlign() {
		return this._createjsParams.textAlign;
	}
	
	set textAlign(align) {
		this._pixiData.instance.text.style.align = align;
		this._align(align);
		
		this._createjsParams.textAlign = align;
	}
	
	get lineHeight() {
		return this._createjsParams.lineHeight;
	}
	
	set lineHeight(height) {
		this._pixiData.instance.text.style.lineHeight = height;
		
		this._createjsParams.lineHeight = height;
	}
	
	get lineWidth() {
		return this._createjsParams.lineWidth;
	}
	
	set lineWidth(width) {
		this._pixiData.instance.text.style.wordWrapWidth = width;
		this._align(this.textAlign);
		
		this._createjsParams.lineWidth = width;
	}
}

// temporary prototype
Object.defineProperties(CreatejsText.prototype, {
	_createjsParams: {
		value: createCreatejsTextParams('', '', ''),
		writable: true
	},
	_pixiData: {
		value: createPixiTextData(createObject<CreatejsText>(CreatejsText.prototype), new PixiText('')),
		writable: true
	}
});