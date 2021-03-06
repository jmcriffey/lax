function findWhere(xs, query) {
    let props = Object.getOwnPropertyNames(query);

    for (let x of xs) {
        let match = true;

        for (let prop of props) {
            if (query[prop] !== x[prop]) {
                match = false;

                break;
            }
        }

        if (match) {
            return x;
        }
    }
}

export default findWhere;
