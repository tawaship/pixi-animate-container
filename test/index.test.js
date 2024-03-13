/*




const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("", {url: "https://localhost" });
const setTimeout = global.setTimeout;
const setInterval = global.setInterval;
const clearInterval = global.clearInterval;

global.window = window;
for (let i in window) {
	global[i] = window[i];
}
global.setTimeout = setTimeout;
global.setInterval = setInterval;
global.clearInterval = clearInterval;
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


			return PixiAnimate.loadAssetAsync({
				id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
				basepath: path.resolve(__dirname, 'game/') + "\\",
				options: {
					crossOrigin: false
				}
			});
*/


const { Builder, Condition } = require("selenium-webdriver");
const express = require("express");
const app = express();
const server = app.listen(5000);
app.use(express.static("./"));
let driver;

beforeAll(() => {
	driver = new Builder().forBrowser("chrome").build();
});

afterAll(async () => {
	driver.quit();
	server.close();
});

test("basic", async () => {
	await driver.get("http://localhost:5000/test/index.html");
	await driver.wait(new Condition(
		"content started",
		async driver => {
			return driver.executeScript("return window.reachLabel && window.endAnimation")
			.then(flag => !!flag);
		}
	));
});