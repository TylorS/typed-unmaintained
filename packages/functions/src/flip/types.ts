import * as t from '../types'

export type Flip = {
  <A, B, C>(f: t.Arity2<A, B, C>): t.Curry2<B, A, C>
  <A, B, C, D>(f: t.Arity3<A, B, C, D>): t.Curry3<B, A, C, D>
  <A, B, C, D, E>(f: t.Arity4<A, B, C, D, E>): t.Curry4<B, A, C, D, E>
  <A, B, C, D, E, F>(f: t.Arity5<A, B, C, D, E, F>): t.Curry5<B, A, C, D, E, F>
  <A, B, C, D, E, F, G>(f: t.Arity6<A, B, C, D, E, F, G>): t.Curry6<B, A, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(f: t.Arity7<A, B, C, D, E, F, G, H>): t.Curry7<B, A, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(f: t.Arity8<A, B, C, D, E, F, G, H, I>): t.Curry8<
    B,
    A,
    C,
    D,
    E,
    F,
    G,
    H,
    I
  >
  <A, B, C, D, E, F, G, H, I, J>(f: t.Arity9<A, B, C, D, E, F, G, H, I, J>): t.Curry9<
    B,
    A,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
  >
  <A, B, C, D, E, F, G, H, I, J, K>(f: t.Arity10<A, B, C, D, E, F, G, H, I, J, K>): t.Curry10<
    B,
    A,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K
  >
}
