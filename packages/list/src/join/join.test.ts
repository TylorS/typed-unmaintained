import { Test, describe, given, it } from '@typed/test'

import { join } from './join'

export const test: Test = describe(`join`, [
  given(`a separator and an empty list`, [
    it(`returns empty string`, ({ equal }) => {
      equal('', join('::', []))
    }),
  ]),

  given(`a separator and a list containing 1 item`, [
    it(`returns item contained in list`, ({ equal }) => {
      const value = 'hello'
      const list = [value]

      equal(value, join('::', list))
    }),
  ]),

  given(`a separator and a list of 2+ items`, [
    it(`returns each item joined by the separator`, ({ equal }) => {
      const one = 'one'
      const two = 'two'
      const three = 'three'
      const separator = '::'

      const expected = `${one}${separator}${two}${separator}${three}`

      equal(expected, join(separator, [one, two, three]))
    }),
  ]),
])
