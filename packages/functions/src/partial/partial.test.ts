import { Test, describe, given, it } from '@typed/test'
import { __, partial } from './partial'

export const test: Test = describe(`partial`, [
  given(`a function of Arity 0`, [
    it(`returns a function of arity 0`, ({ equal }) => {
      const foo = () => 1
      const partialFoo = partial(foo, [])

      equal(partialFoo(), 1)
    }),
  ]),

  given(`a function of Arity 1 and no args`, [
    it(`returns a function of arity 1`, ({ equal }) => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [])

      equal(partialFoo(1), 1)
      equal(partialFoo(2), 2)
    }),
  ]),

  given(`a function of Arity 1 and 1 arg`, [
    it(`returns a function of Arity 0`, ({ equal }) => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [1])

      equal(partialFoo(), 1)
      equal(partialFoo(), 1)
    }),
  ]),

  given(`a function of Arity 1 and 1 Placeholder`, [
    it(`returns a function of Arity 1`, ({ equal }) => {
      const foo = (a: number) => a
      const partialFoo = partial(foo, [__])

      equal(partialFoo(1), 1)
    }),
  ]),

  given(`a function of Arity 2 and no args`, [
    it(`returns a curried function`, ({ equal }) => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [])

      equal(partialFoo(1)(2), 3)
    }),
  ]),

  given(`a function of Arity 2 and 1 arg`, [
    it(`returns a function of Arity 1`, ({ equal }) => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [1])

      equal(partialFoo(2), 3)
    }),
  ]),

  given(`a function of Arity2 and 1 placeholder and 1 arg`, [
    it(`returns a function of Arity 1`, ({ equal }) => {
      const foo = (a: number, b: number) => a + b
      const partialFoo = partial(foo, [__, 100])

      equal(partialFoo(1), 101)
      equal(partialFoo(10), 110)
    }),
  ]),

  given(`a function of Arity 3 and 2 placeholders and 1 arg`, [
    it(`returns a function of Arity 2`, ({ equal }) => {
      const foo = (a: number, b: number, c: number) => a + b + c
      const partialFoo = partial(foo, [__, __, 1])

      equal(partialFoo(10)(20), 31)
    }),
  ]),
])
