import * as S from "./type-data";

export const bool: S.TBoolean = { type: "boolean" };

export const num: S.TNumber = { type: "number" };

export const str: S.TString = { type: "string" };

export function arr<T extends S.TypeData>(t: T): S.TArray<T> {
    return {
        type: "array",
        item: t
    };
}

export function tuple<T extends any[]>(...t: T): S.TTuple<T> {
    return {
        type: "tuple",
        types: t
    };
}

export const any: S.TAny = { type: "any" };

export const nil: S.TNull = { type: "null" };

export const undef: S.TUndefined = { type: "undefined" };

export const symbol: S.TSymbol = { type: "symbol" };

export function obj<T extends { [key: string]: S.TypeData }>(t: T): S.TObject<T> {
    return {
        type: "object",
        item: t
    };
}

export function objMap<T extends S.TypeData>(t: T): S.TObjectMap<T> {
    return {
        type: "object_map",
        v: t
    };
}

export function union<T extends S.TypeData[]>(...t: T): S.TUnion<T> {
    return {
        type: "union",
        types: t
    };
}

export function inter<T extends S.TypeData[]>(...t: T): S.TIntersection<T> {
    return {
        type: "intersection",
        types: t
    };
}

export function strl<T extends string>(t: T): S.TStringLiteral<T> {
    return {
        type: "string_literal",
        v: t
    };
}

export function numl<T extends number>(t: T): S.TNumberLiteral<T> {
    return {
        type: "number_literal",
        v: t
    };
}

export function booll<T extends boolean>(t: T): S.TBooleanLiteral<T> {
    return {
        type: "boolean_literal",
        v: t
    };
}