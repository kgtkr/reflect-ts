import * as H from "./helper";
import * as T from "./type-data";

type TupleToType<T extends any[], R extends any[]=[]> = {
    0: H.Reverse<R>,
    1: TupleToType<H.Tail<T>, H.Cons<ToType<H.Head<T>>, R>>
}[T extends [] ? 0 : 1];


type UnionToType<T extends any[]> = {
    0: never,
    1: ToType<H.Head<T>>,
    2: ToType<H.Head<T>> | UnionToType<H.Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

type IntersectionToType<T extends any[]> = {
    0: never,
    1: ToType<H.Head<T>>,
    2: ToType<H.Head<T>> & IntersectionToType<H.Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

interface ArrayToType<T> extends Array<ToType<T>> { }

type ObjectToType<T> = { [K in keyof T]: ToType<T[K]> };

export type ToType<T> =
    T extends T.TBoolean ? boolean :
    T extends T.TNumber ? number :
    T extends T.TString ? string :
    T extends T.TArray<infer P> ? ArrayToType<P> :
    T extends T.TAny ? any :
    T extends T.TNull ? null :
    T extends T.TUndefined ? undefined :
    T extends T.TSymbol ? symbol :
    T extends T.TObject<infer P> ? ObjectToType<P> :
    T extends T.TObjectMap<infer P> ? { [key: string]: ToType<P> } :
    T extends T.TUnion<infer P> ? UnionToType<P> :
    T extends T.TIntersection<infer P> ? IntersectionToType<P> :
    T extends T.TTuple<infer P> ? TupleToType<P> :
    T extends T.TStringLiteral<infer P> ? P :
    T extends T.TNumberLiteral<infer P> ? P :
    T extends T.TBooleanLiteral<infer P> ? P :
    never;