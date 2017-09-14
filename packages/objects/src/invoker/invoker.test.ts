import { Test, describe, given, it } from '@typed/test'

import { invoker } from './invoker'

export const test: Test = describe(`invoker`, [
  given(`given an arity, and method name`, [
    it(`it returns a curried function that calls a object method `, ({ equal }) => {
      const obj = { foo: (a: number, b: number): number => a + b }

      const foo = invoker<typeof obj, number, number, number>(2, 'foo')

      equal(obj.foo(1, 2), foo(1)(2)(obj))
    }),
  ]),
])
