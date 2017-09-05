import { Test, describe, given, it } from '@typed/test'

import { Future } from './Future'
import { sequence } from './sequence'
import { toPromise } from './toPromise'

export const test: Test = describe(`sequence`, [
  given(`List (Future a b)`, [
    it(`returns a Future`, ({ equal }) => {
      const expected = [1, 2, 3]

      const future = sequence(expected.map(Future.of))

      return toPromise(future).then(equal(expected))
    }),
  ]),
])
