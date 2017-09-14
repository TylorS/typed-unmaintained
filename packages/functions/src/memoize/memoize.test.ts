import { Test, describe, given, it } from '@typed/test'

import { curry2 } from '../curry'
import { memoize } from './memoize'

export const test: Test = describe(`memoize`, [
  given(`a function`, [
    it(`returns a memoized function`, ({ equal }) => {
      let called = 0

      function f(a: number, b: number) {
        called += 1

        return a + b
      }

      const mf = memoize(f)

      equal(mf(1, 2), 3)
      equal(mf(1, 2), 3)
      equal(called, 1)
    }),
  ]),

  given(`a curried function`, [
    it(`returns a memoized curried function`, ({ equal }) => {
      let called = 0

      function f(a: number, b: number) {
        called += 1

        return a + b
      }

      const c = curry2(f)

      const mf = memoize(c)

      equal(mf(1)(2), 3)
      equal(mf(1)(2), 3)

      equal(called, 1)
    }),
  ]),
])
