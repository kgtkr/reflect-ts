import * as H from "./helper";
import * as S from "./type-data";

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
    T extends S.TBoolean ? boolean :
    T extends S.TNumber ? number :
    T extends S.TString ? string :
    T extends S.TArray<infer P> ? ArrayToType<P> :
    T extends S.TAny ? any :
    T extends S.TNull ? null :
    T extends S.TUndefined ? undefined :
    T extends S.TSymbol ? symbol :
    T extends S.TObject<infer P> ? ObjectToType<P> :
    T extends S.TObjectMap<infer P> ? { [key: string]: ToType<P> } :
    T extends S.TUnion<infer P> ? UnionToType<P> :
    T extends S.TIntersection<infer P> ? IntersectionToType<P> :
    T extends S.TTuple<infer P> ? TupleToType<P> :
    T extends S.TStringLiteral<infer P> ? P :
    T extends S.TNumberLiteral<infer P> ? P :
    T extends S.TBooleanLiteral<infer P> ? P :
    never;