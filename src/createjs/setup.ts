import * as PA from './modules';
import createjs from '@tawaship/createjs-module';

export function setupCreatejs() {
	// overrides
	createjs.Stage = PA.CreatejsStage;
	createjs.StageGL = PA.CreatejsStageGL;
	createjs.MovieClip = PA.CreatejsMovieClip;
	createjs.Sprite = PA.CreatejsSprite;
	createjs.Shape = PA.CreatejsShape;
	createjs.Bitmap = PA.CreatejsBitmap;
	createjs.Graphics = PA.CreatejsGraphics;
	createjs.Text = PA.CreatejsText;
	createjs.ButtonHelper = PA.CreatejsButtonHelper;
	createjs.ColorFilter = PA.CreatejsColorFilter;

	// install plugins
	createjs.MotionGuidePlugin.install();
}