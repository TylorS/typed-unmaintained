import { Test, describe, given, it } from '@typed/test'

import { endsWith } from './endsWith'

export const test: Test = describe(`endsWith`, [
  given(`an search string and a string ending in search`, [
    it(`returns true`, ({ ok }) => {
      const search = 'lo'
      const str = 'hello'

      ok(endsWith(search, str))
    }),
  ]),

  given(`an search string and a string not ending in search`, [
    it(`returns false`, ({ notOk }) => {
      const search = 'no'
      const str = 'hello'

      notOk(endsWith(search, str))
    }),
  ]),
])
