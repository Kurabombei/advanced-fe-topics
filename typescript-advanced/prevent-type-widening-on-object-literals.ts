const ORIGIN = {
	x: 0,
	y: 0,
}

ORIGIN.x = 1;
//need readonly type

const ORIGINTYPED: {
	readonly x: number;
	readonly y: number;
} = {
	x: 0,
	y: 0,
}
// ORIGINTYPED.x = -1 // TS2540: Cannot assign to 'x' because it is a read-only property
// too verbose, so to say, but still works.

const ORIGIN_ASSERTED = {
	x: 0,
	y: 0,
} as const;

// ORIGIN_ASSERTED.x = 1;
// doesn't let change our values AOT, yet still it is only ts
// so during runtime we could change values.
// To fully make it immutable, we can Object.freeze() it:


const ORIGIN_FROZEN = Object.freeze({
	x: 0,
	y: 0,
} as const);
// ORIGIN_FROZEN.x = 2 // TS2540: Cannot assign to 'x' because it is a read-only property.
// now it will fail at runtime, so the immutability of this object is succeeded