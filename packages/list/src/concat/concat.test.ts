import { Test, describe, it } from '@typed/test'

import { concat } from './concat'

export const test: Test = describe(`concat`, [
  it('concatenates two lists', ({ equal }) => {
    equal(concat([1, 2], [3, 4]), [1, 2, 3, 4])
  }),

  it('concatenates two strings', ({ equal }) => {
    equal(concat('foo', 'bar'), ['f', 'o', 'o', 'b', 'a', 'r'])
  }),
])
