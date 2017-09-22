import { Just, fromJust, isJust } from './'
import { Test, describe, given, it } from '@typed/test'

import { combine } from './combine'

export const test: Test = describe(`combine`, [
  given(`(a -> b -> c) -> Just a -> Just b`, [
    it(`returns Just c`, ({ equal }) => {
      const a = Just.of(1)
      const b = Just.of(2)

      const f = (a: number, b: number) => a + b

      const c = combine(f, a, b)
      const expected = 3

      if (isJust(c)) equal(expected, fromJust(c))
    }),
  ]),
])
