import { Lens } from '../types'

export type PipeLenses = {
  <A, B, C>(lens1: Lens<A, B>, lens2: Lens<B, C>): Lens<A, C>
  <A, B, C, D>(lens1: Lens<A, B>, lens2: Lens<B, C>, lens3: Lens<C, D>): Lens<A, D>
  <A, B, C, D, E>(lens1: Lens<A, B>, lens2: Lens<B, C>, lens3: Lens<C, D>, lens4: Lens<D, E>): Lens<
    A,
    E
  >
  <A, B, C, D, E, F>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>
  ): Lens<A, F>
  <A, B, C, D, E, F, G>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>,
    lens6: Lens<F, G>
  ): Lens<A, G>
  <A, B, C, D, E, F, G, H>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>,
    lens6: Lens<F, G>,
    lens7: Lens<G, H>
  ): Lens<A, H>
  <A, B, C, D, E, F, G, H, I>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>,
    lens6: Lens<F, G>,
    lens7: Lens<G, H>,
    lens8: Lens<H, I>
  ): Lens<A, I>
  <A, B, C, D, E, F, G, H, I, J>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>,
    lens6: Lens<F, G>,
    lens7: Lens<G, H>,
    lens8: Lens<H, I>,
    lens9: Lens<I, J>
  ): Lens<A, J>
  <A, B, C, D, E, F, G, H, I, J, K>(
    lens1: Lens<A, B>,
    lens2: Lens<B, C>,
    lens3: Lens<C, D>,
    lens4: Lens<D, E>,
    lens5: Lens<E, F>,
    lens6: Lens<F, G>,
    lens7: Lens<G, H>,
    lens8: Lens<H, I>,
    lens9: Lens<I, J>,
    lens10: Lens<J, K>
  ): Lens<A, K>

  <A, B>(...lenses: Array<Lens<any, any>>): Lens<A, B>
}
