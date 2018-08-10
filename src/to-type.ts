import * as H from "./helper";
import * as S from "./type";

type V2TTuple<T extends any[], R extends any[]=[]> = {
    0: H.Reverse<R>,
    1: V2TTuple<H.Tail<T>, H.Cons<ToType<H.Head<T>>, R>>
}[T extends [] ? 0 : 1];


type V2TUnion<T extends any[]> = {
    0: never,
    1: ToType<H.Head<T>>,
    2: ToType<H.Head<T>> | V2TUnion<H.Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

type V2TIntersection<T extends any[]> = {
    0: never,
    1: ToType<H.Head<T>>,
    2: ToType<H.Head<T>> & V2TIntersection<H.Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

interface V2TArray<T> extends Array<ToType<T>> { }

type V2TObject<T> = { [K in keyof T]: ToType<T[K]> };

export type ToType<T> =
    T extends S.SBoolean ? boolean :
    T extends S.SNumber ? number :
    T extends S.SString ? string :
    T extends S.SArray<infer P> ? V2TArray<P> :
    T extends S.SAny ? any :
    T extends S.SNull ? null :
    T extends S.SUndefined ? undefined :
    T extends S.SSymbol ? symbol :
    T extends S.SObject<infer P> ? V2TObject<P> :
    T extends S.SObjectMap<infer P> ? { [key: string]: ToType<P> } :
    T extends S.SUnion<infer P> ? V2TUnion<P> :
    T extends S.SIntersection<infer P> ? V2TIntersection<P> :
    T extends S.STuple<infer P> ? V2TTuple<P> :
    T extends S.SStringLiteral<infer P> ? P :
    T extends S.SNumberLiteral<infer P> ? P :
    T extends S.SBooleanLiteral<infer P> ? P :
    never;