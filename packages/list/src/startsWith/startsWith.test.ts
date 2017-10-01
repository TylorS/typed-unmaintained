import { Test, describe, given, it } from '@typed/test'

import { startsWith } from './startsWith'

export const test: Test = describe(`endsWith`, [
  given(`an search string and a string starting in search`, [
    it(`returns true`, ({ ok }) => {
      const search = 'he'
      const str = 'hello'

      ok(startsWith(search, str))
    }),
  ]),

  given(`an search string and a string not starting in search`, [
    it(`returns false`, ({ notOk }) => {
      const search = 'no'
      const str = 'hello'

      notOk(startsWith(search, str))
    }),
  ]),
])
