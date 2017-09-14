import {
  Curry10,
  Curry2,
  Curry3,
  Curry4,
  Curry5,
  Curry6,
  Curry7,
  Curry8,
  Curry9,
} from '@typed/functions'

export type InvokerFn = {
  <O, R>(arity: 0, method: keyof O): (obj: O) => R
  <O, A, R>(arity: 1, method: keyof O): Curry2<A, O, R>
  <O, A, B, R>(arity: 2, method: keyof O): Curry3<A, B, O, R>
  <O, A, B, C, R>(arity: 3, method: keyof O): Curry4<A, B, C, O, R>
  <O, A, B, C, D, R>(arity: 4, method: keyof O): Curry5<A, B, C, D, O, R>
  <O, A, B, C, D, E, R>(arity: 5, method: keyof O): Curry6<A, B, C, D, E, O, R>
  <O, A, B, C, D, E, F, R>(arity: 6, method: keyof O): Curry7<A, B, C, D, E, F, O, R>
  <O, A, B, C, D, E, F, G, R>(arity: 7, method: keyof O): Curry8<A, B, C, D, E, F, G, O, R>
  <O, A, B, C, D, E, F, G, H, R>(arity: 8, method: keyof O): Curry9<A, B, C, D, E, F, G, H, O, R>
  <O, A, B, C, D, E, F, G, H, I, R>(arity: 9, method: keyof O): Curry10<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    O,
    R
  >

  <Method extends string>(arity: 0, method: Method): <R>(obj: { [K in Method]: () => R }) => R
  <Method extends string>(arity: 1, method: Method): InvokerFnArity1<Method>
  <Method extends string>(arity: 2, method: Method): InvokerFnArity2<Method>
  <Method extends string>(arity: 3, method: Method): InvokerFnArity3<Method>
}

export type InvokerFnArity1<Method extends string> = {
  <A, R>(value: A, obj: { [K in Method]: (value: A) => R }): R
  <A>(value: A): <R>(obj: { [K in Method]: (value: A) => R }) => R
  <A, R>(value: A): (obj: { [K in Method]: (value: A) => R }) => R
}

export type InvokerFnArity2<Method extends string> = {
  <A, B, R>(a: A, b: B, obj: { [K in Method]: (a: A, b: B) => R }): R
  <A, B, R>(a: A, b: B): (obj: { [K in Method]: (a: A, b: B) => R }) => R

  <A, B>(a: A, b: B): <R>(obj: { [K in Method]: (a: A, b: B) => R }) => R
  <A, B, R>(a: A): (b: B) => (obj: { [K in Method]: (a: A, b: B) => R }) => R
  <A, B>(a: A): (b: B) => <R>(obj: { [K in Method]: (a: A, b: B) => R }) => R
  <A, B>(a: A): <R>(b: B, obj: { [K in Method]: (a: A, b: B) => R }) => R
  <A>(a: A): <B, R>(b: B, obj: { [K in Method]: (a: A, b: B) => R }) => R
}

export type InvokerFnArity3<Method extends string> = {
  // 4
  <A, B, C, R>(a: A, b: B, c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }): R

  // 3 1
  <A, B, C, R>(a: A, b: B, c: C): (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C>(a: A, b: B, c: C): <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 2 1 1
  <A, B, C, R>(a: A, b: B): (c: C) => (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C>(a: A, b: B): (c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A, b: B): <C, R>(c: C) => (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A, b: B): <C>(c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 2 2
  <A, B>(a: A, b: B): <C, R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C>(a: A, b: B): <R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C, R>(a: A, b: B): (c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 1 1 1 1
  <A>(a: A): <B>(b: B) => <C>(c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A>(a: A): <B>(b: B) => <C, R>(c: C) => (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A): (b: B) => <C>(c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C>(a: A): (b: B) => (c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C, R>(a: A): (b: B) => (c: C) => (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 1 2 1
  <A>(a: A): <B, C>(b: B, c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C>(a: A): (b: B, c: C) => <R>(obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B, C, R>(a: A): (b: B, c: C) => (obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 1 1 2
  <A>(a: A): <B>(b: B) => <C, R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A>(a: A): <B, C>(b: B) => <R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A>(a: A): <B, C, R>(b: B) => (c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A): (b: B) => <C, R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A): <C>(b: B) => <R>(c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A, B>(a: A): <C, R>(b: B) => (c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R

  // 1 3
  <A, B, C, R>(a: A): (b: B, c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
  <A>(a: A): <B, C, R>(b: B, c: C, obj: { [K in Method]: (a: A, b: B, c: C) => R }) => R
}
