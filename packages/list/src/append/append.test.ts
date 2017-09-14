import { Test, describe, given, it } from '@typed/test'

import { append } from './append'

export const test: Test = describe(`append`, [
  given(`a -> List a`, [
    it(`returns List a`, ({ equal }) => {
      const value = 4
      const list = [1, 2, 3]
      const expected = [...list, value]

      equal(expected, append(value, list))
    }),
  ]),
])
