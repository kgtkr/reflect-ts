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

const boolean: SBoolean = { type: "boolean" };

interface SNumber {
    type: "number"
}

const number: SNumber = { type: "number" };

interface SString {
    type: "string"
}

const string: SString = { type: "string" };

interface SArray<T> {
    type: "array";
    item: T
}

function array<T>(t: T): SArray<T> {
    return {
        type: "array",
        item: t
    };
}

interface STuple<T extends any[]> {
    type: "tuple",
    types: T
}

function tuple<T extends any[]>(...t: T): STuple<T> {
    return {
        type: "tuple",
        types: t
    };
}

type V2TTuple<T extends any[], R extends any[]=[]> = {
    0: Reverse<R>,
    1: V2TTuple<Tail<T>, Cons<V2T<Head<T>>, R>>
}[T extends [] ? 0 : 1];

interface SAny {
    type: "any"
}

const any: SAny = { type: "any" };


interface SNull {
    type: "null"
}

const nul: SNull = { type: "null" };


interface SUndefined {
    type: "undefined"
}

const undef: SUndefined = { type: "undefined" };


interface SSymbol {
    type: "symbol"
}

const symbol: SSymbol = { type: "symbol" };

interface SObject<T> {
    type: "object",
    item: T
}

function object<T>(t: T): SObject<T> {
    return {
        type: "object",
        item: t
    };
}

interface SObjectMap<T> {
    type: "object_map",
    v: T
}

function objectMap<T>(t: T): SObjectMap<T> {
    return {
        type: "object_map",
        v: t
    };
}

interface SUnion<T extends any[]> {
    type: "union",
    types: T
}

function union<T extends any[]>(...t: T): SUnion<T> {
    return {
        type: "union",
        types: t
    };
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

function intersection<T extends any[]>(...t: T): SIntersection<T> {
    return {
        type: "intersection",
        types: t
    };
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

function stringLiteral<T extends string>(t: T): SStringLiteral<T> {
    return {
        type: "string_literal",
        v: t
    };
}


interface SNumberLiteral<T extends number> {
    type: "number_literal",
    v: T
}

function numberLiteral<T extends number>(t: T): SNumberLiteral<T> {
    return {
        type: "number_literal",
        v: t
    };
}

interface SBooleanLiteral<T extends boolean> {
    type: "boolean_literal",
    v: T
}

function booleanLiteral<T extends boolean>(t: T): SBooleanLiteral<T> {
    return {
        type: "boolean_literal",
        v: t
    };
}

type V2TArray<T> = { 0: V2T<T> }[T extends any ? 0 : 0][];

type V2T<T> =
    T extends SBoolean ? boolean :
    T extends SNumber ? number :
    T extends SString ? string :
    T extends SArray<infer P> ? V2TArray<T> :
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

const schema = object({
    b: boolean,
    n: number,
    s: string,
    list: array(number),
    tup: tuple(string, number, string),
    any: any,
    null: nul,
    unde: undef,
    sym: symbol,
    obj: object({
        x: number
    }),
    map: objectMap(number),
    union: union(stringLiteral("a"), stringLiteral("b")),
    intersection: intersection(object({ x: number }), object({ y: number })),
    sl: stringLiteral("x"),
    nl: numberLiteral(-1),
    bl: booleanLiteral(false)
});
type Type = V2T<typeof schema>;

/*
現在のTypeの型
{
    b: boolean;
    n: number;
    s: string;
    list: any[];//バグ
    tup: [string, number, string];
    any: any;
    null: null;
    unde: undefined;
    sym: symbol;
    obj: any;//バグ
    map: {
        [key: string]: number;
    };
    union: "a" | "b";
    intersection: any & any;//バグ
    sl: "x";
    nl: -1;
    bl: false;
}
*/