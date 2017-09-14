/**
 * @name Arity0
 * @type
 */
export type Arity0<A> = () => A
/**
 * @name Arity1
 * @type
 */
export type Arity1<A, B> = (value: A) => B
/**
 * @name Arity2
 * @type
 */
export type Arity2<A, B, C> = (a: A, b: B) => C
/**
 * @name Arity3
 * @type
 */
export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D
/**
 * @name Arity4
 * @type
 */
export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E
/**
 * @name Arity5
 * @type
 */
export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F
/**
 * @name Arity6
 * @type
 */
export type Arity6<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G
/**
 * @name Arity7
 * @type
 */
export type Arity7<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
/**
 * @name Arity8
 * @type
 */
export type Arity8<A, B, C, D, E, F, G, H, I> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H
) => I
/**
 * @name Arity9
 * @type
 */
export type Arity9<A, B, C, D, E, F, G, H, I, J> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I
) => J
/**
 * @name Arity10
 * @type
 */
export type Arity10<A, B, C, D, E, F, G, H, I, J, K> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J
) => K
/**
 * @name ArityN
 * @type
 */
export type ArityN<R> = (...args: Array<any>) => R
/**
 * @name Arity1N
 * @type
 */
export type Arity1N<A, R> = (a: A, ...args: Array<any>) => R
/**
 * @name Arity2N
 * @type
 */
export type Arity2N<A, B, R> = (a: A, b: B, ...args: Array<any>) => R
/**
 * @name Arity3N
 * @type
 */
export type Arity3N<A, B, C, R> = (a: A, b: B, c: C, ...args: Array<any>) => R
/**
 * @name Arity4N
 * @type
 */
export type Arity4N<A, B, C, D, R> = (a: A, b: B, c: C, d: D, ...args: Array<any>) => R
/**
 * @name Arity5N
 * @type
 */
export type Arity5N<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E, ...args: Array<any>) => R
/**
 * @name Arity6N
 * @type
 */
export type Arity6N<A, B, C, D, E, F, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  ...args: Array<any>
) => R
/**
 * @name Arity7N
 * @type
 */
export type Arity7N<A, B, C, D, E, F, G, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  ...args: Array<any>
) => R
/**
 * @name Arity8N
 * @type
 */
export type Arity8N<A, B, C, D, E, F, G, H, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  ...args: Array<any>
) => R
/**
 * @name Arity9N
 * @type
 */
export type Arity9N<A, B, C, D, E, F, G, H, I, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  ...args: Array<any>
) => R
/**
 * @name Arity10N
 * @type
 */
export type Arity10N<A, B, C, D, E, F, G, H, I, J, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J,
  ...args: Array<any>
) => R

/**
 * @name Arity1Bound
 * @type
 */
export type Arity1Bound<that, A, B> = (this: that, a: A) => B
/**
 * @name Arity2Bound
 * @type
 */
export type Arity2Bound<that, A, B, C> = (this: that, a: A, b: B) => C
/**
 * @name Arity3Bound
 * @type
 */
export type Arity3Bound<that, A, B, C, D> = (this: that, a: A, b: B, c: C) => D
/**
 * @name Arity4Bound
 * @type
 */
export type Arity4Bound<that, A, B, C, D, E> = (this: that, a: A, b: B, c: C, d: D) => E
/**
 * @name Arity5Bound
 * @type
 */
export type Arity5Bound<that, A, B, C, D, E, F> = (this: that, a: A, b: B, c: C, d: D, e: E) => F

/**
 * @name Curry2
 * @type
 */
export type Curry2<A, B, C> = {
  (a: A): Arity1<B, C>
  (a: A, b: B): C
}

/**
 * @name Curry3
 * @type
 */
export type Curry3<A, B, C, D> = {
  (a: A): Curry2<B, C, D>
  (a: A, b: B): Arity1<C, D>
  (a: A, b: B, c: C): D
}

/**
 * @name Curry4
 * @type
 */
export type Curry4<A, B, C, D, E> = {
  (a: A): Curry3<B, C, D, E>
  (a: A, b: B): Curry2<C, D, E>
  (a: A, b: B, c: C): Arity1<D, E>
  (a: A, b: B, c: C, d: D): E
}

/**
 * @name Curry5
 * @type
 */
export type Curry5<A, B, C, D, E, F> = {
  (a: A): Curry4<B, C, D, E, F>
  (a: A, b: B): Curry3<C, D, E, F>
  (a: A, b: B, c: C): Curry2<D, E, F>
  (a: A, b: B, c: C, d: D): Arity1<E, F>
  (a: A, b: B, c: C, d: D, e: E): F
}

/**
 * @name Curry6
 * @type
 */
export type Curry6<A, B, C, D, E, F, G> = {
  (a: A): Curry5<B, C, D, E, F, G>
  (a: A, b: B): Curry4<C, D, E, F, G>
  (a: A, b: B, c: C): Curry3<D, E, F, G>
  (a: A, b: B, c: C, d: D): Curry2<E, F, G>
  (a: A, b: B, c: C, d: D, e: E): Arity1<F, G>
  (a: A, b: B, c: C, d: D, e: E, f: F): G
}

/**
 * @name Curry7
 * @type
 */
export type Curry7<A, B, C, D, E, F, G, H> = {
  (a: A): Curry6<B, C, D, E, F, G, H>
  (a: A, b: B): Curry5<C, D, E, F, G, H>
  (a: A, b: B, c: C): Curry4<D, E, F, G, H>
  (a: A, b: B, c: C, d: D): Curry3<E, F, G, H>
  (a: A, b: B, c: C, d: D, e: E): Curry2<F, G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F): Arity1<G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): H
}

/**
 * @name Curry8
 * @type
 */
export type Curry8<A, B, C, D, E, F, G, H, I> = {
  (a: A): Curry7<B, C, D, E, F, G, H, I>
  (a: A, b: B): Curry6<C, D, E, F, G, H, I>
  (a: A, b: B, c: C): Curry5<D, E, F, G, H, I>
  (a: A, b: B, c: C, d: D): Curry4<E, F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E): Curry3<F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry2<G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Arity1<H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): I
}

/**
 * @name Curry9
 * @type
 */
export type Curry9<A, B, C, D, E, F, G, H, I, J> = {
  (a: A): Curry8<B, C, D, E, F, G, H, I, J>
  (a: A, b: B): Curry7<C, D, E, F, G, H, I, J>
  (a: A, b: B, c: C): Curry6<D, E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D): Curry5<E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E): Curry4<F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry3<G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry2<H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Arity1<I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): J
}

/**
 * @name Curry10
 * @type
 */
export type Curry10<A, B, C, D, E, F, G, H, I, J, K> = {
  (a: A): Curry9<B, C, D, E, F, G, H, I, J, K>
  (a: A, b: B): Curry8<C, D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C): Curry7<D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D): Curry6<E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E): Curry5<F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry4<G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry3<H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry2<I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Arity1<J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): K
}

/**
 * @name Predicate
 * @type
 */
export type Predicate<A> = (value: A) => boolean
/**
 * @name Predicate2
 * @type
 */
export type Predicate2<A> = (a: A, b: A) => boolean

/**
 * @name ComparisonNumber
 * @type
 */
export type ComparisonNumbers = -1 | 0 | 1
/**
 * @name Comparator
 * @type
 */
export type Comparator<A> = (a: A, b: A) => ComparisonNumbers
