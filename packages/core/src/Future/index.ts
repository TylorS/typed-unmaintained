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
