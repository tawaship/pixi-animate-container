import createjs from '@tawaship/createjs-module';
import { updateDisplayObjectChildren, ITickerData, ICreatejsDisplayObjectUpdater } from './core';

/**
 * [[https://createjs.com/docs/easeljs/classes/Stage.html | createjs.Stage]]
 */
export class CreatejsStage extends createjs.Stage implements ICreatejsDisplayObjectUpdater {
	updateForPixi(props: ITickerData) {
		if (this.tickOnUpdate) { this.tick(props); }
		this.dispatchEvent("drawstart");
		updateDisplayObjectChildren(this, props);
		this.dispatchEvent("drawend");
		
		return true;
	}
}