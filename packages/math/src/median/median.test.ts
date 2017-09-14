import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust, isNothing } from '@typed/maybe'

import { median } from './median'

export const test: Test = describe(`median`, [
  given(`an empty list`, [
    it(`returns Nothing`, ({ ok }) => {
      ok(isNothing(median([])))
    }),
  ]),

  given(`a non-empty list`, [
    it(`returns a Just containing the calculated median`, ({ equal }) => {
      const list = [1, 2, 2, 3, 3, 3, 3, 10]

      const actual = median(list)

      if (isJust(actual)) equal(3, fromJust(actual))
    }),
  ]),
])
