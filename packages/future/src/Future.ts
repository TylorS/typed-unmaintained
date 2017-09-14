import * as types from '@typed/core'

export type Future<A, B> = types.Future<A, B>
export type Fork<A, B> = types.Fork<A, B>

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
    return create((_, resolve) => resolve(value))
  }

  /**
   * Creates a `Future` which will always fork to the left with the given value.
   * @name Future.reject<A, B = any>(value: A): Future<A, B>
   */
  export function reject<A, B = any>(value: A): Future<A, B> {
    return create(reject => reject(value))
  }
}
