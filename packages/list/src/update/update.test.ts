import { Test, describe, given, it } from '@typed/test'

import { update } from './update'

export const test: Test = describe(`update`, [
  given(`int -> a -> [a]`, [
    it(`return a`, ({ equal }) => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8]

      equal(update(-1, 1, list), list)
      equal(update(20, 1, list), list)
      equal(update(8, 9, list), list)
      equal(update(0, 10, list), [10, 2, 3, 4, 5, 6, 7, 8])
      equal(update(0, 1, []), [])
    }),
  ]),
])
