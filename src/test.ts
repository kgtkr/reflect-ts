import * as R from ".";

const schema = R.object({
    b: R.boolean,
    n: R.number,
    s: R.string,
    list: R.array(R.number),
    tup: R.tuple(R.string, R.number, R.string),
    any: R.any,
    null: R.nul,
    unde: R.undef,
    sym: R.symbol,
    obj: R.object({
        x: R.number
    }),
    map: R.objectMap(R.number),
    union: R.union(R.stringLiteral("a"), R.stringLiteral("b")),
    intersection: R.intersection(R.object({ x: R.number }), R.object({ y: R.number })),
    sl: R.stringLiteral("x"),
    nl: R.numberLiteral(-1),
    bl: R.booleanLiteral(false),
    aro: R.array(R.object({ x: R.number }))
});

const ar = R.array(R.number);
type T1 = R.ToType<typeof ar>;
type Type = R.ToType<typeof schema>;