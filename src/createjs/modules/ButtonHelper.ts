import createjs from '@tawaship/createjs-module';

/**
 * [[https://createjs.com/docs/easeljs/classes/ButtonHelper.html | createjs.ButtonHelper]]
 */
export class CreatejsButtonHelper extends createjs.ButtonHelper {
	constructor(...args: any[]) {
		super(...args);
		
		const createjs = args[0];
		const pixi = createjs.pixi;
		
		const baseFrame = args[1];
		const overFrame = args[2];
		const downFrame = args[3];
		const hit = arguments[5];
		const hitFrame = args[6];
		
		hit.gotoAndStop(hitFrame);
		const hitPixi = pixi.addChild(hit.pixi);
		hitPixi.alpha = 0.00001;
		
		let isOver = false;
		let isDown = false;
		
		hitPixi.on('pointerover', function() {
			isOver = true;
			if (isDown) {
				createjs.gotoAndStop(downFrame);
			} else {
				createjs.gotoAndStop(overFrame);
			}
		});
		
		hitPixi.on('pointerout', function() {
			isOver = false;
			
			if (isDown) {
				createjs.gotoAndStop(overFrame);
			} else {
				createjs.gotoAndStop(baseFrame);
			}
		});
		
		hitPixi.on('pointerdown', function() {
			isDown = true;
			createjs.gotoAndStop(downFrame);
		});
		
		hitPixi.on('pointerup', function() {
			isDown = false;
			if (isOver) {
				createjs.gotoAndStop(overFrame);
			} else {
				createjs.gotoAndStop(baseFrame);
			}
		});
		
		hitPixi.on('pointerupoutside', function() {
			isDown = false;
			if (isOver) {
				createjs.gotoAndStop(overFrame);
			} else {
				createjs.gotoAndStop(baseFrame);
			}
		});
		
		hitPixi.interactive = true;
		hitPixi.cursor = 'pointer';
	}
}