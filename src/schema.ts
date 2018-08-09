export type Schema =
    |SBoolean
    | SNumber
    | SString
    | S2Array
    | S2Tuple
    | SAny
    | SNull
    | SUndefined
    | SSymbol
    | S2Object
    | S2ObjectMap
    | S2Union
    | S2Intersection
    | SStringLiteral<string>
    | SNumberLiteral<number>
    | SBooleanLiteral<boolean>;

interface S2Array extends SArray<Schema> { }
interface S2Tuple extends STuple<Schema[]> { }
interface S2Object extends SObject<{ [key: string]: Schema }> { }
interface S2ObjectMap extends SObjectMap<Schema> { }
interface S2Union extends SUnion<Schema[]> { }
interface S2Intersection extends SIntersection<Schema[]> { }

export interface SBoolean {
    type: "boolean"
}

export interface SNumber {
    type: "number"
}

export interface SString {
    type: "string"
}

export interface SArray<T extends Schema> {
    type: "array";
    item: T
}

export interface STuple<T extends Schema[]> {
    type: "tuple",
    types: T
}

export interface SAny {
    type: "any"
}

export interface SNull {
    type: "null"
}

export interface SUndefined {
    type: "undefined"
}

export interface SSymbol {
    type: "symbol"
}

export interface SObject<T extends { [key: string]: Schema }> {
    type: "object",
    item: T
}

export interface SObjectMap<T extends Schema> {
    type: "object_map",
    v: T
}

export interface SUnion<T extends Schema[]> {
    type: "union",
    types: T
}

export interface SIntersection<T extends Schema[]> {
    type: "intersection",
    types: T
}

export interface SStringLiteral<T extends string> {
    type: "string_literal",
    v: T
}

export interface SNumberLiteral<T extends number> {
    type: "number_literal",
    v: T
}

export interface SBooleanLiteral<T extends boolean> {
    type: "boolean_literal",
    v: T
}
