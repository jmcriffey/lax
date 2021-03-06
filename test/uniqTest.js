import {assert} from 'chai';

import chain from '../src/chain';
import uniq from '../src/uniq';


describe('uniq', () => {
    it('should handle an array', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(chain(xs).uniq().toArray(), [1, 2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'hello world';

        assert.deepEqual(chain(xs).uniq().toString(), 'helo wrd');
    });

    it('should work unchained', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(Array.from(uniq(xs)), [1, 2, 3, 4]);
    });
});
