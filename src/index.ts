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

//tuple

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

interface SObjectMap<K, V> {
    type: "object_map",
    key: K,
    V: V
}

interface SUnion<A, B> {
    type: "union",
    a: A,
    b: B
}

interface SIntersection<A, B> {
    type: "intersection",
    a: A,
    b: B
}

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
