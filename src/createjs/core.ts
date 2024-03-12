import * as PIXI from 'pixi.js';
import * as PA from './modules';
import createjs from '@tawaship/createjs-module';

declare const AdobeAn: any;
declare const window: any;

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
	 * 
	 * However, if possible, try to use an external library such as ***howler.js***.
	 */
	useSound?: boolean;

	/**
	 * Whether to fire events related to frames.
	 */
	listenFrameEvents?: PA.IFrameEventOption;
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

function playSound(id: string, loop: boolean, offset: number) {
	return createjs.Sound.play(id, {
		interrupt: createjs.Sound.INTERRUPT_EARLY,
		loop,
		offset
	});
}

export interface IAnimateManifest {
	src: string;
	id: string;
	type?: string;
	crossOrigin?: boolean;
	[key: string]: any;
}

/*
export function dataURLToBlobURL(dataURL: string) {
	const bin = atob(dataURL.replace(/^.*,/, ''));
	const buffer = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) {
		buffer[i] = bin.charCodeAt(i);
	}

	const p = dataURL.slice(5);
	try{
		const blob = new Blob([buffer.buffer], {
			type: p.slice(0, p.indexOf(";"))
		});
		return (URL || webkitURL).createObjectURL(blob);
	} catch (e){
		throw e;
	};
}
*/

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

		if (target.options?.useSound) {
			window.playSound = playSound;
		}
		
		const comp = AdobeAn.getComposition(target.id);
		if (!comp) {
			throw new Error(`no composition: ${target.id}`);
		}
		
		const lib: IAnimateLibrary = comp.getLibrary();
		const manifests: IAnimateManifest[] = lib.properties.manifest.map((v: any) => {
			return JSON.parse(JSON.stringify(v));
		});
		const crossOrigin = typeof(target.options?.crossOrigin) === 'boolean' ? target.options.crossOrigin : true;
		
		for (let i = 0; i < manifests.length; i++) {
			const manifest = manifests[i];
			if (manifest.src.indexOf('data:image') === 0) {
				manifest.type = createjs.Types.IMAGE;
			} else if (manifest.src.indexOf('data:audio') === 0) {
				/* note
					It seems that data URL format sounds are not supported by the createjs loader.
					Converting to blob URL also didn't work.
				*/
				throw new Error("data URL formatted sound is not supported.");
				/*
				manifest.type = createjs.Types.SOUND;
				manifest.src = dataURLToBlobURL(manifest.src);
				*/
			} else if (manifest.src.indexOf('blob:') === 0) {

			} else if (manifest.src.indexOf('file:') === 0) {
				
			} else {
				manifest.src = PIXI.utils.url.resolve(target.basepath, manifest.src);
			}
		}

		if (crossOrigin) {
			for (let i = 0; i < manifests.length; i++) {
				manifests[i].crossOrigin = true;
			}
		}

		const loadPromise = new Promise((resolve, reject) => {
			if (manifests.length === 0) {
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
			
			loader.loadManifest(manifests || []);
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
						lib[i].prototype._listenFrameEvents = target.options?.listenFrameEvents;
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

/**
 * @ignore
 */
function handleFileLoad(evt: any, comp: any) {
	const images = comp.getImages();
	if (evt && (evt.item.type == 'image')) {
		images[evt.item.id] = evt.result;
	}
}