import { Test, describe, given, it } from '@typed/test'

import { range } from './range'

export const test: Test = describe(`range`, [
  given(`a number from and a number to`, [
    it(`returns a list containing from and to values`, ({ equal }) => {
      equal([1, 2, 3], range(1, 4))
      equal([0, 1, 2, 3, 4, 5], range(0)(6))
    }),
  ]),
])
