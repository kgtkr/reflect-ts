# reflect-ts

* TypeScript reflect library
* TypeScript can not acquire type information at runtime.
* In this library, type information can be handled easily at run time by generating TypeScript type from type information.

## TypeScript
* 3.0.1+

## Install

```
$ npm i reflect-ts
```

## Example
```ts
import * as R from "reflect-ts";

// make TypeData
// Do not write type annotations and generics
const typeData = R.union(R.obj({
    type: R.strl("tweet"),
    text: R.str,
    likeUsers: R.arr(R.str)
}), R.obj({
    type: R.strl("retweet"),
    retweetID: R.str,
}));

// Generate TypeScript-Type from TypeData
/*
type Type = {
    type: "tweet",
    text: string,
    likeUsers: string[]
} | {
    type: "retweet",
    retweetID: string
};
*/
type Type = R.ToType<typeof typeData>;

const tweet: Type = {
    type: "tweet",
    text: "Hello reflect-ts",
    likeUsers: ["user1", "user2"]
};

const retweet: Type = {
    type: "retweet",
    retweetID: "tweet1"
};

function reflect(type: R.TypeData) {
    console.log(type);
}

reflect(typeData);
```

## Usage
### TypeData
|generator|type|type data|
|:-|:-|:-|
|`bool`|`boolean`|`{type:"boolean"}`|
|`num`|`number`|`{type:"number"}`|
|`str`|`string`|`{type:"string"}`|
|`arr(typeData)`|`T[]`|`{type:"array",value:TypeData}`|
|`tuple(...typeData)`|`[...T]`|`{type:"tuple",values:TypeData[]}`|
|`any`|`any`|`{type:"any"}`|
|`nil`|`null`|`{type:"null"}`|
|`undef`|`undefined`|`{type:"undefined"}`|
|`symbol`|`symbol`|`{type:"symbol"}`|
|`obj({x:typeData...})`|`{x:T...}`|`{type:"object",values:{[key:string]:TypeData}}`|
|`objMap(typeData)`|`{[key:string]:T}`|`{type:"object_map",value:TypeData}`|
|`union(...typeData)`|`A|B|...`|`{type:"union",values:TypeData[]}`|
|`inter(...typeData)`|`A&B&...`|`{type:"intersection",values:TypeData[]}`|
|`strl(str)`|`"xxx"`|`{type:"string_literal",value:string}`|
|`numl(num)`|`1`|`{type:"number_literal",value:number}`|
|`booll(bool)`|`true`|`{type:"boolean_literal",value:boolean}`|

