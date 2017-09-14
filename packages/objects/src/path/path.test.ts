import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust } from '@typed/maybe'

import { path } from './path'

export const test: Test = describe(`path`, [
  given(`a path and an object`, [
    it(`returns a Maybe value`, ({ equal }) => {
      const value = 1
      const obj = { a: value }

      const actual = path<typeof obj, 'a'>(['a'], obj)

      if (isJust(actual)) equal(value, fromJust(actual))
    }),
  ]),
])
