import { Test, describe, given, it } from '@typed/test'

import { equals } from './equals'

export const test: Test = describe(`equal`, [
  given(`given two arrays with equal values`, [
    it(`returns true`, ({ ok }) => {
      const a = [0, 1, 2, 3]
      const b = [0, 1, 2, 3]

      ok(equals(a, b))
    }),
  ]),
])
