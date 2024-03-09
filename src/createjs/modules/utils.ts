export function createObject<T>(proto: object): T {
	return Object.create(proto);
}

/**
 * @ignore
 */
export const DEG_TO_RAD = Math.PI / 180;