import { Arity1 } from '../types'

export type Compose = {
  <A, B>(f: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, C>
  <A, B, C, D>(h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, D>
  <A, B, C, D, E>(i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, E>
  <A, B, C, D, E, F>(
    j: Arity1<E, F>,
    i: Arity1<D, E>,
    h: Arity1<C, D>,
    g: Arity1<B, C>,
    f: Arity1<A, B>
  ): Arity1<A, F>
  <A, B, C, D, E, F, G>(
    k: Arity1<F, G>,
    j: Arity1<E, F>,
    i: Arity1<D, E>,
    h: Arity1<C, D>,
    g: Arity1<B, C>,
    f: Arity1<A, B>
  ): Arity1<A, G>
  <A, B, C, D, E, F, G, H>(
    l: Arity1<G, H>,
    k: Arity1<F, G>,
    j: Arity1<E, F>,
    i: Arity1<D, E>,
    h: Arity1<C, D>,
    g: Arity1<B, C>,
    f: Arity1<A, B>
  ): Arity1<A, H>
  <A, B, C, D, E, F, G, H, I>(
    m: Arity1<H, I>,
    l: Arity1<G, H>,
    k: Arity1<F, G>,
    j: Arity1<E, F>,
    i: Arity1<D, E>,
    h: Arity1<C, D>,
    g: Arity1<B, C>,
    f: Arity1<A, B>
  ): Arity1<A, I>

  <A, B>(...fns: Array<Arity1<any, any>>): Arity1<A, B>
}
