import * as PA from './createjs/modules';
import createjs from '@tawaship/createjs-module';

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

export * from './createjs';
export * from './Container';