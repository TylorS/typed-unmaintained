import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust, isNothing } from '@typed/maybe'

import { findIndex } from './findIndex'

export const test: Test = describe(`findIndex`, [
  given(`(a -> bool) and List a, where predicate returns true`, [
    it(`returns Just Index`, ({ equal }) => {
      const list = [1, 2, 3]
      const predicate = (x: number) => x === 3
      const expectedIndex = 2

      const actual = findIndex(predicate, list)

      if (isJust(actual)) equal(expectedIndex, fromJust(actual))
    }),
  ]),

  given(`(a -> bool) and List a, where predicate returns false`, [
    it(`returns Nothing`, ({ ok }) => {
      const list = [1, 2, 3]
      const predicate = () => false

      const actual = findIndex(predicate, list)

      ok(isNothing(actual))
    }),
  ]),
])
