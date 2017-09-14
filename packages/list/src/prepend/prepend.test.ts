import { Test, describe, given, it } from '@typed/test'

import { prepend } from './'

export const test: Test = describe(`prepend`, [
  given(`a value and a list`, [
    it(`returns a new list`, ({ equal }) => {
      equal([1, 2, 3], prepend(1, [2, 3]))
    }),
  ]),
])
