import { Test, describe, given, it } from '@typed/test'

import { Either } from '@typed/either'
import { Maybe } from '@typed/maybe'
import { map } from './map'

export const test: Test = describe(`map`, [
  given(`(a -> b) and List a`, [
    it(`returns a List b`, ({ equal }) => {
      const list = [1, 2, 3]
      const f = String
      const expected = list.map(f)

      equal(expected, map(f)(list))
      equal(expected, map(f, list))
    }),
  ]),

  given(`(a -> b) and Maybe a`, [
    it(`returns a Maybe b`, ({ equal }) => {
      const maybe = Maybe.of(1)
      const f = (x: number) => x + 1
      const expected = Maybe.of(2)

      equal(expected, map(f)(maybe))
      equal(expected, map(f, maybe))
    }),
  ]),

  given(`(b -> C) and Either a b`, [
    it(`returns a Either a c`, ({ equal }) => {
      const either = Either.of(1)
      const f = (x: number) => x + 1
      const expected = Either.of<number>(2)

      equal(expected, map(f)(either))
      equal(expected, map(f, either))
    }),
  ]),

  given(`(a -> b) and Promise a`, [
    it(`returns Promise b`, ({ equal }) => {
      const promise = Promise.resolve(1)
      const f = (x: number) => x + 1
      const expected = 2

      return Promise.all([
        map(f)(promise).then(equal(expected)),
        map(f, promise).then(equal(expected)),
      ])
    }),
  ]),
])
