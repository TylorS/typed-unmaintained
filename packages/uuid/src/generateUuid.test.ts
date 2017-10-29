import { Test, describe, given, it } from '@typed/test'

import { UuidArray } from './generateRandomNumbers'
import { generateUuid } from './generateUuid'

export const test: Test = describe(`generateUuid`, [
  given(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]`, [
    it(`returns`, ({ equal }) => {
      const expected = '1234-56-478-89a-bcdef10'

      equal(expected, generateUuid(createUuidArray()))
    }),
  ]),
])

function createUuidArray(): UuidArray {
  return ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] as any) as UuidArray
}
