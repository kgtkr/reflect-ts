import * as T from "./type-data";

export const bool: T.TBoolean = { type: "boolean" };

export const num: T.TNumber = { type: "number" };

export const str: T.TString = { type: "string" };

export function arr<T extends T.TypeData>(t: T): T.TArray<T> {
    return {
        type: "array",
        value: t
    };
}

export function tuple<T extends any[]>(...t: T): T.TTuple<T> {
    return {
        type: "tuple",
        values: t
    };
}

export const any: T.TAny = { type: "any" };

export const nil: T.TNull = { type: "null" };

export const undef: T.TUndefined = { type: "undefined" };

export const symbol: T.TSymbol = { type: "symbol" };

export function obj<T extends { [key: string]: T.TypeData }>(t: T): T.TObject<T> {
    return {
        type: "object",
        values: t
    };
}

export function objMap<T extends T.TypeData>(t: T): T.TObjectMap<T> {
    return {
        type: "object_map",
        value: t
    };
}

export function union<T extends T.TypeData[]>(...t: T): T.TUnion<T> {
    return {
        type: "union",
        values: t
    };
}

export function inter<T extends T.TypeData[]>(...t: T): T.TIntersection<T> {
    return {
        type: "intersection",
        values: t
    };
}

export function strl<T extends string>(t: T): T.TStringLiteral<T> {
    return {
        type: "string_literal",
        value: t
    };
}

export function numl<T extends number>(t: T): T.TNumberLiteral<T> {
    return {
        type: "number_literal",
        value: t
    };
}

export function booll<T extends boolean>(t: T): T.TBooleanLiteral<T> {
    return {
        type: "boolean_literal",
        value: t
    };
}