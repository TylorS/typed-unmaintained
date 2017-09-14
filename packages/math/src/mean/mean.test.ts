import { Test, describe, given, it } from '@typed/test'

import { mean } from './'

export const test: Test = describe(`mean`, [
  given(`a list of numbers`, [
    it(`returns the mean`, ({ equal }) => {
      const list = [1, 2, 3, 4, 5]
      equal(3, mean(list))
    }),
  ]),
])
