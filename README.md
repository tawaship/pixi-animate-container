# pixi-animate-container

"pixi-animate-container" is a plugin for using content created by Adobe Animate with "[pixi.js](https://github.com/pixijs/pixi.js)".

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

---

## Overview

### Each original (simplified) flow

- createjs contents created with Adobe Animate
![origin](https://raw.githubusercontent.com/tawaship/pixi-animate-core/master/img/animate.png)

- pixi.js contents
![origin](https://raw.githubusercontent.com/tawaship/pixi-animate-core/master/img/pixi.png)

### Flow to be realized

![core](https://raw.githubusercontent.com/tawaship/pixi-animate-core/master/img/core.png)


## Supported version

- A complete set of content created with Adobe Animate version 24.0.1 / 24.0.5
- pixi.js 5.3.x

I have not confirmed the operation on other versions.

## Setup

### NPM

```sh
npm install --save pixi.js @tawaship/pixi-animate-container
```

<br />

```javascript
import * as PIXI from 'pixi.js';
import * as PixiAnimate from '@tawaship/pixi-animate-container';
```

### Browser

```sh
git clone https://github.com/tawaship/pixi-animate-container
```

<br />

```html
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.2/pixi.min.js"></script>
<script src="/path/to/dist/pixi-animate-container.min.js"></script>
<script src="[your content].js"></script>
```

## Usage

For browsers, this module is stored in the namespace "PIXI.animate".

```javascript
const app = new PIXI.Application();

PIXI.animate.loadAssetAsync([{
	id: "[conposition id]", // "lib.properties.id" in Animate content.
	basepath: "[content directory path]", // Directory path of Animate content.
	options: {
		crossOrigin: false
	}
}]).then(function(lib) {
	// If you load multiple contents, the argument "lib" will be an array and the "lib" of each content will be stored in order.
	class Root extends PIXI.animate.Container {
		constructor() {
			super();
			app.ticker.add(this.handleTick, this);
			this.addCreatejs(new lib.game()); // The class you want to use.
		}
	}
	
	app.stage.addChild(new Root());
	document.body.appendChild(app.view);
});
```

See [here](https://tawaship.github.io/pixi-animate-container/docs/interfaces/IAnimatePrepareTarget.html) for complete options for `PIXI.animate.loadAssetAsync`.

## Change log

### 3.0.0

- Timeline ticking is now delegated to the original createjs traversal, so sibling frame scripts run in the same order as pure createjs (reverse walk over the live children array). Content that depends on order-sensitive sibling interactions (siblings sending the shared parent to different frames, reading each other's state, removing each other) now behaves exactly like genuine createjs. Content without such interactions is unaffected.
- Instances removed from the display list in the middle of a tick are no longer processed once more in that tick.
- `instance.addEventListener("tick", handler)` now works: tick events are delivered through the original createjs dispatch path.
- Display properties (`x`, `y`, `scaleX`, `scaleY`, `rotation`, `skewX`, `skewY`, `regX`, `regY`, `alpha`, `visible`, `_off`) are plain data properties again, exactly as in original createjs, and are copied to the pixi mirror once per tick. Two consequences:
  - Reading `instance.pixi.*` from inside a frame script returns the values synced at the end of the previous tick. Read the createjs-side properties (always current) from frame scripts instead.
  - Reading `_off` before anything writes it returns `undefined` instead of `false` (equivalent in every boolean context).
- `createjs.ColorFilter` exposes its 8 color scalars as plain enumerable properties, exactly as in original createjs.
- Discontinued

	|name|
	|:--|
	|mixinCreatejsDisplayObject|
	|IMixinedCreatejsDisplayObject|
	|ICreatejsParam|
	|CreatejsMovieClip.updateForPixi|
	|updateDisplayObjectChildren|

- This release was implemented with Claude (Anthropic's AI assistant). Its correctness rests on verification rather than authorship: a per-tick full-state differential suite confirms equality with the previous release everywhere except the intended changes above, and equality with pure createjs including sibling-interaction content.

### 2.4.0

- Discontinued

	|name|class|
	|:--|:--|
    |createjs.Stage|CreatejsStage|
	|createjs.StageGL|CreatejsStageGL|

- Timeline advancement is now driven by delta time accumulation: each tick, delta time is converted to a frame count and `updateForPixi()` is called once per elapsed frame.
  - With `createjsOverSpeed` set to `true` (default), the number of calls per tick can exceed one, allowing animation playback speed to be maintained in real time even when the PIXI.js frame rate drops.
- Fixed an issue where nested MovieClips could advance frames at slightly different timings due to independent time accumulation.

### 2.3.0

- Control of createjs animation speed
- Control of createjs custom frame event
  - `endAnimation`: reach the last frame
  - `reachLabel`: reach the labeled frame

### 2.1.0

- Supports compositeOperation (blendMode in pixi.js)
  - lighter (`PIXI.BLEND_MODES.ADD`)
  - multiply (`PIXI.BLEND_MODES.MULTIPLY`)
  - screen (`PIXI.BLEND_MODES.SCREEN`)

### 2.0.0

- Integrate core modules into source code
- Changed the method of linking with pixi.js ticker
- Supports sound playback
- Improving accuracy of interaction processing

### 1.0.0

- Overrides

	|name|class|
	|:--|:--|
	|createjs.MovieClip|[CreatejsMovieClip](https://tawaship.github.io/pixi-animate-container/docs/classes/CreatejsMovieClip.html)|
