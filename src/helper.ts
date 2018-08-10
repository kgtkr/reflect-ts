// https://github.com/Microsoft/TypeScript/pull/24897

export type Head<T> = T extends [infer P, ...any[]] ? P : never;
export type Tail<T extends any[]> = ((...x: T) => void) extends ((x: any, ...xs: infer P) => void) ? P : never;
export type Cons<X, T extends any[]> = ((x: X, ...args: T) => void) extends ((...args: infer R) => void) ? R : [];
export type Reverse<T extends any[], X extends any[]=[]> = {
    0: X, 1: Reverse<Tail<T>, Cons<Head<T>, X>>
}[T extends [] ? 0 : 1];