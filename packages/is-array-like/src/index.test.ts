import * as assert from 'assert';

import { isArrayLike } from './';

describe('isArrayLike', function () {
  it('returns true when a value is ArrayLike', function () {
    assert.ok(isArrayLike(arguments));
    assert.ok(isArrayLike([]));
  });

  it('returns false when a value is not ArrayLike', () => {
    assert.ok(!isArrayLike({}));
    assert.ok(!isArrayLike(function () {}));
  });
});
