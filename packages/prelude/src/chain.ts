import { Either, chain as eitherChain, isLeft, isRight } from '@typed/either'
import { List, chain as listChain } from '@typed/list'
import { Maybe, isJust, isNothing, chain as maybeChain } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { isPromiseLike } from '@typed/logic'

/**
 * Creates a new `Monad` from the value contained in another.
 * Works with `Maybe`, `Either`, `PromiseLike` and `List` data 
 * structures.
 * @name chain<A, B>(f: (value: A) => List<B>, list: List<A>): Array<B>
 */
export const chain: Chain = curry2<any, any, any>(function(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeChain(f, list)
  if (isLeft(list) || isRight(list)) return eitherChain(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return listChain(f, list)
})

export type Chain = {
  <A, B>(f: (value: A, index: number) => List<B>, list: List<A>): Array<B>

  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>

  <A, B>(f: (value: A, index: number) => List<B>): (list: List<A>) => Array<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}
