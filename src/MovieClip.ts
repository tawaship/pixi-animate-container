import { CreatejsMovieClip as _CreatejsMovieClip, ITickerData } from '@tawaship/pixi-animate-core';

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
		this.advance(e.delta * P);
		
		return super.updateForPixi(e);
	}
}