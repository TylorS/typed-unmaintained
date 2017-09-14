import { Either, map as eitherMap, isLeft, isRight } from '@typed/either'
import { List, map as listMap } from '@typed/list'
import { Maybe, isJust, isNothing, map as maybeMap } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { isPromiseLike } from '@typed/logic'

/**
 * Map over the value contained in a data structure.
 * Works for `List`, `Maybe`, `Either`, and `PromiseLike` data strctures.
 * @name map<A, B>(f: (value: A, index: number) => B, list: List<A>): List<B>
 */
export const map: Map = curry2<any, any, any>(function map(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeMap(f, list)
  if (isLeft(list) || isRight(list)) return eitherMap(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return listMap(f, list)
})

export type Map = {
  <A, B>(f: (value: A, index: number) => B, list: List<A>): List<B>
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>

  <A, B>(f: (value: A, index: number) => B): MapArity1<A, B>
}

export type MapArity1<A, B> = {
  (list: List<A>): List<B>
  (maybe: Maybe<A>): Maybe<B>
  (promise: Promise<A>): Promise<B>
  <C>(either: Either<C, A>): Either<C, B>
}
