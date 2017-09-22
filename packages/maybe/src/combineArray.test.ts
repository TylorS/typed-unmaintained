import { Just, fromJust, isJust } from './'
import { Test, describe, given, it } from '@typed/test'

import { combineArray } from './combineArray'

export const test: Test = describe(`combineArray`, [
  given(`(a -> b -> c) -> ( Maybe a, Maybe b, Maybe c )`, [
    it(`returns Maybe d`, ({ equal }) => {
      const a = Just.of(1)
      const b = Just.of(2)
      const c = Just.of(3)

      const f = (x: number, y: number, z: number) => x + y + z

      const d = combineArray(f, [a, b, c])

      const expected = 6

      if (isJust(d)) equal(expected, fromJust(d))
    }),
  ]),
])
