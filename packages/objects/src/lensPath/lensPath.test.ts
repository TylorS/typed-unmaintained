import { Test, describe, given, it } from '@typed/test'
import { fromJust, isJust, map } from '@typed/maybe'

import { lensPath } from './lensPath'

export const test: Test = describe(`lensPath`, [
  given(`a path`, [
    it(`returns a Lens`, ({ equal }) => {
      const obj = { a: { b: { c: 1 } } }

      const { view, updateAt } = lensPath<typeof obj>(['a', 'b', 'c'])

      const increment = updateAt(map(x => x + 1))
      const updatedObj = [0, 1, 2, 3, 4].reduce(increment, obj)
      const updatedValue = view(updatedObj)

      const expectedValue = 6

      if (isJust(updatedValue)) equal(expectedValue, fromJust(updatedValue))
    }),
  ]),
])
