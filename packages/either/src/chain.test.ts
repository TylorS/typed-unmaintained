import { Either, chain, isLeft } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`chain`, [
  given(`(b -> Either a c) and Left a`, [
    it(`returns Left a and does not call function`, ({ equal, ok }) => {
      let callCount = 0

      function f() {
        ++callCount

        return Either.of(1)
      }

      const expectedCallCount = 0

      ok(isLeft(chain(f, Either.left(1))))
      equal(expectedCallCount, callCount)
    }),
  ]),

  given(`(b -> Either a c) and Right b`, [
    it(`returns result of (a -> Either a c)`, ({ equal, ok }) => {
      let callCount = 0
      const f = () => {
        ++callCount

        return Either.left(1)
      }

      const expectedCallCount = 1

      ok(isLeft(chain(f, Either.of(1))))
      equal(expectedCallCount, callCount)
    }),
  ]),
])
