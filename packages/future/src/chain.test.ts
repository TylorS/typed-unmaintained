import { Future, chain, toPromise } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`chain`, [
  given(`(b -> Future a c) and rejected Future a b`, [
    it(`returns rejected Future and does not call function`, ({ rejects, equal }) => {
      let callCount = 0

      function f() {
        ++callCount

        return Future.of(1)
      }

      const expectedCallCount = 0

      return rejects(toPromise(chain(f, Future.reject(1)))).then(() =>
        equal(expectedCallCount, callCount)
      )
    }),
  ]),

  given(`(b -> Future a c) and resolved Future a b`, [
    it(`returns result of (a -> Future a c)`, ({ equal, rejects }) => {
      let callCount = 0
      const f = () => {
        ++callCount

        return Future.reject(1)
      }

      const expectedCallCount = 1

      return rejects(toPromise(chain(f, Future.of(1)))).then(() =>
        equal(expectedCallCount, callCount)
      )
    }),
  ]),
])
