import * as PA from './createjs/modules';
import createjs from '@tawaship/createjs-module';

// overrides

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

// The typed createjs runtime (with the wrapper classes installed by the
// assignments above). Re-exported so consumers don't need a second import
// for it; the ambient `createjs` namespace types come along with this
// package's type definitions either way.
export { createjs };
