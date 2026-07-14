import { Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsDisplayObject, syncToPixi } from './core';

/**
 * Recovers the wrapper contract (the paired Pixi instance) on a value typed
 * as a real createjs display object. Inside a wrapper-driven tree every
 * display object is a wrapper class instance, but the type system needs this
 * checked explicitly - same pattern as isBlendModeChild in MovieClip.ts.
 */
function isWrapped(obj: createjs.DisplayObject): obj is createjs.DisplayObject & ICreatejsDisplayObject<Container> {
	return 'pixi' in obj && 'updateBlendModeForPixi' in obj;
}

/**
 * The hit clip must additionally be frame-addressable (a Sprite/MovieClip
 * wrapper), because the helper parks it on its hit frame.
 */
function isAnimatableWrapped(obj: createjs.DisplayObject): obj is createjs.DisplayObject & ICreatejsDisplayObject<Container> & Pick<createjs.MovieClip, 'gotoAndStop'> {
	return isWrapped(obj) && 'gotoAndStop' in obj;
}

/**
 * Forwards a frame argument into gotoAndStop verbatim, including undefined.
 * The original AC implementation passed the constructor arguments straight
 * through, and the real createjs gotoAndStop tolerates undefined without
 * throwing (measured: it pauses without moving, for MovieClip and Sprite
 * both) - so an omitted frame must stay an as-is forward, not become a skip,
 * a substitute value, or an error. gotoAndStop's declaration (rightly)
 * doesn't accept undefined; the optional parameter in the shape below lets
 * the narrower real signature through via method-parameter bivariance. This
 * is a deliberate, isolated use of that unsound comparison rule: the runtime
 * data flow is the priority here, and this function is the one place where
 * the type description compromises instead.
 */
function gotoAndStopVerbatim(target: { gotoAndStop(positionOrLabel?: string | number): void }, positionOrLabel: string | number | undefined): void {
	target.gotoAndStop(positionOrLabel);
}

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
export class CreatejsButtonHelper extends createjs.ButtonHelper {
	constructor(
		target: createjs.Sprite | createjs.MovieClip,
		outLabel?: string | number,
		overLabel?: string | number,
		downLabel?: string | number,
		play?: boolean,
		hitArea?: createjs.DisplayObject,
		hitLabel?: string | number
	) {
		super(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel);

		if (!isWrapped(target)) {
			throw new TypeError('CreatejsButtonHelper requires wrapper class instances for target and hitArea.');
		}

		const pixi = target.pixi;

		let hitPixi: Container;
		if (hitArea) {
			if (!isAnimatableWrapped(hitArea)) {
				throw new TypeError('CreatejsButtonHelper requires wrapper class instances for target and hitArea.');
			}

			gotoAndStopVerbatim(hitArea, hitLabel);
			// The hit clip hangs on the pixi tree only (never on the createjs tree),
			// so the per-tick pull sync can never reach it. It is static after the
			// gotoAndStop above, so one explicit sync here is sufficient.
			syncToPixi(hitArea);
			hitPixi = pixi.addChild(hitArea.pixi);
			hitPixi.alpha = 0.00001;
		} else {
			// 4-argument publish form (empty hit frame): the target itself is the
			// hit surface, exactly like the original. Its alpha is left alone -
			// the button must stay visible.
			hitPixi = pixi;
		}

		let isOver = false;
		let isDown = false;

		hitPixi.on('pointerover', function() {
			isOver = true;
			if (isDown) {
				gotoAndStopVerbatim(target, downLabel);
			} else {
				gotoAndStopVerbatim(target, overLabel);
			}
		});

		hitPixi.on('pointerout', function() {
			isOver = false;

			if (isDown) {
				gotoAndStopVerbatim(target, overLabel);
			} else {
				gotoAndStopVerbatim(target, outLabel);
			}
		});

		hitPixi.on('pointerdown', function() {
			isDown = true;
			gotoAndStopVerbatim(target, downLabel);
		});

		hitPixi.on('pointerup', function() {
			isDown = false;
			if (isOver) {
				gotoAndStopVerbatim(target, overLabel);
			} else {
				gotoAndStopVerbatim(target, outLabel);
			}
		});

		hitPixi.on('pointerupoutside', function() {
			isDown = false;
			if (isOver) {
				gotoAndStopVerbatim(target, overLabel);
			} else {
				gotoAndStopVerbatim(target, outLabel);
			}
		});

		hitPixi.interactive = true;
		hitPixi.cursor = 'pointer';
	}
}
