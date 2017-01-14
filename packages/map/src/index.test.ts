import * as assert from 'assert';

import { just } from 'most';
import { map } from './';

const add1 = map((x: number) => x + 1);

describe('map', function () {
  it('maps arrays', function () {
    const array = add1([1, 2, 3]);

    assert.deepEqual(array, [2, 3, 4]);
  });

  it('maps streams', () => {
    const stream = just(1);

    return add1(stream).observe(x => {
      assert.strictEqual(x, 2);
    });
  });
});
