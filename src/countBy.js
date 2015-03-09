function countBy(xs, predicate, thisArg) {
    let i = 0;
    let counts = {};
    let fn;

    if (typeof predicate === 'string') {
        fn = x => x[predicate];
    } else {
        fn = thisArg ? predicate.bind(thisArg) : predicate;
    }

    for (let x of xs) {
        let key = fn(x, i, xs);

        counts[key] = counts[key] ? counts[key] + 1 : 1;

        i += 1;
    }

    return counts;
}

export default countBy;
