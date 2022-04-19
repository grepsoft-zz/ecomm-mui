export const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
