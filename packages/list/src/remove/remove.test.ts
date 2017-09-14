import { Test, describe, given, it } from '@typed/test'

import { remove } from './remove'

export const test: Test = describe(`remove`, [
  given(`int -> int -> List a`, [
    it(`returns List a`, ({ equal }) => {
      equal(remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 6, 7, 8])
      equal(remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]).length, 5)
      equal(remove(2, 100, [1, 2, 3, 4]), [1, 2])
      equal(remove(2, 100, [1, 2, 3, 4]).length, 2)
      equal(remove(2, 1, [1, 2, 3]), [1, 2])
      equal(remove(2, 1, [1, 2, 3]).length, 2)
      equal(remove(0, 1, [1, 2, 3, 4]), [2, 3, 4])
      equal(remove(0, 1, [1, 2, 3, 4]).length, 3)
      // Fix issue #1
      equal(remove(3, 1, [1, 2, 3]), [1, 2, 3])
      equal(remove(4, 1, [1, 2, 3]), [1, 2, 3])
    }),
  ]),
])
