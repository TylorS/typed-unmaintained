import { Arity1 } from '../types'

export type PipeFn = {
  <A, B>(f: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(f: Arity1<A, B>, g: Arity1<B, C>): Arity1<A, C>
  <A, B, C, D>(f: Arity1<A, B>, g: Arity1<B, C>, h: Arity1<C, D>): Arity1<A, D>
  <A, B, C, D, E>(f: Arity1<A, B>, g: Arity1<B, C>, h: Arity1<C, D>, i: Arity1<D, E>): Arity1<A, E>
  <A, B, C, D, E, F>(
    f: Arity1<A, B>,
    g: Arity1<B, C>,
    h: Arity1<C, D>,
    i: Arity1<D, E>,
    j: Arity1<E, F>
  ): Arity1<A, F>
  <A, B, C, D, E, F, G>(
    f: Arity1<A, B>,
    g: Arity1<B, C>,
    h: Arity1<C, D>,
    i: Arity1<D, E>,
    j: Arity1<E, F>,
    k: Arity1<F, G>
  ): Arity1<A, G>
  <A, B, C, D, E, F, G, H>(
    f: Arity1<A, B>,
    g: Arity1<B, C>,
    h: Arity1<C, D>,
    i: Arity1<D, E>,
    j: Arity1<E, F>,
    k: Arity1<F, G>,
    l: Arity1<G, H>
  ): Arity1<A, H>
  <A, B, C, D, E, F, G, H, I>(
    f: Arity1<A, B>,
    g: Arity1<B, C>,
    h: Arity1<C, D>,
    i: Arity1<D, E>,
    j: Arity1<E, F>,
    k: Arity1<F, G>,
    l: Arity1<G, H>,
    m: Arity1<H, I>
  ): Arity1<A, I>

  <A, B>(...fns: Array<Arity1<any, any>>): Arity1<A, B>
}
