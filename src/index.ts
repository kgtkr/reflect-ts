type Head<T> = T extends [infer P, ...any[]] ? P : never;
type Tail<L extends any[]> = ((...x: L) => void) extends ((h: any, ...rest: infer T) => void) ? T : never
type Fn<R extends any[]> = (...args: R) => void
type Fn1<H, T extends any[]> = (h: H, ...args: T) => void
type Cons<H, T extends any[]> = Fn1<H, T> extends Fn<infer R> ? R : []
type Reverse<L extends any[], X extends any[]=[]> = {
    1: X, 0: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 1 : 0];


interface SBoolean {
    type: "boolean"
}

interface SNumber {
    type: "number"
}

interface SString {
    type: "string"
}

interface SArray<T> {
    type: "array";
    item: T
}

interface STuple<T extends any[]> {
    type: "tuple",
    types: T
}

type V2TTuple<T extends any[], R extends any[]=[]> = {
    0: Reverse<R>,
    1: V2TTuple<Tail<T>, Cons<V2T<Head<T>>, R>>
}[T extends [] ? 0 : 1];

interface SAny {
    type: "any"
}


interface SNull {
    type: "null"
}

interface SUndefined {
    type: "undefined"
}

interface SSymbol {
    type: "symbol"
}

interface SObject<T> {
    type: "object",
    item: T
}

interface SObjectMap<T> {
    type: "object_map",
    v: T
}

interface SUnion<T extends any[]> {
    type: "union",
    types: T
}

type V2TUnion<T extends any[]> = {
    0: never,
    1: V2T<Head<T>>,
    2: V2T<Head<T>> | V2TUnion<Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

interface SIntersection<T extends any[]> {
    type: "intersection",
    types: T
}

type V2TIntersection<T extends any[]> = {
    0: never,
    1: V2T<Head<T>>,
    2: V2T<Head<T>> & V2TIntersection<Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2];

interface SStringLiteral<T extends string> {
    type: "string_literal",
    v: T
}


interface SNumberLiteral<T extends number> {
    type: "number_literal",
    v: T
}

interface SBooleanLiteral<T extends boolean> {
    type: "boolean_literal",
    v: T
}

type V2T<T> =
    T extends SBoolean ? boolean :
    T extends SNumber ? number :
    T extends SString ? string :
    T extends SArray<infer P> ? P[] :
    T extends SAny ? any :
    T extends SNull ? null :
    T extends SUndefined ? undefined :
    T extends SSymbol ? symbol :
    T extends SObject<infer P> ? { [K in keyof P]: V2T<P[K]> } :
    T extends SObjectMap<infer P> ? { [key: string]: V2T<P> } :
    T extends SUnion<infer P> ? V2TUnion<P> :
    T extends SIntersection<infer P> ? V2TIntersection<P> :
    T extends STuple<infer P> ? V2TTuple<P> :
    T extends SStringLiteral<infer P> ? P :
    T extends SNumberLiteral<infer P> ? P :
    T extends SBooleanLiteral<infer P> ? P :
    never;