import createjs from '@tawaship/createjs-module';
import { ITickerData, ICreatejsDisplayObjectUpdater } from './core';
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/StageGL.html | createjs.StageGL}
 */
export declare class CreatejsStageGL extends createjs.StageGL implements ICreatejsDisplayObjectUpdater {
    static [x: string]: any;
    updateForPixi(props: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
}
