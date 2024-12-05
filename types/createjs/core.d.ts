import * as PA from './modules';
export interface IAnimateLibrary {
    [name: string]: any;
}
export interface IAnimateLoadAssetOption {
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
    listenFrameEvents?: PA.IAnimateFrameEventOption;
}
export interface IAnimatePrepareTarget {
    /**
     * "lib.properties.id" in Animate content.
     */
    id: string;
    /**
     * Directory path of Animate content.
     */
    basepath: string;
    options?: IAnimateLoadAssetOption;
}
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
export declare function loadAssetAsync(targets: IAnimatePrepareTarget | IAnimatePrepareTarget[]): Promise<IAnimateLibrary | IAnimateLibrary[]>;
