import { Test, describe, given, it } from '@typed/test'

import { Either } from '../Either'
import { unpack } from './unpack'

export const test: Test = describe(`unpack`, [
  given(`(a -> c) -> (b -> c) -> Left a`, [
    it(`returns c by applying (a -> c)`, ({ same }) => {
      const x = Object.create(null)
      const y = Object.create(null)

      const f = (_: any) => x
      const g = (_: any) => y
      const either = Either.left(1)

      same(x, unpack(f, g, either))
    }),
  ]),

  given(`(a -> c) -> (b -> c) -> Right b`, [
    it(`returns c by applying (b -> c)`, ({ same }) => {
      const x = Object.create(null)
      const y = Object.create(null)

      const f = (_: any) => x
      const g = (_: any) => y
      const either = Either.of(1)

      same(y, unpack(f, g, either))
    }),
  ]),
])
