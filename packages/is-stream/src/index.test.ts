import * as assert from 'assert';

import { isStream } from './';
import { just } from 'most';
import { sync } from 'most-subject';

describe('isStream', function () {
  it('return true when given a stream', function () {
    assert.ok(isStream(just(1)));
    assert.ok(isStream(sync()));
  });

  it('returns false when not given a stream', () => {
    assert.ok(!isStream(void 0));
    assert.ok(!isStream(0));
    assert.ok(!isStream(null));
    assert.ok(!isStream({}));
    assert.ok(!isStream([]));
  });
});
