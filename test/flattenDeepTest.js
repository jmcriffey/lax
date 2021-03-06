import {assert} from 'chai';

import chain from '../src/chain';
import flattenDeep from '../src/flattenDeep';


describe('flattenDeep', () => {
    it('should handle arrays', () => {
        let result = chain([1, [2, 3], [[4], [5]]]).flattenDeep();

        assert.deepEqual(result.toArray(), [1, 2, 3, 4, 5]);
    });

    it('should handle strings', () => {
        let result = chain(['h', [['e', 'l']], [['l']], 'o']).flattenDeep();

        assert.equal(result.toString(), 'hello');
    });

    it('should handle sets', () => {
        let result = chain([
            new Set([1, [[2]], [[3], 4]]),
            new Set([5, [6, 7], 8])
        ]).flattenDeep();

        assert.deepEqual(result.toArray(), [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle maps', () => {
        let result = chain([
            new Map([
                [1, 1],
                [[2, 2], [3, 3]]
            ]),
            new Map([
                [4, 4],
                [5, 5]
            ])
        ]).flattenDeep();

        assert.deepEqual(result.toArray(), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });

    it('should work unchained', () => {
        let result = flattenDeep([1, [2, [[3]]], [[4], [[5]]]]);

        assert.deepEqual(Array.from(result), [1, 2, 3, 4, 5]);
    });
});
