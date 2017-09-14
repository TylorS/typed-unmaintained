import { Arity0, Arity1, Arity2, Arity3, Arity4, Curry2, Curry3, Curry4 } from '../types'

export type PlaceHolder = {
  readonly ['@@placeholder']: true
}

// prettier-ignore
export type PartialFn = {
  <A>(f: Arity0<A>, args: Array<any>): Arity0<A>

  // Arity 1
  <A, B>(f: Arity1<A, B>, args: [A]): Arity0<B>
  <A, B>(f: Arity1<A, B>, args: [PlaceHolder]): typeof f
  <A, B>(f: Arity1<A, B>, args: Array<never>): typeof f

  // Arity 2
  <A, B, C>(f: Arity2<A, B, C>, args: [A, B]): Arity0<C>
  <A, B, C>(f: Arity2<A, B, C>, args: [A]): Arity1<B, C>
  <A, B, C>(f: Arity2<A, B, C>, args: Array<never>): Curry2<A, B, C>
  <A, B, C>(f: Arity2<A, B, C>, args: [PlaceHolder, B]): Arity1<A, C>
  <A, B, C>(f: Arity2<A, B, C>, args: [A, PlaceHolder]): Arity1<B, C>
  <A, B, C>(f: Arity2<A, B, C>, args: [PlaceHolder]): Curry2<A, B, C>
  <A, B, C>(f: Arity2<A, B, C>, args: [PlaceHolder, PlaceHolder]): Curry2<A, B, C>

  // Arity 3
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A, B, C]): Arity0<D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A, B]): Arity1<C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A]): Curry2<B, C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: Array<never>): Curry3<A, B, C, D>

  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [PlaceHolder, B, C]): Arity1<A, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [PlaceHolder, PlaceHolder, C]): Curry2<A, B, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [PlaceHolder, B, PlaceHolder]): Curry2<A, C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A, PlaceHolder, C]): Arity1<B, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A, PlaceHolder, PlaceHolder]): Curry2<B, C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [A, B, PlaceHolder]): Arity1<C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, args: [PlaceHolder, PlaceHolder, PlaceHolder]): Curry3<A, B, C, D>

  // Arity 4
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B, C, D]): Arity0<E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B, C]): Arity1<D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B]): Curry2<C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A]): Curry3<B, C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: Array<never>): Curry4<A, B, C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, B, C, D]): Arity1<A, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, PlaceHolder, C, D]): Curry2<A, B, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, B, PlaceHolder, D]): Curry2<A, C, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, B, C, PlaceHolder]): Curry2<A, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, PlaceHolder, C, D]): Arity1<B, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, PlaceHolder, PlaceHolder, D]): Curry2<B, C, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, PlaceHolder, C, PlaceHolder]): Curry2<B, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B, PlaceHolder, D]): Arity1<C, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B, PlaceHolder, PlaceHolder]): Curry2<C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, B, C, PlaceHolder]): Arity1<D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder]): Curry4<A, B, C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, PlaceHolder, PlaceHolder, D]): Curry3<A, B, C, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, PlaceHolder, C, PlaceHolder]): Curry3<A, B, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [PlaceHolder, B, PlaceHolder, PlaceHolder]): Curry3<A, C, D, E>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>, args: [A, PlaceHolder, PlaceHolder, PlaceHolder]): Curry3<B, C, D, E>

  // curried variants
  <A>(f: Arity0<A>): Arity0Partial<A>
  <A, B>(f: Arity1<A, B>): Arity1Partial<A, B>
  <A, B, C>(f: Arity2<A, B, C>): Arity2Partial<A, B, C>
  <A, B, C, D>(f: Arity3<A, B, C, D>): Arity3Partial<A, B, C, D>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>): Arity4Partial<A, B, C, D, E>
}

// prettier-ignore
export type Arity0Partial<A> = {
  (args: Array<any>): Arity0<A>
}

// prettier-ignore
export type Arity1Partial<A, B> = {
  (args: [A]): Arity0<B>
  (args: [PlaceHolder]): Arity1<A, B>
  (args: Array<never>): Arity1<A, B>
}

//prettier-ignore
export type Arity2Partial<A, B, C> = {
  (args: [A, B]): Arity0<C>
  (args: [A]): Arity1<B, C>
  (args: Array<never>): Curry2<A, B, C>
  (args: [PlaceHolder, B]): Arity1<A, C>
  (args: [A, PlaceHolder]): Arity1<B, C>
  (args: [PlaceHolder]): Curry2<A, B, C>
  (args: [PlaceHolder, PlaceHolder]): Curry2<A, B, C>
}

//prettier-ignore
export type Arity3Partial<A, B, C, D> = {
  (args: [A, B, C]): Arity0<D>
  (args: [A, B]): Arity1<C, D>
  (args: [A]): Curry2<B, C, D>
  (args: Array<never>): Curry3<A, B, C, D>

  (args: [PlaceHolder, B, C]): Arity1<A, D>
  (args: [PlaceHolder, PlaceHolder, C]): Curry2<A, B, D>
  (args: [PlaceHolder, B, PlaceHolder]): Curry2<A, C, D>
  (args: [A, PlaceHolder, C]): Arity1<B, D>
  (args: [A, PlaceHolder, PlaceHolder]): Curry2<B, C, D>
  (args: [A, B, PlaceHolder]): Arity1<C, D>
}

//prettier-ignore
export type Arity4Partial<A, B, C, D, E> = {
  (args: [A, B, C, D]): Arity0<E>
  (args: [A, B, C]): Arity1<D, E>
  (args: [A, B]): Curry2<C, D, E>
  (args: [A]): Curry3<B, C, D, E>
  (args: Array<never>): Curry4<A, B, C, D, E>
  (args: [PlaceHolder, B, C, D]): Arity1<A, E>
  (args: [PlaceHolder, PlaceHolder, C, D]): Curry2<A, B, E>
  (args: [PlaceHolder, B, PlaceHolder, D]): Curry2<A, C, E>
  (args: [PlaceHolder, B, C, PlaceHolder]): Curry2<A, D, E>
  (args: [A, PlaceHolder, C, D]): Arity1<B, E>
  (args: [A, PlaceHolder, PlaceHolder, D]): Curry2<B, C, E>
  (args: [A, PlaceHolder, C, PlaceHolder]): Curry2<B, D, E>
  (args: [A, B, PlaceHolder, D]): Arity1<C, E>
  (args: [A, B, PlaceHolder, PlaceHolder]): Curry2<C, D, E>
  (args: [A, B, C, PlaceHolder]): Arity1<D, E>
  (args: [PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder]): Curry4<A, B, C, D, E>
  (args: [PlaceHolder, PlaceHolder, PlaceHolder, D]): Curry3<A, B, C, E>
  (args: [PlaceHolder, PlaceHolder, C, PlaceHolder]): Curry3<A, B, D, E>
  (args: [PlaceHolder, B, PlaceHolder, PlaceHolder]): Curry3<A, C, D, E>
  (args: [A, PlaceHolder, PlaceHolder, PlaceHolder]): Curry3<B, C, D, E>
}
