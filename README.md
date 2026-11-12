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

## Supported features

What plays, sorted by how far it is confirmed. "Checked" means that the content is played frame by frame
next to CreateJS itself, and what PixiJS is given to draw (positions, matrices, visibility, masks, blend
modes, fills) is compared with what CreateJS would draw, after every frame and at every point PixiJS may
render; the samples (https://tawaship.github.io/pixi-animate-container/samples/) show the same content
played by this package and by CreateJS.

### Supported

| Feature | Notes |
|---|---|
| Timelines: independent / synched / single frame clips, loops, labels, `gotoAndPlay` / `gotoAndStop`, `play` / `stop` | A `goto` made between frames (from a click handler or another ticker callback) is drawn at once |
| Frame scripts | Run at their frame, in the same order as CreateJS |
| Classic and motion tweens, motion guides, easing | |
| Rotation and skew | Drawn as Animate's HTML5 Canvas output draws them, also when both are set |
| Shapes with solid fills and strokes | |
| Bitmap fills (from an image or a sprite sheet frame) | The image is always repeated, which is what published content uses |
| Gradient fills and strokes (linear and radial) | Outside the gradient the end colors continue, as in CreateJS |
| Bitmaps and sprite sheets (one or several sheets) | |
| Masks, tweened masks, masks that are taken off | |
| Color effects published as `createjs.ColorFilter`, and their tweens | Drawn with a `PIXI.filters.ColorMatrixFilter` |
| Blend modes: add (`lighter`), multiply, screen | Switching them on and off, also on a shape, bitmap or text, as CreateJS draws them |
| Buttons (`ButtonHelper`) and mouse events (`mousedown`, `pressmove`, `pressup`, `click`, `rollover`, `rollout`) | Listened to with `on` / `addEventListener` on the CreateJS instance; PixiJS's pointer events are used underneath |
| Frame rate | Content plays at the frame rate it was published with, whatever the display's rate; `createjsSmooth` (on by default) keeps it even when the time between frames varies; `createjsSpeed` changes the speed |
| Sound (`playSound` in frame scripts) | With `options: { useSound: true }` in `loadAssetAsync`; played by CreateJS's `Sound` |

### Probably works

| Feature | What is not confirmed |
|---|---|
| Dynamic text | Font, color, alignment, line height and width are passed on, and lines are broken by PixiJS's word wrap, which can break them at other places than CreateJS. `textBaseline` other than the default and `outline` are not drawn. A `lineHeight` of 0 (the default) uses PixiJS's line spacing, where CreateJS uses 1.2 times the width of "M" |
| Playing a symbol other than the published root (`new lib.Symbol()` added with `addCreatejs`) | Plays as a root of its own. Not compared with CreateJS frame by frame; the samples page can play any symbol of a sample |
| `cache()` and filter caches | CreateJS's cache is made but not used for drawing: color effects are drawn without it, and a blend mode on a cached clip applies to each object in it rather than to the cached image as a whole (they differ where the objects overlap) |
| `regX` / `regY` of a bitmap or sprite | Not covered by the published samples |
| A mask whose shape is empty (not null) | Not covered by the published samples; CreateJS does not clip with it, and this package may clip everything |

### Not supported

| Feature | What happens |
|---|---|
| Blend modes other than add, multiply and screen (darken, lighten, overlay, hard light, difference and so on) | Drawn as the blend mode of the parent (PixiJS's WebGL renderer does not have them) |
| Filters other than color effects (blur, glow, drop shadow and so on) | Not drawn |
| Bitmap strokes (`beginBitmapStroke`) | Not drawn |
| `no-repeat` and the other repetitions of a bitmap fill | Drawn repeated |
| Sprite sheet animations playing on their own (`new Sprite(sheet, frame)`, a sprite's own `framerate`) | A sprite shows the frame its timeline goes to (as published content uses sprites) |

Content that uses the Animate camera ("Advanced Layers") has not been checked.

## Using with TypeScript

The full createjs 1.0 API is typed (via `@tawaship/createjs-module`), so
TypeScript checks every call against the real createjs surface. New type
errors on code that used to compile against an untyped `createjs` are the
checker catching a real mismatch, not a bug in this package.

Named child instances (`this.a` and friends) are stamped onto published
symbols at runtime by Adobe Animate's output, so no type definition can know
their names. `CreatejsMovieClip` therefore carries a string index signature:
any undeclared member resolves as `any`, so named instances can be referenced
directly with no per-content setup. Declared members are unaffected —
`currentFrame` is still `number`, and wrong-typed writes to declared members
still error. Note that this works on values typed as `CreatejsMovieClip` (or
a subclass); a union type only allows members that exist on every branch.

If you want named instances checked instead of `any`, declare them on your
own class — `declare` emits no code, so the runtime object is untouched, and
everything reached through the declared name stays fully typed:

```typescript
import { CreatejsMovieClip } from '@tawaship/pixi-animate-container';

class Game extends CreatejsMovieClip {
	declare a: CreatejsMovieClip; // named instance from the Animate timeline
}
```

Prefer the wrapper classes exported by this package (`CreatejsMovieClip`,
`CreatejsSprite`, ...) in your own type annotations. They are subtypes of the
corresponding `createjs.*` classes, so they fit anywhere the createjs API
expects one.

The typed createjs runtime (with the wrapper classes installed) is also
re-exported, so one import serves both:

```typescript
import { createjs, CreatejsMovieClip } from '@tawaship/pixi-animate-container';

const tween = createjs.Tween.get(target);
```

`mask`, `filters`, `compositeOperation` and `Shape.graphics` are typed
nullable, matching the documented createjs runtime (their default is `null`,
and assigning `null` to `mask` is how a mask is cleared).

## Claude Code skills

The package comes with skills for Claude Code (Anthropic's AI coding tool) in `dist-skills/`: `pixi-animate-container-guide`, which tells it how to load and play Animate content with this package. To let Claude Code use them in your project, copy them into the project's `.claude/skills/`:

```
mkdir -p .claude/skills
cp -r node_modules/@tawaship/pixi-animate-container/dist-skills/* .claude/skills/
```

Copy them again after updating the package: each skill describes the version it comes with, and tells Claude Code to follow the type definitions in `node_modules` when the installed version is another one.

## Change log

### 3.1.0

- Added: `createjsSmooth` (default `true`) on the container. Each
  `handleTick` used to play the whole frames owed by the `delta` values
  added up; when the content's frame rate divides the display's (60 fps
  content on a 60 Hz display), the small jitter of `delta` then played no
  frame on one call and two on the next, which made the animation uneven.
  With `createjsSmooth` the frames follow a steady clock kept in step with
  the real time, so the playing stays even. The frames played and their order
  are unchanged; set it to `false` for the previous pacing.
- Added: Claude Code skills in `dist-skills/`, published with the package
  (see "Claude Code skills").
- Changed: a `createjsSpeed` below `0` (or `NaN`) plays as `0`. The content
  pauses and resumes as soon as the speed is set back (frames cannot be played
  backwards). `createjsSpeed` still reads back the value you set.
- Fixed: what pixi.js draws now matches what createjs would draw at that
  moment, whenever pixi.js renders — not only right after `handleTick`.
  The container brings its content up to date right before each render, so:
  - after `gotoAndPlay()` / `gotoAndStop()` called between frames (for
    example from another ticker callback or a click handler), the next render
    shows the new frame correctly. Previously, objects appearing for the first
    time on that frame were drawn once at their default position, rotation
    and alpha, and graphic (synched) symbols inside showed their previous frame
  - values you write to createjs instances after `handleTick`
    (`instance.x = 100`) are drawn in the same display frame instead of one
    frame later
  - content added with `addCreatejs` is drawn correctly even if a render
    comes before its first `handleTick`
- Fixed: a value written to an instance's pixi node (`instance.pixi.x = 100`)
  stays until the timeline writes that property again, as in 2.x (3.0.x lost
  it on the next tick). The createjs instance keeps its own value
  (`instance.x` still reads what createjs wrote), as in 2.x.
- Changed: the display properties (`x`, `y`, `scaleX`, `scaleY`, `rotation`,
  `skewX`, `skewY`, `regX`, `regY`, `alpha`, `visible`) are accessors on the
  class prototypes again, as in 2.x: a value written on the createjs side is
  passed to the pixi node at once, so `instance.pixi.*` read from a frame
  script is current. They are enumerable (`for...in` lists them) but are not
  own properties, so `Object.keys()` / `JSON.stringify()` of an instance do not
  include them. `_off` stays a plain property. `compositeOperation` is an
  accessor on every display object class (it was on MovieClip only).
- Fixed: objects that are both rotated and skewed are drawn the way the
  browser output of Animate (createjs) draws them. The values of
  `pixi.rotation` / `pixi.skew` are unchanged.
- Fixed: `compositeOperation` is drawn as createjs draws it. An object draws
  with its own value, or else its nearest ancestor's, so taking a value off
  (`undefined` / `null`) goes back to the inherited one; 2.x and 3.0.x kept
  drawing the value that was taken off, and a change made after a shape was
  first drawn did not show. The value of a Shape, Bitmap, Sprite or Text is
  drawn as well (it was ignored), and `source-over` draws normally inside a
  blended clip.
- Fixed: a Shape given new `graphics` draws only them (the previous graphics
  stayed drawn as well, unless the shape was used as a mask).
- Added: bitmap fills (`beginBitmapFill` / `bf`, which Animate publishes for
  shapes filled with a bitmap, from an image or a sprite sheet frame) are
  drawn. The image is always repeated, which is what published content uses.
  Bitmap strokes are not drawn.
- Added: gradient fills and strokes (`beginLinearGradientFill` / `lf`,
  `beginRadialGradientFill` / `rf`, `beginLinearGradientStroke` / `ls`,
  `beginRadialGradientStroke` / `rs`) are drawn, with the colors the browser's
  canvas paints; outside the gradient the end colors continue, as in
  createjs. Each gradient is drawn into a texture once and shared by the
  shapes that use it.
- Fixed: an object marked `_off` that is on a display list is drawn, as in
  createjs. A shape used as a mask is no longer drawn itself, and a mask shape
  taken off with `mask = null` is no longer left drawn in the pixi tree.
- This release was implemented with Claude (Anthropic's AI assistant). Its
  correctness rests on verification rather than authorship: differential
  suites compare pure createjs, the previous release and the pixi tree after
  every tick and at every render point, and each change was confirmed to be
  caught by them when reverted.

### 3.0.1

- The full createjs 1.0 API is now typed: the wrapper classes extend the real
  (typed) createjs classes and are true subtypes of them, so wrapper
  instances fit every `createjs.*`-typed parameter (`addChild`,
  `localToLocal`, `hitArea`, ...). See "Using with TypeScript" above. This
  completes the type strictness introduced in 3.0.0.
- Fixed: `removeAllChildren()` now reaches the Pixi mirror (the override was
  misspelled `removeAllChldren`, so the correctly-spelled call bypassed it
  and left the Pixi children behind).
- Fixed: `addChild` / `addChildAt` with multiple children now forward every
  child (previously only the first argument reached either tree).
- Fixed: `CreatejsSprite.gotoAndStop()` passes a real `PIXI.Rectangle` as the
  texture frame (previously a createjs rectangle was passed by reference and
  happened to work).
- Changed: `CreatejsButtonHelper` throws an explicit `TypeError` when
  `target` / `hitArea` are not wrapper instances (previously it crashed at
  the same point with a property-access `TypeError`). Valid Animate publish
  output is unaffected.
- Added: `CreatejsButtonHelper` supports the 4-argument publish form.
  Animate publishes a button whose hit frame is empty as
  `new cjs.ButtonHelper(target, 0, 1, 1)`; the original then uses the
  target itself as the hit surface, and the wrapper now mirrors that
  (previously this form crashed during construction).
- Changed: interaction bridging in `addEventListener` /
  `removeEventListener` now branches on the listener being a function;
  non-`ButtonHelper` object listeners are no longer passed to the
  function-only bridge.
- Removed unused internal types left over from the 2.x era:
  `ICreatejsColorFilterBase`, `ICreatejsColorFilterBaseConstructor`,
  `ICreatejsDisplayObjectBase`, `ICreatejsLabel`, `ICreatejsChildNode`.
- The typed createjs runtime is re-exported (`import { createjs } from
  '@tawaship/pixi-animate-container'`), and the constructor-argument helper
  types (`TCreatejsMovieClipConstructorArgs` etc.) are now derived from the
  real createjs constructors instead of being maintained by hand.
- `CreatejsMovieClip` carries a string index signature, so the named child
  instances stamped in by Animate publish output (`this.a` and friends) can
  be referenced without per-content declarations (they type as `any`;
  declared members keep their strict types). See "Using with TypeScript".
- `TCreatejsObject` no longer includes `CreatejsGraphics`. The union's
  contract is "wraps a real createjs display object" (what `addCreatejs`
  accepts), and the real `createjs.Graphics` is a drawing-command container,
  not a display object — it is reached through `shape.graphics`, never
  placed on a display list. As a result, the EventDispatcher API
  (`on`/`off`/`addEventListener`, ...) is now usable through the union.
- Fixed: `off()` now also detaches the Pixi-side interaction bridge. The
  original `off` is a prototype alias of `removeEventListener`, which
  bypassed the wrapper's override — so removing an interaction listener
  (`mousedown`, `click`, ...) registered with `on()` left the Pixi-side
  listener behind: the handler kept firing on pointer input and the object
  stayed `interactive`. Published content never removes listeners, so only
  hand-written code using `on()`/`off()` was affected.
- This release was implemented with Claude (Anthropic's AI assistant). Its
  correctness rests on verification rather than authorship: the same
  per-tick full-state differential suites as 3.0.0, plus a direct diff of the
  built output against v3.0.0 confirming the only runtime changes are the
  ones listed above.

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

- TypeScript: the wrapper classes are typed against declared interfaces
  instead of `any`, so member access outside the declared surface no longer
  compiles (e.g. `mc.on(...)`, named timeline instances). 3.0.1 completes
  this with full createjs typings; see "Using with TypeScript".
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
