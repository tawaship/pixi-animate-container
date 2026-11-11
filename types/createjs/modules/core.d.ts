import { BLEND_MODES, Container, DisplayObject, Point } from 'pixi.js';
import { CjsTransform } from './transform';
import type { CreatejsMovieClip } from './MovieClip';
import type { CreatejsSprite } from './Sprite';
import type { CreatejsShape } from './Shape';
import type { CreatejsBitmap } from './Bitmap';
import type { CreatejsText } from './Text';
export interface ITickerData {
    delta: number;
}
export type TCreatejsMask = CreatejsShape | null;
/**
 * The wrapper display object classes - what addCreatejs and friends accept.
 * The contract is "wraps a real createjs.DisplayObject": Animate's library
 * can only publish symbols (MovieClip) and image assets (Bitmap / Sprite)
 * as lib classes, and Shape / Text exist as inline members of published
 * symbols, but all of them are display objects. CreatejsGraphics is
 * deliberately NOT part of this union: the real createjs.Graphics is a
 * drawing-command container, not a DisplayObject (it is reached through
 * `shape.graphics`, never placed on a display list).
 */
export type TCreatejsObject = CreatejsMovieClip | CreatejsSprite | CreatejsShape | CreatejsBitmap | CreatejsText;
/**
 * Key of the wrapper data on a createjs display object, read by the sync
 * walks on every node on every frame (a property read is cheaper than a
 * WeakMap lookup). A symbol key keeps the createjs object's surface as it
 * is: for-in, Object.keys and Object.getOwnPropertyNames do not show it.
 */
export declare const PIXI_DATA: unique symbol;
/**
 * Minimal surface of a createjs display object consumed by the sync walks.
 * All members are plain data properties on the createjs side.
 */
export interface ICreatejsSyncNode {
    [PIXI_DATA]?: IPixiData<Container>;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    regX: number;
    regY: number;
    skewX: number;
    skewY: number;
    rotation: number;
    visible: boolean;
    alpha: number;
    _off?: boolean;
    children?: ICreatejsSyncNode[];
}
/**
 * Contract of every wrapper display object class.
 * Implementations are supplied per class (no mixin); this interface makes the
 * compiler verify that nothing is missing.
 *
 * Only members createjs itself does not provide at all belong here. `pixi`
 * and `updateBlendModeForPixi` have no createjs counterpart. `mask` (and
 * addEventListener / removeEventListener / removeAllEventListeners) are real
 * createjs.Xxx members - guaranteed to exist by `extends`, once a wrapper
 * class extends the real class - so redeclaring them here would just be a
 * second, redundant constraint on top of the override check `extends`
 * already performs. (This interface only guarantees a member's *signature*
 * exists when the class is used, not that the override behind it does the
 * right thing - that part is left to each class's own implementation and its
 * `@ts-expect-error` justification comments.)
 */
export interface ICreatejsDisplayObject<T extends DisplayObject> {
    readonly pixi: T;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
}
/**
 * What a child passed to the overridden structure operations (addChild etc.)
 * must provide - the same contract as ICreatejsDisplayObject, just widened to
 * DisplayObject since heterogeneous children each have a different concrete
 * Pixi type.
 */
export type ICreatejsBlendModeTarget = ICreatejsDisplayObject<DisplayObject>;
/**
 * Source of the ColorFilter scalar sync (plain data properties,
 * original-faithful) - the 8 color scalars of the real createjs.ColorFilter,
 * referenced instead of redeclared so there is a single source of truth.
 */
export type IColorFilterSyncSource = Pick<createjs.ColorFilter, 'redMultiplier' | 'greenMultiplier' | 'blueMultiplier' | 'alphaMultiplier' | 'redOffset' | 'greenOffset' | 'blueOffset' | 'alphaOffset'>;
export interface IColorFilterSyncPair {
    source: IColorFilterSyncSource;
    matrix: number[];
}
export interface IPixiData<T extends Container> {
    regObj: Point;
    instance: T;
    /** The node's transform, which composes rotation and skew the createjs way */
    transform: CjsTransform;
    reservedBlendMode: BLEND_MODES;
    mask: TCreatejsMask;
    colorFilters: IColorFilterSyncPair[] | null;
    syncedX: number;
    syncedY: number;
    syncedScaleX: number;
    syncedScaleY: number;
    syncedRotation: number;
    syncedSkewX: number;
    syncedSkewY: number;
    syncedRegX: number;
    syncedRegY: number;
    syncedVisible: boolean;
    syncedAlpha: number;
}
/**
 * Creates the wrapper data of a Pixi node and gives the node a
 * {@link CjsTransform}. `anchor` is where createjs's regX / regY go when it
 * is not the node's pivot (a Sprite's anchor); the pivot is read after the
 * transform is replaced, as it belongs to the transform.
 */
export declare function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, anchor: Point | null): IPixiData<TPixiDisplayObject>;
export declare function registerPixiData(cjs: object, data: IPixiData<Container>): void;
export declare function findPixiData(cjs: object): IPixiData<Container> | null;
/**
 * Brackets the driver's own work (playing frames, settling, syncing): the
 * display-list churn createjs makes while resolving a frame is not an
 * application change and marks nothing.
 */
export declare function beginDrive(): void;
export declare function endDrive(): void;
export declare function isDriving(): boolean;
/**
 * Marks the tree `node` belongs to as needing to be settled before Pixi draws.
 */
export declare function markForSettle(node: createjs.DisplayObject): void;
/**
 * Whether `root` was marked since the last call, clearing the mark.
 */
export declare function takeSettleMark(root: object): boolean;
/**
 * Shared implementation of the mask setter (push layer).
 *
 * createjs clips with a mask only while its `graphics` is set (the Shape's
 * graphics setter keeps the Pixi mask in step with that), and never draws a
 * mask shape that is on no display list. The mask's node is kept in the
 * masked node's parent node, so that it is transformed in the same space as
 * createjs transforms the mask. When no masked node uses a mask any more and
 * the mask shape is on no createjs display list, its node is taken out of
 * the Pixi tree: Pixi makes a node drawable again when it stops being a mask.
 */
export declare function setMaskForPixi(data: IPixiData<Container>, value: TCreatejsMask): void;
/**
 * Push half of the sync: copies the plain display properties of the whole
 * createjs tree to the Pixi mirror. Runs at the end of each handleTick and
 * right before Pixi draws (the container's updateTransform), so that Pixi
 * always draws the current createjs state, whenever it draws.
 *
 * - A property is written only when its createjs value differs from the one
 *   last written (or taken over, see pullFromPixi). Besides saving the Pixi
 *   setters, this keeps a value written to the Pixi node
 *   (`instance.pixi.x = 100`) in place until createjs writes that property
 *   again, as AC2 did
 * - Invisible nodes are NOT skipped: switching to invisible is itself a state
 *   that must reach Pixi.
 * - `_off` is not mapped: createjs draws whatever is on its display list
 *   (`_off` only keeps the timeline from placing an object, and the display
 *   list is mirrored to Pixi). `renderable` is left to Pixi, which turns it
 *   off for nodes used as masks.
 */
export declare function syncToPixi(root: ICreatejsSyncNode): void;
/**
 * Pull half of the sync: takes values written to the Pixi nodes
 * (`instance.pixi.x = 100`) over into the createjs properties. Runs before
 * createjs plays a frame, so that a tween writing the property in that frame
 * (even with the value it already had) replaces the Pixi-side write, as it
 * did in AC2, and a property nothing writes keeps it. Only the nodes written
 * through Pixi since the last call are visited (their transforms log the
 * writes, see CjsTransform). `renderable` is not taken over (Pixi changes
 * it itself for masks).
 */
export declare function pullFromPixi(): void;
