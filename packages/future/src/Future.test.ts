import { Test, describe, given, it } from '@typed/test'

import { Future } from './Future'
import { disposeNone } from '@most/disposable'

export const test: Test = describe(`Future`, [
  describe(`Future.create`, [
    given(`((a -> void) -> (b -> void)) -> Disposable`, [
      it(`Returns a Future`, ({ equal }, done) => {
        const { fork }: Future<number, number> = Future.create((reject, resolve) => {
          const isFunction = (x: any) => equal('function', typeof x)

          const dispose = () => {
            try {
              isFunction(reject)
              isFunction(resolve)
              done()
            } catch (error) {
              done(error)
            }
          }

          return { dispose }
        })

        const { dispose } = fork(() => void 0, () => void 0)

        dispose()
      }),

      it(`does not allow settling a Future more than once`, ({ ok }, done) => {
        const { fork }: Future<Error, null> = Future.create((reject, resolve) => {
          resolve(null)
          resolve(null)
          reject(new Error('Should not be called'))

          return disposeNone()
        })

        let callCount = 0
        function f() {
          try {
            ok(callCount < 1)
            callCount++
            setTimeout(done)
          } catch (error) {
            done(error)
          }
        }

        fork(done, f)
      }),
    ]),
  ]),

  describe(`Future.of`, [
    given(`a value`, [
      it(`resolves with that value`, ({ equal }, done) => {
        const x = {}
        const { fork } = Future.of(x)

        fork(
          () => done(new Error('Should not be called')),
          value => {
            equal(x, value)
            done()
          }
        )
      }),

      it(`does not emit during the same tick`, ({ ok, notOk }, done) => {
        let called = false

        const { fork } = Future.of(null)

        fork(
          () => done(new Error('Should not be called')),
          () => {
            called = true
          }
        )

        setTimeout(() => {
          try {
            ok(called)
            done()
          } catch (error) {
            done(error)
          }
        })

        notOk(called)
      }),

      it(`does allows cancelling the emission of the value`, ({ notOk }, done) => {
        let called = false

        const { fork } = Future.of(null)

        const { dispose } = fork(
          () => done(new Error('Should not be called')),
          () => {
            called = true
          }
        )

        setTimeout(() => {
          try {
            notOk(called)
            done()
          } catch (error) {
            done(error)
          }
        })

        dispose()
      }),
    ]),
  ]),
])
