import { Test, describe, given, it } from '@typed/test'
import { fromMaybe, map } from '@typed/maybe'

import { lens } from '../'
import { pipeLenses } from './pipeLenses'

export const test: Test = describe(`pipeLenses`, [
  describe('view', [
    given(`Lens a b and Lens b c`, [
      it(`returns Lens a c`, ({ equal }) => {
        const value = 1
        const obj = { a: { b: value } }
        const lensAB = lens<typeof obj, typeof obj['a']>(({ a }) => a, (_, a) => a)
        const lensBC = lens<typeof obj['a'], typeof obj['a']['b']>(({ b }) => b, (_, b) => b)
        const { view } = pipeLenses(lensAB, lensBC)

        const INCORRECT_VALUE = value + 1
        const actual = fromMaybe(INCORRECT_VALUE, view(obj))

        equal(value, actual)
      }),
    ]),
  ]),

  describe('updateAt', [
    given(`Lens a b, Lens b c, and Lens c d`, [
      it(`returns Lens a d`, ({ equal }) => {
        const value = 1
        const obj = { a: { b: { c: value } } }
        type Obj = typeof obj
        const lensAB = lens<Obj, Obj['a']>(({ a }) => a, (a, o) => ({ ...o, a }))
        const lensBC = lens<Obj['a'], Obj['a']['b']>(({ b }) => b, (b, o) => ({ ...o, b }))
        const lensCD = lens<Obj['a']['b'], Obj['a']['b']['c']>(
          ({ c }) => c,
          (c, o) => ({ ...o, c })
        )
        const { updateAt } = pipeLenses(lensAB, lensBC, lensCD)

        const expected = { a: { b: { c: value + 1 } } }
        const actual = updateAt(map((x: number) => x + 1))(obj)

        equal(expected, actual)
      }),
    ]),
  ]),
])
