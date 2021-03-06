import {assert} from 'chai';

import chain from '../src/chain';
import find from '../src/find';


describe('find', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).find(x => x === 3);

        assert.equal(result, 3);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).find(x => x === 'd');

        assert.equal(result, 'd');
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).find(x => x[0] === 2);

        assert.deepEqual(result, [2, 2]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).find(x => x === 2);

        assert.equal(result, 2);
    });

    it('should handle not found', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).find(x => x > 4);

        assert.isUndefined(result);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = find(xs, x => x === 3);

        assert.deepEqual(result, 3);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).find(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return y === 4;
        }, thisArg);

        assert.deepEqual(result, 4);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
