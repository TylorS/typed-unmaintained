import { Just, fromJust, isJust } from '@typed/maybe'
import { Test, describe, given, it } from '@typed/test'

import { lens } from '../lens'
import { view } from './'

export const test: Test = describe(`view`, [
  given(`a Lens and an object`, [
    it(`calls Lens.view`, ({ ok, equal }) => {
      const value = 1
      const a = { a: value }
      const sut = lens(({ a }) => a, (a, o) => ({ ...o, a }))

      ok(isJust(view(sut, a)))
      equal(value, fromJust(view(sut, a) as Just<number>))
    }),
  ]),
])
