import createjs from '@tawaship/createjs-module';
import { updateDisplayObjectChildren, ITickerData, ICreatejsDisplayObjectUpdater } from './core';

/**
 * [[https://createjs.com/docs/easeljs/classes/StageGL.html | createjs.StageGL]]
 */
export class CreatejsStageGL extends createjs.StageGL implements ICreatejsDisplayObjectUpdater {
	updateForPixi(props: ITickerData) {
		if (this.tickOnUpdate) { this.tick(props); }
		this.dispatchEvent("drawstart");
		updateDisplayObjectChildren(this, props);
		this.dispatchEvent("drawend");
		
		return true;
	}
}