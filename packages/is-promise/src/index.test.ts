import * as assert from 'assert';

import { isPromise } from './';

describe('isPromise', function () {
  describe('given a number', () => {
    it('returns false', () => {
      assert.ok(!isPromise(1));
    });
  });

  describe('given a promise', () => {
    it('returns true', () => {
      assert.ok(Promise.resolve(1));
    });
  });
});
