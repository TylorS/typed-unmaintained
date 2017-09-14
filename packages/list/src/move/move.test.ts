import { Test, describe, given, it } from '@typed/test'

import { move } from './move'
import { range } from '../range'

export const test: Test = describe(`move`, [
  given(`fromIndex, a toIndex, and an array`, [
    it(`returns a new array with fromIndex at toIndex`, ({ equal }) => {
      equal(move(1, 3, range(1, 6)), [1, 3, 4, 2, 5])
      equal(move(3, 1, range(1, 6)), [1, 4, 2, 3, 5])
      equal(move(1, 1, range(1, 6)), range(1, 6))
    }),
  ]),
])
