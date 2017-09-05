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
export type Fork<A, B> = (reject: (value: A) => void, resolve: (value: B) => void) => void

export namespace Future {
  /**
   * Creates a `Future` given a `Fork` function.
   * @name Future.create<A, B>(fork: Fork<A, B>): Future<A, B>
   */
  export const create = <A, B>(fork: Fork<A, B>): Future<A, B> => ({ fork })

  /**
   * Creates a `Future` which will always fork to the right with the given value.
   * @name Future.resolve<A, B = any>(value: A): Future<B, A>
   */
  export const of = <A, B = any>(value: A): Future<B, A> => create((_, resolve) => resolve(value))

  /**
   * Creates a `Future` which will always fork to the left with the given value.
   * @name Future.reject<A, B = any>(value: A): Future<A, B>
   */
  export const reject = <A, B = any>(value: A): Future<A, B> => create(reject => reject(value))
}
