import { Test, describe, given, it } from '@typed/test'

import { prop } from './prop'

export const test: Test = describe(`prop`, [
  given(`K => { K: V }`, [
    it(`returns V`, ({ equal }) => {
      equal(1, prop('a', { a: 1 }))
      equal(1, prop('a')({ a: 1 }))
      equal(1, prop(1, [0, 1]))
    }),
  ]),
])
