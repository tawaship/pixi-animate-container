# pixi-animate-container

"pixi-animate-container" is a plugin for using content created by Adobe Animate with "[pixi.js](https://github.com/pixijs/pixi.js)".

[![Build Status](https://travis-ci.com/tawaship/pixi-animate-container.svg?branch=master)](https://travis-ci.com/tawaship/pixi-animate-container)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

---

## Core module
[@tawaship/pixi-animate-core](https://tawaship.github.io/pixi-animate-core/)

## Supported version

- A complete set of content created with Adobe Animate version 20.02 | 20.5.1
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
			super(app.ticker);
			
			this.addCreatejs(new lib.game()); // The class you want to use.
		}
	}
	
	app.stage.addChild(new Root());
	document.body.appendChild(app.view);
});
```

## Change log

### 1.0.0

- Overrides

	|name|class|
	|:--|:--|
	|createjs.MovieClip|[CreatejsMovieClip](https://tawaship.github.io/pixi-animate-container/docs/classes/createjsmovieclip.html)|
