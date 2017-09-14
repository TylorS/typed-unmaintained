import { Test, describe, given, it } from '@typed/test'

import { ascend } from './'

export const test: Test = describe(`ascend`, [
  given(`(a -> b), a and a`, [
    it(`returns a ComparisionNumber`, ({ equal }) => {
      const a = { a: 1 }
      const b = { a: 2 }
      const byA = (x: typeof a): number => x.a

      equal(ascend(byA, a, b), -1)
      equal(ascend(byA, b, a), 1)
      equal(ascend(byA, a, a), 0)
    }),
  ]),
])
