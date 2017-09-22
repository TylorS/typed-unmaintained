import { Just } from './Just'
import { Maybe } from './Maybe'
import { Nothing } from './Nothing'
import { curry2 } from '@typed/functions'
import { fromJust } from './fromJust'
import { isNothing } from './isNothing'

/**
 * Applies a function with all of the values contained in an array of `Maybe`s.
 * If *any* of the `Maybe`s are `Nothing`s then `Nothing` is returned.
 * @name combineArray<R>(f: (...values: Array<any>) => R, maybes: ReadonlyArray<Maybe<any>>): R
 */
export const combineArray: CombineArray = curry2(__combineArray)

function __combineArray<R>(
  f: (...values: Array<any>) => R,
  maybes: ReadonlyArray<Maybe<any>>
): Maybe<R> {
  const containsNothing = maybes.some(isNothing)

  return containsNothing
    ? Nothing
    : Just.of<R>(f(...(maybes as ReadonlyArray<Just<any>>).map(fromJust)))
}

export type CombineArray = {
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybes: [Maybe<A>, Maybe<B>]): Maybe<C>
  <A, B, C, D>(
    f: (valueA: A, valueB: B, valueC: C) => D,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>]
  ): Maybe<D>
  <A, B, C, D, E>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D) => E,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]
  ): Maybe<E>
  <A, B, C, D, E, F>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E) => F,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]
  ): Maybe<F>
  <A, B, C, D, E, F, G>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E, valueF: F) => G,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]
  ): Maybe<G>

  <A, B, C>(f: (valueA: A, valueB: B) => C): (maybes: [Maybe<A>, Maybe<B>]) => Maybe<C>
  <A, B, C, D>(f: (valueA: A, valueB: B, valueC: C) => D): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>]
  ) => Maybe<D>
  <A, B, C, D, E>(f: (valueA: A, valueB: B, valueC: C, valueD: D) => E): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]
  ) => Maybe<E>
  <A, B, C, D, E, F>(f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E) => F): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]
  ) => Maybe<F>
  <A, B, C, D, E, F, G>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E, valueF: F) => G
  ): (maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]) => Maybe<G>

  (f: ArrayConstructor): {
    <A, B>(maybes: [Maybe<A>, Maybe<B>]): Maybe<[A, B]>
    <A, B, C>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>]): Maybe<[A, B, C]>
    <A, B, C, D>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]): Maybe<[A, B, C, D]>
    <A, B, C, D, E>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]): Maybe<
      [A, B, C, D, E]
    >
    <A, B, C, D, E, F>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]): Maybe<
      [A, B, C, D, E, F]
    >
  }

  <R>(f: (...values: Array<any>) => R, maybes: ReadonlyArray<Maybe<any>>): Maybe<R>
  <R>(f: (...values: Array<any>) => R): (maybes: ReadonlyArray<Maybe<any>>) => Maybe<R>
}
