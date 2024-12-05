import createjs from '@tawaship/createjs-module';
import { ITickerData, ICreatejsDisplayObjectUpdater } from './core';
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Stage.html | createjs.Stage}
 */
export declare class CreatejsStage extends createjs.Stage implements ICreatejsDisplayObjectUpdater {
    static [x: string]: any;
    updateForPixi(props: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
}
