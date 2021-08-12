import { createjs, CreatejsMovieClip as _CreatejsMovieClip, ITickerData } from '@tawaship/pixi-animate-core';

export { ITickerData } from '@tawaship/pixi-animate-core';

/**
 * @ignore
 */
const P: number = 1000 / 60;

/**
 * \@tawaship/pixi-animate-core [[https://tawaship.github.io/pixi-animate-core/classes/createjsmovieclip.html | CreatejsMovieClip]]
 */
export class CreatejsMovieClip extends _CreatejsMovieClip {
	declare _framerateBase: number;
	
	/**
	 * When the last frame of the timeline is reached.
	 * 
	 * @event
	 */
	endAnimation?(): void {}
	
	constructor(...args: any[]) {
		super(...args);
		
		this.framerate = this._framerateBase;
	}
	
	initialize(...args: any[]) {
		super.initialize(...args);
		
		this.framerate = this._framerateBase;
	}
	
	/**
	 * @override
	 */
	updateForPixi(e: ITickerData) {
		const currentFrame = this.currentFrame;
		
		// this.advance(e.delta * P);
		this.advance(P);
		
		if (currentFrame !== this.currentFrame && this.currentFrame === (this.totalFrames - 1)) {
			this.dispatchEvent(new createjs.Event('endAnimation'));
		}
		
		return super.updateForPixi(e);
	}
}

delete(CreatejsMovieClip.prototype.endAnimation);