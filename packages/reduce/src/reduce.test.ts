import * as assert from 'assert';

import { reduce } from './reduce';

const sum = (x: number, y: number) => x + y;

const reduceSum = reduce(sum);

const reduceSumFromZero = reduceSum(0);

describe('reduce', () => {
  it('reduces arrays to values', () => {
    const array = [1, 2, 3];

    assert.strictEqual(reduceSumFromZero(array), 6);
  });

  it('reduces arguments object to values', () => {
    function foo (...args: number[]): void;
    function foo () {
      assert.strictEqual(reduceSumFromZero(arguments), 6);
    }

    foo(1, 2, 3);
  });
});
