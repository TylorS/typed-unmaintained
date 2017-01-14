import * as assert from 'assert';
import { curry } from './curry';

describe('curry', () => {
  it('curries a function of arity 1', () => {
    const f = (a: number) => a;
    const curried = curry(f);

    assert.strictEqual(curried()()()()(1), 1);
  });

  it('curries a function of arity 2', () => {
    const f = (a: number, b: number) => a + b;
    const curried = curry(f);

    assert.strictEqual(curried()()()(1)()()()(2), 3);
    assert.strictEqual(curried(1, 2), 3);
  });

  it('curries a function of arity 3', () => {
    const f = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(f);

    assert.strictEqual(curried(1, 1, 1), 3);
    assert.strictEqual(curried(1)(1, 1), 3);
    assert.strictEqual(curried(1)(1)(1), 3);
  });

  it('curries a function of arity 4', () => {
    const f = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const curried = curry(f);

    assert.strictEqual(curried(1, 1, 1, 1), 4);
    assert.strictEqual(curried(1, 1)(1, 1), 4);
    assert.strictEqual(curried(1)(1)(1)(1), 4);
  });

  it('curries a function of arity 5', () => {
    const f = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;
    const curried = curry(f);

    assert.strictEqual(curried(1, 1, 1, 1, 1), 5);
    assert.strictEqual(curried(1, 1, 1)(1, 1), 5);
    assert.strictEqual(curried(1)(1)(1)(1)(1), 5);
  });
});
