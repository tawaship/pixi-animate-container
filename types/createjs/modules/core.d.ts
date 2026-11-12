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
 * Minimal surface of a createjs object walked by syncToPixi.
 */
export interface ICreatejsSyncNode {
    visible: boolean;
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
    /**
     * Gives the node the blend mode in effect where its parent is drawn (the
     * parent's own, or what the parent inherits); see blendModeForPixi.
     */
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
    /** The blend mode the node inherits from its ancestors (see blendModeForPixi) */
    reservedBlendMode: BLEND_MODES;
    /** The node's own createjs compositeOperation */
    compositeOperation: string | null;
    mask: TCreatejsMask;
    colorFilters: IColorFilterSyncPair[] | null;
    cjsX: number;
    cjsY: number;
    cjsScaleX: number;
    cjsScaleY: number;
    cjsRotation: number;
    cjsSkewX: number;
    cjsSkewY: number;
    cjsRegX: number;
    cjsRegY: number;
    cjsVisible: boolean;
    cjsAlpha: number;
}
/**
 * Creates the wrapper data of a Pixi node and gives the node a
 * {@link CjsTransform}. `anchor` is where createjs's regX / regY go when it
 * is not the node's pivot (a Sprite's anchor); the pivot is read after the
 * transform is replaced, as it belongs to the transform.
 */
export declare function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, anchor: Point | null): IPixiData<TPixiDisplayObject>;
/**
 * The blend mode a node draws its content with, as createjs draws it: its own
 * compositeOperation, or else the one in effect where its parent is drawn
 * (`reservedBlendMode`, passed down by the parent). createjs sets a node's
 * compositeOperation on the context for the draw of the node and its whole
 * subtree (DisplayObject.updateContext, inside save / restore), so a
 * descendant's own value replaces it for that descendant's subtree only.
 * A value Pixi cannot draw is drawn as the inherited one.
 */
export declare function blendModeForPixi(data: IPixiData<Container>): BLEND_MODES;
export declare function registerPixiData(cjs: object, data: IPixiData<Container>): void;
export declare function findPixiData(cjs: object): IPixiData<Container> | null;
/**
 * The display properties every wrapper display object class gets as
 * accessors (see defineDisplayAccessors). One list for all classes, so that
 * no class can miss one; test/harness checks that every class has them.
 */
export declare const DISPLAY_ACCESSOR_NAMES: string[];
/**
 * Makes the display properties of a wrapper display object class write
 * through to its Pixi node at once: every write on the createjs side
 * (timeline, frame scripts, application code) reaches the Pixi node when it
 * is made, so Pixi draws the createjs state whenever it draws, with no walk
 * to copy it over.
 *
 * - The createjs-side value is kept in the wrapper data and read back from
 *   there. A value written to the Pixi node (`instance.pixi.x = 100`) stays
 *   until the createjs side writes that property again, and the createjs
 *   side still reads its own value (AC2's behavior)
 * - Every write is passed to the Pixi node, even with the value it had, so
 *   that a tween writing the property puts a Pixi-side write back (Pixi's
 *   setters compare the value themselves)
 * - The data is looked up (and made the first time) by `getData`: the
 *   createjs constructor writes these properties inside `super()`, before
 *   the wrapper's constructor body runs, and the first write creates the data
 * - `_off` is not mapped: createjs draws whatever is on its display list
 *   (`_off` only keeps the timeline from placing an object, and the display
 *   list is mirrored to Pixi). `renderable` is left to Pixi, which turns it
 *   off for nodes used as masks.
 *
 * Pixi declares these as plain fields of the createjs-side classes' types,
 * which an accessor in a subclass body cannot override (TS2611), so they are
 * defined on the prototype; they are enumerable, so that for-in on an
 * instance still lists them.
 */
export declare function defineDisplayAccessors<T extends object>(proto: object, getData: (cjs: T) => IPixiData<Container>): void;
/**
 * Brackets the driver's own work (playing frames, settling): the
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
 * Copies the color filter scalars of a whole createjs tree (children and
 * mask references) into their Pixi filters' matrices. The display properties
 * need no copying (they write through at once, see defineDisplayAccessors).
 */
export declare function syncToPixi(root: ICreatejsSyncNode): void;
