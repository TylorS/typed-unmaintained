/* A function which takes exactly 1 parameter */
export type Arity1<A, B> = (a: A) => B;

/* A function which takes exactly 2 parameters */
export type Arity2<A, B, C> = (a: A, b: B) => C;

/* A function which takes exactly 3 parameters */
export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D;

/* A function which takes exactly 4 parameters */
export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;

/* A function which takes exactly 5 parameters */
export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;

/* A curried function of 0 to 1 parameters accepted */
export interface Curry1<A, B> {
  (): Curry1<A, B>;
  (a: A): B;
}

/* A curried function of 0 to 2 parameters accepted */
export interface Curry2<A, B, C> {
  (): Curry2<A, B, C>;
  (a: A): Curry1<B, C>;
  (a: A, b: B): C;
}

/* A curried function of 0 to 3 parameters accepted */
export interface Curry3<A, B, C, D> {
  (): Curry3<A, B, C, D>;
  (a: A): Curry2<B, C, D>;
  (a: A, b: B): Curry1<C, D>;
  (a: A, b: B, c: C): D;
}

/* A curried function of 0 to 4 parameters accepted */
export interface Curry4<A, B, C, D, E> {
  (): Curry4<A, B, C, D, E>;
  (a: A): Curry3<B, C, D, E>;
  (a: A, b: B): Curry2<C, D, E>;
  (a: A, b: B, c: C): Curry1<D, E>;
  (a: A, b: B, c: C, d: D): E;
}

/* A curried function of 0 to 5 parameters accepted */
export interface Curry5<A, B, C, D, E, F> {
  (): Curry5<A, B, C, D, E, F>;
  (a: A): Curry4<B, C, D, E, F>;
  (a: A, b: B): Curry3<C, D, E, F>;
  (a: A, b: B, c: C): Curry2<D, E, F>;
  (a: A, b: B, c: C, d: D): Curry1<E, F>;
  (a: A, b: B, c: C, d: D, e: E): F;
}
