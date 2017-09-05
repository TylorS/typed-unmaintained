import { Maybe, Nothing, fromMaybe } from './'
import { Test, describe, given, it } from '@typed/test'

export const test: Test = describe(`fromMaybe`, [
  given(`a default value and Nothing`, [
    it(`returns default value`, ({ equal }) => {
      const defaultValue = {}
      const maybe = Nothing

      equal(defaultValue, fromMaybe(defaultValue, maybe))
    }),
  ]),

  given(`a default value and Just a`, [
    it(`returns Just contained value`, ({ equal }) => {
      const defaultValue = -1
      const value = 1
      const maybe = Maybe.of(value)

      equal(value, fromMaybe(defaultValue, maybe))
    }),
  ]),
])
