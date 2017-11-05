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

/**
 * Disposable type signature. A Disposable is a data-structure used to
 * cleanup resources or to cancel scheduled work.
 */
export interface Disposable {
  readonly dispose: () => void
}

export namespace Future {
  /**
   * Creates a `Future` given a `Fork` function.
   * @name Future.create<A, B>(fork: Fork<A, B>): Future<A, B>
   */
  export function create<A, B>(fork: Fork<A, B>): Future<A, B> {
    return { fork }
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
