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

interface SObjectMap<T> {
    type: "object_map",
    v: T
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
    //T extends SUnion<infer A, infer B> ? V2T<A> | V2T<B> :
    //T extends SIntersection<infer A, infer B> ? V2T<A> & V2T<B> :
    T extends SStringLiteral<infer P> ? P :
    T extends SNumberLiteral<infer P> ? P :
    T extends SBooleanLiteral<infer P> ? P :
    never;