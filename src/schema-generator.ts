import * as S from "./schema";

export const bool: S.SBoolean = { type: "boolean" };

export const num: S.SNumber = { type: "number" };

export const str: S.SString = { type: "string" };

export function arr<T>(t: T): S.SArray<T> {
    return {
        type: "array",
        item: t
    };
}

export function tuple<T extends any[]>(...t: T): S.STuple<T> {
    return {
        type: "tuple",
        types: t
    };
}

export const any: S.SAny = { type: "any" };

export const nil: S.SNull = { type: "null" };

export const undef: S.SUndefined = { type: "undefined" };

export const symbol: S.SSymbol = { type: "symbol" };

export function obj<T>(t: T): S.SObject<T> {
    return {
        type: "object",
        item: t
    };
}

export function union<T extends any[]>(...t: T): S.SUnion<T> {
    return {
        type: "union",
        types: t
    };
}

export function inter<T extends any[]>(...t: T): S.SIntersection<T> {
    return {
        type: "intersection",
        types: t
    };
}

export function strl<T extends string>(t: T): S.SStringLiteral<T> {
    return {
        type: "string_literal",
        v: t
    };
}

export function numl<T extends number>(t: T): S.SNumberLiteral<T> {
    return {
        type: "number_literal",
        v: t
    };
}

export function booll<T extends boolean>(t: T): S.SBooleanLiteral<T> {
    return {
        type: "boolean_literal",
        v: t
    };
}