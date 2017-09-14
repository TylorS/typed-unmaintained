import { Test, describe, given, it } from '@typed/test'

import { reverse } from './reverse'

export const test: Test = describe(`reverse`, [
  given(`an List a`, [
    it(`returns a reversed array`, ({ equal }) => {
      const list = [1, 2, 3, 4, 5]
      const expected = [5, 4, 3, 2, 1]

      equal(expected, reverse(list))
    }),
  ]),

  given(`a string`, [
    it(`returns a reversed array`, ({ equal }) => {
      const str = 'hello'
      const expected = ['o', 'l', 'l', 'e', 'h']

      equal(expected, reverse(str))
    }),
  ]),
])
