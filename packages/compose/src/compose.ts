export type Arity1<A, B> = (a: A) => B;

export function compose<A, B>(f: Arity1<A, B>): Arity1<A, B>;
export function compose<A, B, C> (g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, C>;

/* tslint:disable:max-line-length */
export function compose<A, B, C, D> (h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, D>;
export function compose<A, B, C, D, E> (i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, E>;
export function compose<A, B, C, D, E, F> (j: Arity1<E, F>, i: Arity1<D, E>, h: Arity1<C, D>, g: Arity1<B, C>, f: Arity1<A, B>): Arity1<A, F>;
/* tslint:enable:max-line-length */

export function compose() {
  switch (arguments.length) {
    case 1: return _compose1(arguments[0]);
    case 2: return _compose2(arguments[0], arguments[1]);
    case 3: return _compose3(arguments[0], arguments[1], arguments[2]);
    case 4: return _compose4(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5: return _compose5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
  };
}

function _compose1<A, B>(f: Arity1<A, B>): Arity1<A, B> {
  return function compose1Fn (a: A): B {
    return f(a);
  };
}

function _compose2<A, B, C> (
  g: Arity1<B, C>,
  f: Arity1<A, B>): Arity1<A, C>
{
  return function compose2Fn (a: A): C {
    return g(f(a));
  };
}

function _compose3<A, B, C, D> (
  h: Arity1<C, D>,
  g: Arity1<B, C>,
  f: Arity1<A, B>): Arity1<A, D>
{
  return function compose3Fn (a: A): D {
    return h(g(f(a)));
  };
}

function _compose4<A, B, C, D, E> (
  i: Arity1<D, E>,
  h: Arity1<C, D>,
  g: Arity1<B, C>,
  f: Arity1<A, B>): Arity1<A, E>
{
  return function compose3Fn (a: A): E {
    return i(h(g(f(a))));
  };
}

function _compose5<A, B, C, D, E, F> (
  j: Arity1<E, F>,
  i: Arity1<D, E>,
  h: Arity1<C, D>,
  g: Arity1<B, C>,
  f: Arity1<A, B>): Arity1<A, F>
{
  return function compose5Fn (a: A): F {
    return j(i(h(g(f(a)))));
  };
}
