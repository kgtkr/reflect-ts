import * as S from "./schema";

export const boolean: S.SBoolean = { type: "boolean" };

export const number: S.SNumber = { type: "number" };

export const string: S.SString = { type: "string" };

export function array<T>(t: T): S.SArray<T> {
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

export const nul: S.SNull = { type: "null" };

export const undef: S.SUndefined = { type: "undefined" };

export const symbol: S.SSymbol = { type: "symbol" };

export function object<T>(t: T): S.SObject<T> {
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

export function intersection<T extends any[]>(...t: T): S.SIntersection<T> {
    return {
        type: "intersection",
        types: t
    };
}

export function stringLiteral<T extends string>(t: T): S.SStringLiteral<T> {
    return {
        type: "string_literal",
        v: t
    };
}

export function numberLiteral<T extends number>(t: T): S.SNumberLiteral<T> {
    return {
        type: "number_literal",
        v: t
    };
}

export function booleanLiteral<T extends boolean>(t: T): S.SBooleanLiteral<T> {
    return {
        type: "boolean_literal",
        v: t
    };
}