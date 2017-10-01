import { Test, describe, given, it } from '@typed/test'

import { fromJust } from './fromJust'
import { isJust } from './isJust'
import { isNothing } from './isNothing'
import { toMaybe } from './toMaybe'

export const test: Test = describe(`toMaybe`, [
  given(`void`, [
    it(`returns Nothing`, ({ ok }) => {
      const value = void 0
      const maybe = toMaybe<number>(value)

      ok(isNothing(maybe))
    }),
  ]),

  given(`null`, [
    it(`returns Nothing`, ({ ok }) => {
      const value = null
      const maybe = toMaybe(value)

      ok(isNothing(maybe))
    }),
  ]),

  given(`a falsy value`, [
    it(`returns a Just containing the value`, ({ equal }) => {
      const value = 0
      const maybe = toMaybe<number>(value)

      if (isJust(maybe)) equal(value, fromJust(maybe))
    }),
  ]),
])
