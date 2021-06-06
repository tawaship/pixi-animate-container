window.createjs = require('@tawaship/createjs-module');
window.AdobeAn = {};
const assert = require('assert');
const PIXI = require('pixi.js-legacy');
const PixiAnimate = require('../');
const path = require('path');
require('./game/game.js');

describe('PiximAnimate.container', () => {
	it('basic', () => {
		const app = new PIXI.Application({
			width: 450,
			height: 800,
			antialias: true,
			backgroundColor: 0xFFFFFF
		});
		
		return PixiAnimate.loadAssetAsync({
			id: '2FA8E0C7230941478CE2CA3DB82DBEDF_1',
			basepath: path.resolve(__dirname, 'game/'),
			options: {
				crossOrigin: false
			}
		})
		.then(function(lib) {
			class Root extends PIXI.Container {
				constructor() {
					super();
					
					this.x = 10;
					this.y = 10;
					this.scale.set(0.7);
					
					const container = this.addChild(new PixiAnimate.Container(app.ticker));
					
					container.addChild(new PIXI.Text('Library game'));
					const a = container.addCreatejs(new lib.game());
					a.y = 50;
				}
			}
			
			app.stage.addChild(new Root());
			document.body.appendChild(app.view);
		});
	});
});