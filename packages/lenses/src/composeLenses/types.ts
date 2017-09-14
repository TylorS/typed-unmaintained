import { Lens } from '../types'

export type ComposeLenses = {
  <A, B, C>(lens2: Lens<B, C>, lens1: Lens<A, B>): Lens<A, C>
  <A, B, C, D>(lens3: Lens<C, D>, lens2: Lens<B, C>, lens1: Lens<A, B>): Lens<A, D>
  <A, B, C, D, E>(lens4: Lens<D, E>, lens3: Lens<C, D>, lens2: Lens<B, C>, lens1: Lens<A, B>): Lens<
    A,
    E
  >
  <A, B, C, D, E, F>(
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, F>
  <A, B, C, D, E, F, G>(
    lens6: Lens<F, G>,
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, G>
  <A, B, C, D, E, F, G, H>(
    lens7: Lens<G, H>,
    lens6: Lens<F, G>,
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, H>
  <A, B, C, D, E, F, G, H, I>(
    lens8: Lens<H, I>,
    lens7: Lens<G, H>,
    lens6: Lens<F, G>,
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, I>
  <A, B, C, D, E, F, G, H, I, J>(
    lens9: Lens<I, J>,
    lens8: Lens<H, I>,
    lens7: Lens<G, H>,
    lens6: Lens<F, G>,
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, J>
  <A, B, C, D, E, F, G, H, I, J, K>(
    lens10: Lens<J, K>,
    lens9: Lens<I, J>,
    lens8: Lens<H, I>,
    lens7: Lens<G, H>,
    lens6: Lens<F, G>,
    lens5: Lens<E, F>,
    lens4: Lens<D, E>,
    lens3: Lens<C, D>,
    lens2: Lens<B, C>,
    lens1: Lens<A, B>
  ): Lens<A, K>
}
