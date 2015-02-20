import none from '../src/none';


describe('none', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = none(xs, x => x > 5);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = none(xs, x => x > 3);

        assert.isFalse(result);
    });

    it('should cast to true', () => {
        let xs = [0, 0, 0, 0];
        let result = none(xs, x => x);

        assert.equal(result, true);
    });

    it('should cast to false', () => {
        let xs = [1, 2, 3, 4];
        let result = none(xs, x => x);

        assert.equal(result, false);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = none(xs, function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x > 5;
        }, thisArg);

        assert.deepEqual(result, true);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
