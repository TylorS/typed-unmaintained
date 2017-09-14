import { Test, describe, given, it } from '@typed/test'

import { isEmpty } from './'

export const test: Test = describe(`isEmpty`, [
  given(`null, void, non-empty string, non-empty array, or non-empty object`, [
    it(`returns false`, ({ notOk }) => {
      notOk(isEmpty(null))
      notOk(isEmpty(void 0))
      notOk(isEmpty('hello'))
      notOk(isEmpty([1, 2, 3]))
      notOk(isEmpty({ a: 1, b: 2, c: 3 }))
    }),
  ]),

  given(`empty string, empty array or empty object`, [
    it(`returns true`, ({ ok }) => {
      ok(isEmpty(''))
      ok(isEmpty([]))
      ok(isEmpty({}))
    }),
  ]),
])
