import * as PIXI from 'pixi.js';
import * as PA from './modules';
import createjs from '@tawaship/createjs-module';

/**
 * @ignore
 */
declare const AdobeAn: any;

export interface IAnimateLibrary {
	[ name: string ]: any;
}

export interface ILoadAssetOption {
	/**
	 * Whether to use assets on a server in another domain.
	 */
	crossOrigin?: boolean;

	/**
	 * Whether to use sound on createjs.
	 */
	useSound?: boolean;

	/**
	 * Whether to fire events related to frames.
	 */
	useFrameEvent?: PA.IFrameEventOption;
};

export interface IPrepareTarget {
	/**
	 * "lib.properties.id" in Animate content.
	 */
	id: string;
	
	/**
	 * Directory path of Animate content.
	 */
	basepath: string;
	
	options?: ILoadAssetOption;
};

export interface IAnimateManifest {
	src: string;
	id: string;
	type?: string;
	crossOrigin?: boolean;
	[key: string]: any;
}

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
		
		const lib: IAnimateLibrary = comp.getLibrary();
		const manifests: IAnimateManifest[] = lib.properties.manifest;
		const crossOrigin = typeof(target.options?.crossOrigin) === 'boolean' ? target.options.crossOrigin : true;
		
		for (let i = 0; i < manifests.length; i++) {
			const manifest = manifests[i];
			
			manifest.src = PIXI.utils.url.resolve(target.basepath, manifest.src);

			if (manifest.src.indexOf('data:image') === 0) {
				manifest.type = "image";
			} else if (manifest.src.indexOf('data:audio') === 0) {
				manifest.type = "sound";
			}
		}

		if (crossOrigin) {
			for (let i = 0; i < manifests.length; i++) {
				const manifest = manifests[i].crossOrigin = true;
			}
		}

		const loadPromise = new Promise((resolve, reject) => {
			if (lib.properties.manifest.length === 0) {
				resolve({});
			}
			
			const loader = new createjs.LoadQueue(false);
			
			if (target.options?.useSound) {
				loader.installPlugin(createjs.Sound);
			}

			const errors: any[] = [];
			
			loader.addEventListener('fileload', (evt: any) => {
				handleFileLoad(evt, comp);
			});
			
			loader.addEventListener('complete', (evt: any) => {
				if (errors.length) {
					reject(errors);
					return;
				}
				
				resolve(evt);
			});
			
			loader.addEventListener('error', (evt: any) => {
				errors.push(evt.data);
			});
			
			loader.loadManifest(lib.properties.manifest || []);
		})
		.then((evt: any) => {
			const ss = comp.getSpriteSheet();
			const queue = evt.target;
			const ssMetadata = lib.ssMetadata;
			
			for (let i = 0; i < ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet({
					images: [
						queue.getResult(ssMetadata[i].name)
					],
					frames: ssMetadata[i].frames
				});
			}
			
			return lib;
		});

		promises.push(
			loadPromise
			.then((lib: IAnimateLibrary) => {
				for (let i  in lib) {
					if (lib[i].prototype instanceof PA.CreatejsMovieClip) {
						lib[i].prototype._framerateBase = lib.properties.fps;
						lib[i].prototype._useFrameEvent = target.options?.useFrameEvent;
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

/**
 * @ignore
 */
function handleFileLoad(evt: any, comp: any) {
	const images = comp.getImages();
	if (evt && (evt.item.type == 'image')) {
		images[evt.item.id] = evt.result;
	}
}