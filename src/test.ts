import * as R from ".";

const schema = R.obj({
    b: R.bool,
    n: R.num,
    s: R.str,
    list: R.arr(R.num),
    tup: R.tuple(R.str, R.num, R.str),
    any: R.any,
    null: R.nil,
    unde: R.undef,
    sym: R.symbol,
    obj: R.obj({
        x: R.num
    }),
    map: R.objectMap(R.num),
    union: R.union(R.strl("a"), R.strl("b")),
    intersection: R.inter(R.obj({ x: R.num }), R.obj({ y: R.num })),
    sl: R.strl("x"),
    nl: R.numl(-1),
    bl: R.booll(false),
    aro: R.arr(R.obj({ x: R.num }))
});

const ar = R.arr(R.num);
type T1 = R.ToType<typeof ar>;
type Type = R.ToType<typeof schema>;