---
name: pixi-animate-container-guide
description: Use this skill whenever the user asks to create, edit, or debug content using @tawaship/pixi-animate-container — a plugin that enables Adobe Animate HTML5 Canvas published content to be played within pixi.js (without Pixim.js). Trigger on any mention of 'pixi-animate-container', 'Animate コンテンツ', 'Adobe Animate', 'AdobeAn', 'createjs', or requests to integrate Animate-published JS files into a pixi.js application. Also trigger when the user references concepts like loadAssetAsync, addCreatejs, removeCreatejs, AnimateContainer, CreatejsMovieClip, or handleTick. Always read the PixiJS skill first if available, then apply this skill for animate-container-specific patterns. If the user is working with Pixim.js, use the pixim-animate-container-guide skill instead (it builds on this package).
---

# @tawaship/pixi-animate-container development skill

Supported versions: **`3.1.0`** (this skill ships with the package and describes that version only).

If the installed version (`node_modules/@tawaship/pixi-animate-container/package.json`) is not `3.1.0`, the skill was copied from another version: follow the type definitions in `node_modules` wherever they differ, and suggest copying the skills again from the installed package (see its README, "Claude Code skills").

## Dependencies

This skill depends on the following skills. Read them first, then apply this skill.

- **pixijs-guide** — Type definitions and usage guide for pixi.js v5.3.9. Required because pixi-animate-container runs on top of pixi.js.

## Overview

`@tawaship/pixi-animate-container` is a plugin for playing "Animate content" — content published from Adobe Animate in HTML5 Canvas mode — on pixi.js.

Animate content runs on createjs. This plugin wraps the createjs display objects and integrates them into the pixi.js rendering pipeline.

## Type definition files

**Before writing any code that uses a class, method, or property of this package, always check the corresponding type definition file. If it is already loaded in context there is no need to re-Read it, but when in doubt, always confirm with the Read tool.**

Type definitions are read from the package installed in the project (`node_modules/`). That is the single source of truth that exactly matches the runtime code.

- If the package is not installed, run `npm install @tawaship/pixi-animate-container@3.1.0` first (even in a script-tag project, installing it as a devDependency just for type reference is fine)
- If the installed version differs from this skill's target version, **treat the type definitions in node_modules as authoritative** and follow them wherever they disagree with this skill

| Module | Location of type definitions |
|-----------|-------------------|
| `@tawaship/pixi-animate-container` | `node_modules/@tawaship/pixi-animate-container/types/` |
| `@tawaship/createjs-module` (types for createjs itself) | `node_modules/@tawaship/createjs-module/types/` |
| `pixi.js` | Follow the instructions in the `pixijs-guide` skill |

Frequently used classes and features (paths are relative to `node_modules/@tawaship/pixi-animate-container/`):

| Class / feature | Purpose | Type definition file |
|---|---|---|
| `loadAssetAsync` | Loads the assets of Animate content | `types/createjs/core.d.ts` |
| `Container` (AnimateContainer) | PIXI.Container subclass dedicated to Animate content | `types/Container.d.ts` |
| `IAnimateContainer` | Interface of the container | `types/Container.d.ts` |
| Wrapper classes such as `CreatejsMovieClip` | Types of the objects inside Animate content | `types/createjs/modules/` |
| `TCreatejsObject` | What `addCreatejs` accepts (union of the 5 wrapper classes) | `types/createjs/modules/core.d.ts` |

## Basic usage

### 1. Loading the Animate content JS

`loadAssetAsync` looks up a composition by ID that the **already loaded** Animate content JS has registered on the `AdobeAn` global, and then loads its assets such as images. Therefore the Animate content JS file itself must be loaded (e.g. via a script tag) before calling `loadAssetAsync`.

```html
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.2/pixi.min.js"></script>
<script src="/path/to/dist/pixi-animate-container.min.js"></script>
<script src="assets/game.js"></script><!-- JS published from Adobe Animate -->
```

In a browser (script tag) setup, the module is stored in the `PIXI.animate` namespace. In an npm setup, use `import * as PixiAnimate from '@tawaship/pixi-animate-container'`.

### 2. loadAssetAsync — loading assets

```javascript
const app = new PIXI.Application();

PIXI.animate.loadAssetAsync([{
  id: 'COMPOSITION_ID',   // the value of lib.properties.id
  basepath: './assets/',  // path relative to index.html (the directory of the Animate content)
  options: {
    crossOrigin: false
  }
}]).then((lib) => {
  // If you pass an array, lib is an array holding each content's lib in order.
  // If you pass a single object, lib is a single lib.
});
```

`basepath` is the base path for the assets (such as images) that the Animate content references. Typically an `images` directory sits next to the Animate content JS, and the images are placed inside it. Images are loaded automatically relative to `basepath`, so no path needs to be specified in code.

```
index.html
└── assets/          ← basepath
    ├── game.js      ← loaded via a script tag
    └── images/      ← resolved automatically relative to basepath
        └── *.png
```

**⚠️ Watch out for duplicate IDs**: when loading multiple pieces of Animate content, each composition ID must be unique. The ID is defined inside the Animate content JS (`lib.properties.id`) and cannot be changed from code. If a duplicate is found, raise the problem with the user.

### 3. Container — display container and tick driving

`Container` (AnimateContainer) is a `PIXI.Container` subclass dedicated to Animate content. **Animation does not advance unless `handleTick` is connected to the pixi.js ticker.**

```javascript
PIXI.animate.loadAssetAsync([{ id: 'COMPOSITION_ID', basepath: './assets/' }])
.then((lib) => {
  class Root extends PIXI.animate.Container {
    constructor() {
      super();
      app.ticker.add(this.handleTick, this); // required: connect to the ticker
      this.addCreatejs(new lib.game());      // the class you want to use (returns the createjs instance)
    }
  }

  app.stage.addChild(new Root());
  document.body.appendChild(app.view);
});
```

### 4. addCreatejs / removeCreatejs

- `container.addCreatejs(cjsInstance)` — adds a createjs instance and starts displaying/playing it. The return value is the instance you passed in
- `container.removeCreatejs(cjsInstance)` — removes the createjs instance and stops displaying/playing it

If nothing needs to be displayed initially, do not call `addCreatejs`. Call it when display becomes necessary, and call `removeCreatejs` when it is no longer needed.

### 5. Controlling playback speed

- `container.createjsSpeed` — playback speed multiplier for everything under this container (multiplied into delta time). Frames cannot be played backwards: a value below `0` plays as `0` (a pause that resumes as soon as the speed is set back)
- `container.createjsOverSpeed` — whether the speed may exceed `1` (default `true`). More than 2 frames may advance in a single tick, which can cause unexpected behavior depending on the frame scripts
- `container.createjsSmooth` — whether frames are played by a steady clock (default `true`). It keeps the playing even when the ticker's delta jitters (otherwise 60 fps content on a 60 Hz display can play no frame on one tick and two on the next). The frames and their order are the same either way; only the tick each frame is played on can differ. Leave it on unless frames must advance exactly by the accumulated delta

## Events

createjs instances have `addEventListener`. The common pattern is to place a `dispatchEvent` on the Animate content side and listen on the pixi.js side. `instance.addEventListener('tick', handler)` also works (tick events are delivered through the original createjs dispatch path).

Registering a listener for mouse interactions (`mousedown`, `click`, etc.) automatically bridges it to pixi.js interaction.

### The listenFrameEvents option (not needed by default)

An option that enables the built-in frame-related events. Normally not used.

```javascript
PIXI.animate.loadAssetAsync([{
  id: 'COMPOSITION_ID',
  basepath: './assets/',
  options: {
    listenFrameEvents: {
      endAnimation: true,  // fires on the last frame of the timeline
      reachLabel: true,    // fires when a labeled frame is reached
    }
  }
}]);
```

## Using with TypeScript

- **Key fact — runtime type vs static type**: when this package's module is evaluated, it replaces the display-object classes on the `createjs` object (`createjs.MovieClip`, `createjs.Sprite`, etc.) with its wrapper classes. So at runtime, every display object in AC-using code — including instances inside published Animate content — IS a wrapper instance. The static types, however, are not changed by that replacement: a value reached through `createjs.*` is typed as the plain createjs class, so the wrapper-only surface (`pixi`, the string index signature for named instances) does not compile on it
- Therefore use the wrapper classes exported by this package (`CreatejsMovieClip`, `CreatejsSprite`, etc.) in your own type annotations — code that works with this package almost always handles wrapper instances and needs the wrapper types, not `createjs.MovieClip` etc. They are subtypes of the corresponding `createjs.*` classes, so they fit anywhere the createjs API expects one
- Named child instances that Adobe Animate stamps on at runtime during publish (`this.a` and friends) can be referenced without declarations thanks to the string index signature on `CreatejsMovieClip` (they type as `any`). If you want them strictly typed, `declare` them on your own class:

```typescript
import { CreatejsMovieClip } from '@tawaship/pixi-animate-container';

class Game extends CreatejsMovieClip {
  declare a: CreatejsMovieClip; // named instance on the Animate timeline
}
```

`declare` emits no code, so the runtime object is untouched.

## Important notes

### createjs.stop() only stops that instance's own timeline

`cjs.stop()` stops only the timeline of that instance. Child movie clips keep playing, so it does not stop the entire Animate content. If you do not want the content displayed, do not call `addCreatejs`.

### Read the createjs-side properties

A display property written on the createjs side (`instance.x = 10`, or by the timeline) is passed to the pixi node (`instance.pixi.x`) at once. The createjs-side value is what the content works with: read `instance.x` etc. rather than `instance.pixi.*`, which differs after a direct write to the pixi node (below). The display properties are accessors on the class prototypes: they are not own properties, so `Object.keys(instance)` and `JSON.stringify(instance)` do not include them.

### Writing to `instance.pixi.*`

A value written to the pixi node (`instance.pixi.x = 100`) stays until the timeline writes that property again (a tween that animates `x` puts it back on its next frame, even while the value is held). The createjs instance keeps its own value (`instance.x` still reads what createjs wrote). When both rotation and skew are set, the pixi node composes them the createjs way (rotate, then skew), not as a plain `PIXI.DisplayObject` would. Prefer writing the createjs-side properties (`instance.x`); they are drawn on the next render.

### What is not drawn as CreateJS draws it

When content looks different from its published HTML, check these first (the package README's "Supported features" has the full list):

- Blend modes other than add (`lighter`), multiply and screen are drawn as the parent's blend mode
- Filters other than color effects (`createjs.ColorFilter`) — blur, glow, drop shadow — are not drawn
- Bitmap strokes are not drawn; a bitmap fill is always repeated (`no-repeat` included)
- Dynamic text is wrapped by PixiJS's word wrap, which can break lines elsewhere than CreateJS; `textBaseline` and `outline` are not drawn; a `lineHeight` of 0 uses PixiJS's line spacing
- A sprite does not play its sprite sheet animation by itself: it shows the frame its timeline goes to
- Sound needs `options: { useSound: true }` in `loadAssetAsync`
