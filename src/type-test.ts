export type TypeEq<A, B> = A extends B ? B extends A ? true : false : false;

const a: TypeEq<{ x: number }, { x: number }> = true;
const b: TypeEq<{ x: number, y: number }, { x: number }> = false;
const c: TypeEq<{ x: number }, { x: number, y: number }> = false;
const d: TypeEq<{ x: number }, any> = false;
const e: TypeEq<1 | 2, 1> = false;
const f: TypeEq<{ x: number } & { y: number }, { x: number, y: number }> = true;
