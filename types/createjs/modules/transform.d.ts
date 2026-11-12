import { Transform } from 'pixi.js';
/**
 * A Pixi Transform whose rotation and skew follow createjs.
 *
 * - The createjs values (degrees) are kept as written, so that the matrix is
 *   built from exactly them (a degrees -> radians -> degrees round trip would
 *   not give them back)
 * - Pixi's own fields carry the same values in Pixi's terms (rotation in
 *   radians, skew.x = -skewX, skew.y = skewY, all in radians), so code that
 *   uses the Pixi node sees the values it always saw. A write made through
 *   Pixi (node.rotation, node.skew) is converted to degrees and used
 * - The local matrix is built the createjs way (Matrix2D.appendTransform):
 *   skew x (rotation x scale), i.e. the object is rotated first and then
 *   skewed. Pixi composes them the other way round (skewed, then rotated as
 *   a whole); the two agree only while the rotation is 0 or skewX equals
 *   skewY. A rotation that is a multiple of 360 is taken as exactly none, as
 *   createjs does
 */
export declare class CjsTransform extends Transform {
    /** createjs rotation, in degrees */
    degRotation: number;
    /** createjs skewX, in degrees */
    degSkewX: number;
    /** createjs skewY, in degrees */
    degSkewY: number;
    /** The radians last written to the Pixi fields for the values above */
    private _radRotation;
    private _radSkewX;
    private _radSkewY;
    /**
     * Writes the createjs rotation (degrees). Nothing is computed when the
     * node already has it (tweens write every property they have on every
     * frame, value changed or not).
     */
    setRotation(degrees: number): void;
    /**
     * Writes the createjs skewX (degrees). See setRotation.
     */
    setSkewX(degrees: number): void;
    /**
     * Writes the createjs skewY (degrees). See setRotation.
     */
    setSkewY(degrees: number): void;
    protected updateSkew(): void;
}
