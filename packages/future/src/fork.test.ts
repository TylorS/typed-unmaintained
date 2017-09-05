import { Test, describe, given, it } from '@typed/test'

import { Future } from './Future'
import { fork } from './fork'

export const test: Test = describe(`fork`, [
  given(`a left callback, a right callback, and a left Future`, [
    it(`calls the left callback`, ({ equal }, done) => {
      const expected = 1
      const future = Future.reject(expected)

      const left = (value: number) => {
        equal(expected, value)
        done()
      }

      const right = () => {}

      fork(left, right, future)
    }),
  ]),

  given(`a left callback, a right callback, and a right Future`, [
    it(`calls the right callback`, ({ equal }, done) => {
      const expected = 1
      const future = Future.of(expected)

      const right = (value: number) => {
        equal(expected, value)
        done()
      }

      const left = () => {}

      fork(left, right, future)
    }),
  ]),
])
