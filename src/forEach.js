function forEach(xs, predicate, thisArg) {
    let iter = xs[Symbol.iterator]();
    let fn = thisArg ? predicate.bind(thisArg) : predicate;

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        fn(x.value, i, xs);
    }
}

export default forEach;
