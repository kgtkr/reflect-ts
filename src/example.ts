import * as R from ".";

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