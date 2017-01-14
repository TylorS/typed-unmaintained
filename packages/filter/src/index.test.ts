import * as assert from 'assert';

import { filter } from './';
import { from } from 'most';

const evens = filter((x: number) => x % 2 === 0);

describe('filter', function () {
  it('filters arrays', function () {
    const array = evens([1, 2, 3]);

    assert.deepEqual(array, [2]);
  });

  it('filters streams', (done) => {
    const stream = from<number>([1, 2, 3]);

    evens(stream).observe(x => {
      assert.strictEqual(x, 2);

      // ensure doesn't emit multiple times
      setTimeout(done, 100);
    });
  });
});
