import { Maybe, Nothing, chain, isNothing } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`chain`, [
  given(`(a -> Maybe b) and Nothing`, [
    it(`returns Nothing and does not call function`, ({ equal, ok }) => {
      let callCount = 0
      const f = () => {
        ++callCount
        return Nothing
      }

      const expectedCallCount = 0

      ok(isNothing(chain(f, Nothing)))
      equal(expectedCallCount, callCount)
    }),
  ]),

  given(`(a -> Maybe b) and Just a`, [
    it(`returns result of (a -> Maybe b)`, ({ equal, ok }) => {
      let callCount = 0
      const f = () => {
        ++callCount
        return Nothing
      }

      const expectedCallCount = 1

      ok(isNothing(chain(f, Maybe.of(1))))
      equal(expectedCallCount, callCount)
    }),
  ]),
])
