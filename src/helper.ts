// https://github.com/Microsoft/TypeScript/pull/24897

export type Head<T> = T extends [infer P, ...any[]] ? P : never;
export type Tail<L extends any[]> = ((...x: L) => void) extends ((h: any, ...rest: infer T) => void) ? T : never;
export type Cons<H, T extends any[]> = ((h: H, ...args: T) => void) extends ((...args: infer R) => void) ? R : [];
export type Reverse<L extends any[], X extends any[]=[]> = {
    0: X, 1: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 0 : 1];