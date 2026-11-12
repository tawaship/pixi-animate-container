import { BaseTexture, MIPMAP_MODES, Matrix, Texture, WRAP_MODES } from 'pixi.js';

/**
 * A linear or radial gradient as createjs makes it (beginLinearGradientFill
 * and the like): colors at ratios along the line from (x0, y0) to (x1, y1),
 * or between the circles (x0, y0, r0) and (x1, y1, r1), in the shape's
 * coordinates.
 */
export interface ICreatejsGradient {
	type: 'linear' | 'radial';
	colors: string[];
	ratios: number[];
	x0: number;
	y0: number;
	r0: number;
	x1: number;
	y1: number;
	r1: number;
}

/** Pixels a gradient is drawn across: along the line of a linear one, across the circles of a radial one */
const GRADIENT_SIZE = 256;

/** At most this many gradient textures are kept for sharing (the oldest is let go first) */
const MAX_KEPT_GRADIENTS = 256;

/**
 * The base texture of a gradient: always clamped. Pixi's Graphics sets the
 * wrap mode of every texture it fills with to REPEAT when it builds its
 * shapes (GraphicsGeometry.updateBatches), which would repeat the gradient
 * outside the area drawn; canvas (and so createjs) pads a gradient with its
 * end colors instead, which is what clamping gives.
 */
class GradientBaseTexture extends BaseTexture {
	// pixi.js declares `wrapMode` as a plain field of BaseTexture; an accessor
	// on this prototype takes the writes (the field is never an own property:
	// BaseTexture's constructor assigns it, which reaches this setter)
	// @ts-expect-error TS2611 - see above
	get wrapMode(): WRAP_MODES {
		return WRAP_MODES.CLAMP;
	}

	set wrapMode(value: WRAP_MODES) {
		// always clamped
	}
}

/**
 * A gradient drawn into a canvas by the browser's own gradient (so that its
 * colors are what canvas, and createjs, paints), as a texture that Pixi's
 * Graphics fills and strokes with through a matrix. `gradient` is the
 * gradient in the shape's coordinates, `local` the same gradient in the
 * texture's pixels, and `toShape` takes texture pixels to the shape's
 * coordinates.
 */
export class GradientTexture extends Texture {
	readonly gradient: ICreatejsGradient;
	readonly local: ICreatejsGradient;
	readonly toShape: Matrix;

	constructor(canvas: HTMLCanvasElement, gradient: ICreatejsGradient, local: ICreatejsGradient, toShape: Matrix) {
		// No mipmaps: a gradient drawn small would take the averaged colors of
		// a smaller image; canvas paints the exact color at every pixel, which
		// sampling the full-size image gives
		super(new GradientBaseTexture(canvas, { mipmap: MIPMAP_MODES.OFF }));
		this.gradient = gradient;
		this.local = local;
		this.toShape = toShape;
	}
}

/**
 * Gradient textures by their gradient, shared by every Graphics that uses the
 * same gradient (each instance of a published symbol draws its own Graphics
 * with the same commands). Made outside Pixi's texture caches; a texture let
 * go here stays while a Graphics still uses it.
 */
const gradientTextures = new Map<string, GradientTexture | null>();

function paintGradient(canvas: HTMLCanvasElement, local: ICreatejsGradient): void {
	const context = canvas.getContext('2d');
	if (!context) {
		return;
	}

	const paint = local.type === 'linear'
		? context.createLinearGradient(local.x0, local.y0, local.x1, local.y1)
		: context.createRadialGradient(local.x0, local.y0, local.r0, local.x1, local.y1, local.r1);
	for (let i = 0; i < local.colors.length; i++) {
		paint.addColorStop(local.ratios[i], local.colors[i]);
	}
	context.fillStyle = paint;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * A linear gradient drawn along a canvas one pixel high, from one pixel in
 * from the left edge to one pixel in from the right edge: the edge pixels are
 * then the end colors themselves, which clamping continues outside the line
 * (an edge pixel on the line would hold the color at its center, a little
 * short of the end color). The texture's x axis runs along the gradient's
 * line and its y axis across it (every row is the same, so how far across
 * does not matter).
 */
function linearGradientTexture(gradient: ICreatejsGradient): GradientTexture | null {
	const dx = gradient.x1 - gradient.x0;
	const dy = gradient.y1 - gradient.y0;
	const length = Math.sqrt(dx * dx + dy * dy);
	if (!length) {
		// canvas paints nothing with a line of length 0
		return null;
	}

	const canvas = document.createElement('canvas');
	canvas.width = GRADIENT_SIZE + 2;
	canvas.height = 1;
	const local: ICreatejsGradient = {
		type: 'linear', colors: gradient.colors, ratios: gradient.ratios,
		x0: 1, y0: 0, r0: 0, x1: GRADIENT_SIZE + 1, y1: 0, r1: 0
	};
	paintGradient(canvas, local);

	const a = dx / GRADIENT_SIZE;
	const b = dy / GRADIENT_SIZE;
	// texture pixel x = 1 is the line's start
	const toShape = new Matrix(a, b, -dy / length, dx / length, gradient.x0 - a, gradient.y0 - b);
	return new GradientTexture(canvas, gradient, local, toShape);
}

/**
 * A radial gradient drawn into a square canvas covering both of its circles,
 * scaled to fit (the mapping is a scale and a move, so the circles stay
 * circles and every point keeps its place in the gradient).
 */
function radialGradientTexture(gradient: ICreatejsGradient): GradientTexture | null {
	const left = Math.min(gradient.x0 - gradient.r0, gradient.x1 - gradient.r1);
	const top = Math.min(gradient.y0 - gradient.r0, gradient.y1 - gradient.r1);
	const right = Math.max(gradient.x0 + gradient.r0, gradient.x1 + gradient.r1);
	const bottom = Math.max(gradient.y0 + gradient.r0, gradient.y1 + gradient.r1);
	const size = Math.max(right - left, bottom - top);
	if (!(size > 0) || (gradient.r1 === gradient.r0 && gradient.x0 === gradient.x1 && gradient.y0 === gradient.y1)) {
		// canvas paints nothing with two equal circles
		return null;
	}

	const scale = GRADIENT_SIZE / size;
	const canvas = document.createElement('canvas');
	canvas.width = GRADIENT_SIZE;
	canvas.height = GRADIENT_SIZE;
	const local: ICreatejsGradient = {
		type: 'radial', colors: gradient.colors, ratios: gradient.ratios,
		x0: (gradient.x0 - left) * scale, y0: (gradient.y0 - top) * scale, r0: gradient.r0 * scale,
		x1: (gradient.x1 - left) * scale, y1: (gradient.y1 - top) * scale, r1: gradient.r1 * scale
	};
	paintGradient(canvas, local);

	const toShape = new Matrix(1 / scale, 0, 0, 1 / scale, left, top);
	return new GradientTexture(canvas, gradient, local, toShape);
}

/**
 * The texture a gradient is drawn with, or null when canvas paints nothing
 * with it (a line of length 0, two equal circles).
 */
export function getGradientTexture(gradient: ICreatejsGradient): GradientTexture | null {
	const key = JSON.stringify(gradient);
	const known = gradientTextures.get(key);
	if (known !== undefined) {
		return known;
	}

	const texture = gradient.type === 'linear' ? linearGradientTexture(gradient) : radialGradientTexture(gradient);
	gradientTextures.set(key, texture);
	if (gradientTextures.size > MAX_KEPT_GRADIENTS) {
		const oldest = gradientTextures.keys().next();
		if (!oldest.done) {
			gradientTextures.delete(oldest.value);
		}
	}

	return texture;
}
