import { Disposable } from '@most/types'
import { disposeOnce } from '@most/disposable'

export { Disposable } from '@most/types'

/**
 * Asynchronous data-structure similar to a Promise, but lazy.
 * @name Future
 * @type
 */
export interface Future<A, B> {
  readonly fork: Fork<A, B>
}

/**
 * Fork function signature used by Future.
 * @name Fork
 * @type
 */
export type Fork<A, B> = (reject: (value: A) => void, resolve: (value: B) => void) => Disposable

export namespace Future {
  /**
   * Creates a `Future` given a `Fork` function.
   *
   * **Note:** It is the responsibility of the caller to `Future.create` that
   * neither of the 2 supplied functions will be invoked until the caller has been
   * able to return it's `Disposable`. If you looking to use `Future` for something
   * naturally synchronous, [@typed/either](https://github.com/TylorS/typed/tree/master/either)
   * is likely a better choice for your use case.
   * @name Future.create<A, B>(fork: Fork<A, B>): Future<A, B>
   */
  export function create<A, B>(fork: Fork<A, B>): Future<A, B> {
    return {
      fork: (reject: (value: A) => void, resolve: (value: B) => void): Disposable => {
        let settled = false
        function isUnsettled(): boolean {
          if (settled) return false

          settled = true

          return true
        }

        const disposable = disposeOnce(
          fork(value => isUnsettled() && reject(value), value => isUnsettled() && resolve(value))
        )

        const dispose = () => disposable.dispose()

        return { dispose }
      },
    }
  }

  /**
   * Creates a `Future` which will always fork to the right with the given value.
   * @name Future.of<A, B = any>(value: A): Future<B, A>
   */
  export function of<A, B = any>(value: A): Future<B, A> {
    return create((_, resolve) => defer(resolve, value))
  }

  /**
   * Creates a `Future` which will always fork to the left with the given value.
   * @name Future.reject<A, B = any>(value: A): Future<A, B>
   */
  export function reject<A, B = any>(value: A): Future<A, B> {
    return create(reject => defer(reject, value))
  }
}

function defer<A>(f: (value: A) => void, value: A): Disposable {
  const id = setTimeout(f, 0, value)
  const dispose = () => clearTimeout(id)

  return { dispose }
}
