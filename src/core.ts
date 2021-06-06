import { createjs, loadAssetAsync as _loadAssetAsync, ILoadAssetOption, IAnimateLibrary } from '@tawaship/pixi-animate-core';
import { CreatejsMovieClip } from './MovieClip';
export { createjs, ILoadAssetOption, IAnimateLibrary } from '@tawaship/pixi-animate-core';

/**
 * @ignore
 */
declare const AdobeAn: any;

export interface IPrepareTarget {
	/**
	 * "lib.properties.id" in Animate content.
	 */
	id: string;
	
	/**
	 * Directory path of Animate content.
	 */
	basepath: string;
	
	/**
	 * [[https://tawaship.github.io/pixi-animate-core/interfaces/iloadassetoption.html | PixiAnimateCore.ILoadAssetOption]]
	 */
	options?: ILoadAssetOption;
};

/**
 * Load the assets of createjs content published by Adobe Animate.
 * If you use multiple contents, each composition ID must be unique.
 * Please run "Pixim.animate.init" before running.
 */
export function loadAssetAsync(targets: IPrepareTarget | IPrepareTarget[]) {
	if (!Array.isArray(targets)) {
		targets = [targets];
	}
	
	const promises: Promise<IAnimateLibrary>[] = [];
	
	for (let i = 0; i < targets.length; i++) {
		const target = targets[i];
		
		const comp = AdobeAn.getComposition(target.id);
		if (!comp) {
			throw new Error(`no composition: ${target.id}`);
		}
		
		promises.push(_loadAssetAsync(comp, target.basepath, target.options)
			.then((lib: IAnimateLibrary) => {
				for (let i  in lib) {
					if (lib[i].prototype instanceof CreatejsMovieClip) {
						lib[i].prototype._framerateBase = lib.properties.fps;
					}
				}
				
				return lib;
			})
		);
	}
	
	return Promise.all(promises)
		.then((resolvers: IAnimateLibrary[]) => {
			if (resolvers.length === 1) {
				return resolvers[0];
			}
			
			return resolvers;
		});
}

// overrides
createjs.MovieClip = CreatejsMovieClip;