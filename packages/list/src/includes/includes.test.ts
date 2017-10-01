import { Test, describe, given, it } from '@typed/test'

import { includes } from './includes'

export const test: Test = describe(`includes`, [
  given(`a search string an a string that includes the search`, [
    it(`returns true`, ({ ok }) => {
      const search = 'ell'
      const str = 'hello'

      ok(includes(search, str))
    }),
  ]),

  given(`a search string an a string that doesn't include the search`, [
    it(`returns false`, ({ notOk }) => {
      const search = 'no'
      const str = 'hello'

      notOk(includes(search, str))
    }),
  ]),
])
