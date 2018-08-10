export type TypeData =
    |TBoolean
    | TNumber
    | TString
    | TDArray
    | TDTuple
    | TAny
    | TNull
    | TUndefined
    | TSymbol
    | TDObject
    | TDObjectMap
    | TDUnion
    | TDIntersection
    | TStringLiteral<string>
    | TNumberLiteral<number>
    | TBooleanLiteral<boolean>;

interface TDArray extends TArray<TypeData> { }
interface TDTuple extends TTuple<TypeData[]> { }
interface TDObject extends TObject<{ [key: string]: TypeData }> { }
interface TDObjectMap extends TObjectMap<TypeData> { }
interface TDUnion extends TUnion<TypeData[]> { }
interface TDIntersection extends TIntersection<TypeData[]> { }

export interface TBoolean {
    type: "boolean"
}

export interface TNumber {
    type: "number"
}

export interface TString {
    type: "string"
}

export interface TArray<T extends TypeData> {
    type: "array";
    item: T
}

export interface TTuple<T extends TypeData[]> {
    type: "tuple",
    types: T
}

export interface TAny {
    type: "any"
}

export interface TNull {
    type: "null"
}

export interface TUndefined {
    type: "undefined"
}

export interface TSymbol {
    type: "symbol"
}

export interface TObject<T extends { [key: string]: TypeData }> {
    type: "object",
    item: T
}

export interface TObjectMap<T extends TypeData> {
    type: "object_map",
    v: T
}

export interface TUnion<T extends TypeData[]> {
    type: "union",
    types: T
}

export interface TIntersection<T extends TypeData[]> {
    type: "intersection",
    types: T
}

export interface TStringLiteral<T extends string> {
    type: "string_literal",
    v: T
}

export interface TNumberLiteral<T extends number> {
    type: "number_literal",
    v: T
}

export interface TBooleanLiteral<T extends boolean> {
    type: "boolean_literal",
    v: T
}
