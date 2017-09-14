import { Test, describe, given, it } from '@typed/test'

import { flatten } from './flatten'

export const test: Test = describe(`flatten`, [
  given(`an array of arrays`, [
    it(`returns an unnested array`, ({ equal }) => {
      const arr = [[1, 2], [3, 4], [5, 6], [[[7, 8]]]]

      equal([1, 2, 3, 4, 5, 6, 7, 8], flatten<number>(arr))
    }),
  ]),
])
