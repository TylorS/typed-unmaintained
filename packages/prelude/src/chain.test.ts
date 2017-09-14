import { Test, describe, given, it } from '@typed/test'

import { Either } from '@typed/either'
import { Maybe } from '@typed/maybe'
import { chain } from './chain'

export const test: Test = describe(`chain`, [
  given(`(a -> b) and List a`, [
    it(`returns a List b`, ({ equal }) => {
      const list = [1, 2, 3]
      const f = (n: number) => [String(n), String(n)]
      const expected = ['1', '1', '2', '2', '3', '3']

      equal(expected, chain(f)(list))
      equal(expected, chain(f, list))
    }),
  ]),

  given(`(a -> b) and Maybe a`, [
    it(`returns a Maybe b`, ({ equal }) => {
      const maybe = Maybe.of(1)
      const f = (x: number) => Maybe.of(x + 1)
      const expected = Maybe.of(2)

      equal(expected, chain(f)(maybe))
      equal(expected, chain(f, maybe))
    }),
  ]),

  given(`(b -> C) and Either a b`, [
    it(`returns a Either a c`, ({ equal }) => {
      const either = Either.of(1)
      const f = (x: number) => Either.of(x + 1)
      const expected = Either.of<number>(2)

      equal(expected, chain(f)(either))
      equal(expected, chain(f, either))
    }),
  ]),

  given(`(a -> b) and Promise a`, [
    it(`returns Promise b`, ({ equal }) => {
      const promise = Promise.resolve(1)
      const f = (x: number) => Promise.resolve(x + 1)
      const expected = 2

      return Promise.all([
        chain(f)(promise).then(equal(expected)),
        chain(f, promise).then(equal(expected)),
      ])
    }),
  ]),
])
