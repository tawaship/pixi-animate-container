
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("", {url: "https://localhost" });

global.window = window;
for (let i in window) {
	global[i] = window[i];
}

global.HTMLVideoElement = class HTMLVideoElement extends window.HTMLMediaElement {}
global.HTMLCanvasElement = window.HTMLCanvasElement;
global.HTMLImageElement = window.HTMLImageElement;

global.createjs = require('@tawaship/createjs-module');
global.AdobeAn = {};
const assert = require('assert');
const PIXI = require('pixi.js-legacy');
const PixiAnimate = require('../');
const path = require('path');
require('./game/game.js');

describe('PiximAnimate.container', () => {
	describe('loader', () => {
		it('simple', () => {
			const app = new PIXI.Application({
				width: 450,
				height: 800,
				antialias: true,
				backgroundColor: 0xFFFFFF
			});
			
			return PixiAnimate.loadAssetAsync({
				id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
				basepath: path.resolve(__dirname, 'game/') + "\\",
				options: {
					crossOrigin: false
				}
			});
		});
	});
});