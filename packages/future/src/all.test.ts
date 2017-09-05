import { Future, all, toPromise } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`all`, [
  given(`an Like (Future a b)`, [
    it(`returns Future a (List b)`, ({ equal }) => {
      const expected = [1, 2, 3]

      const resolvedFutures = expected.map(Future.of)

      return toPromise(all(resolvedFutures)).then(equal(expected))
    }),
  ]),
])
