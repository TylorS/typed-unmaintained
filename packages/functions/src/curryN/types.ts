import * as t from '../types'

export type CurryNFn = {
  <A>(arity: 0, f: t.Arity0<A>): () => A
  <A, B>(arity: 1, f: t.Arity1N<A, B>): t.Arity1<A, B>
  <A, B, C>(arity: 2, f: t.Arity2N<A, B, C>): t.Curry2<A, B, C>
  <A, B, C, D>(arity: 3, f: t.Arity3N<A, B, C, D>): t.Curry3<A, B, C, D>
  <A, B, C, D, E>(arity: 4, f: t.Arity4N<A, B, C, D, E>): t.Curry4<A, B, C, D, E>
  <A, B, C, D, E, F>(arity: 5, f: t.Arity5N<A, B, C, D, E, F>): t.Curry5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(arity: 6, f: t.Arity6N<A, B, C, D, E, F, G>): t.Curry6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(arity: 7, f: t.Arity7N<A, B, C, D, E, F, G, H>): t.Curry7<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H
  >
  <A, B, C, D, E, F, G, H, I>(arity: 8, f: t.Arity8N<A, B, C, D, E, F, G, H, I>): t.Curry8<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
  >
  <A, B, C, D, E, F, G, H, I, J>(arity: 9, f: t.Arity9N<A, B, C, D, E, F, G, H, I, J>): t.Curry9<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
  >
  <A, B, C, D, E, F, G, H, I, J, K>(
    arity: 10,
    f: t.Arity10N<A, B, C, D, E, F, G, H, I, J, K>
  ): t.Curry10<A, B, C, D, E, F, G, H, I, J, K>

  <A>(arity: 0): (f: t.Arity0<A>) => t.Arity0<A>
  <A, B>(arity: 1): (f: t.Arity1N<A, B>) => t.Arity1<A, B>
  <A, B, C>(arity: 2): (f: t.Arity2N<A, B, C>) => t.Curry2<A, B, C>
  <A, B, C, D>(arity: 3): (f: t.Arity3N<A, B, C, D>) => t.Curry3<A, B, C, D>
  <A, B, C, D, E>(arity: 4): (f: t.Arity4N<A, B, C, D, E>) => t.Curry4<A, B, C, D, E>
  <A, B, C, D, E, F>(arity: 5): (f: t.Arity5N<A, B, C, D, E, F>) => t.Curry5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(arity: 6): (
    f: t.Arity6N<A, B, C, D, E, F, G>
  ) => t.Curry6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(arity: 7): (
    f: t.Arity7N<A, B, C, D, E, F, G, H>
  ) => t.Curry7<A, B, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(arity: 8): (
    f: t.Arity8N<A, B, C, D, E, F, G, H, I>
  ) => t.Curry8<A, B, C, D, E, F, G, H, I>
  <A, B, C, D, E, F, G, H, I, J>(arity: 9): (
    f: t.Arity9N<A, B, C, D, E, F, G, H, I, J>
  ) => t.Curry9<A, B, C, D, E, F, G, H, I, J>
  <A, B, C, D, E, F, G, H, I, J, K>(arity: 10): (
    f: t.Arity10N<A, B, C, D, E, F, G, H, I, J, K>
  ) => t.Curry10<A, B, C, D, E, F, G, H, I, J, K>
}
