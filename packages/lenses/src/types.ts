import { Maybe } from '@typed/maybe'

/**
 * A common interface for Updating objects
 * @name Lens
 * @type
 */
export interface Lens<A, B> {
  readonly view: (object: A) => Maybe<B>
  readonly updateAt: LensUpdateAt<A, B>
}

export type LensUpdateAt<A, B> = {
  (f: (previousValue: Maybe<B>) => Maybe<B>, object: A): A
  (f: (previousValue: Maybe<B>) => Maybe<B>): (object: A) => A
}
