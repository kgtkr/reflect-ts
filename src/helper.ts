export type Head<T> = T extends [infer P, ...any[]] ? P : never;
export type Tail<L extends any[]> = ((...x: L) => void) extends ((h: any, ...rest: infer T) => void) ? T : never
type Fn<R extends any[]> = (...args: R) => void
type Fn1<H, T extends any[]> = (h: H, ...args: T) => void
export type Cons<H, T extends any[]> = Fn1<H, T> extends Fn<infer R> ? R : []
export type Reverse<L extends any[], X extends any[]=[]> = {
    1: X, 0: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 1 : 0];