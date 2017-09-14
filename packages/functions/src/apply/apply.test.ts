import { Test, describe, given, it } from '@typed/test'

import { apply } from './apply'

const add = (x: number, y: number) => x + y

export const test: Test = describe(`apply`, [
  given(`a list of arguments and a function`, [
    it(`calls the function with given arguments`, ({ equal }) => {
      const argumentArray = [1, 2, 3]
      const expected = argumentArray.reduce(add, 0)

      function f(x: number, y: number, z: number): number {
        equal(argumentArray, [x, y, z])

        return x + y + z
      }

      equal(expected, apply(argumentArray, f))
    }),
  ]),
])
