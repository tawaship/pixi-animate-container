import createjs from '@tawaship/createjs-module';
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ButtonHelper.html | createjs.ButtonHelper}
 *
 * Unlike the original, this wrapper requires `target` (and `hitArea` when
 * given) to be wrapper class instances (it re-implements the button states
 * on the Pixi interaction layer, so it needs their paired Pixi objects).
 * Inputs that don't satisfy that crashed with a TypeError mid-construction
 * before; now they fail the explicit check below at the same point.
 * `hitArea` itself is optional: Animate publishes a button whose hit frame
 * is empty as a 4-argument call (measured: `new cjs.ButtonHelper(target,
 * 0, 1, 1)`), and the original then uses the target itself as the hit
 * surface - mirrored here by making the target's own Pixi instance
 * interactive. The frame arguments are forwarded verbatim, omitted or not,
 * exactly as before (see gotoAndStopVerbatim above).
 */
export declare class CreatejsButtonHelper extends createjs.ButtonHelper {
    constructor(target: createjs.Sprite | createjs.MovieClip, outLabel?: string | number, overLabel?: string | number, downLabel?: string | number, play?: boolean, hitArea?: createjs.DisplayObject, hitLabel?: string | number);
}
