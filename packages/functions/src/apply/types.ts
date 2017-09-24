// prettier-ignore
export type Apply = {
  <A>(list: ArrayLike<never>, f: () => A): A
  <A, B>(list: [A], f: (a: A) => B): B
  <A, B, C>(list: [A, B], f: (a: A, b: B) => C): C
  <A, B, C, D>(list: [A, B, C], f: (a: A, b: B, c: C) => D): D
  <A, B, C, D, E>(list: [A, B, C, D], f: (a: A, b: B, c: C, d: D) => E): E
  <A, B, C, D, E, F>(list: [A, B, C, D, E], f: (a: A, b: B, c: C, d: D, e: E) => F): F

  <A, B>(list: [A]): (f: (a: A) => B) => B
  <A>(list: [A]): <B>(f: (a: A) => B) => B

  <A, B, C>(list: [A, B]): (f: (a: A, b: B) => C) => C
  <A, B>(list: [A, B]): <C>(f: (a: A, b: B) => C) => C

  <A, B, C, D>(list: [A, B, C]): (f: (a: A, b: B, c: C) => D) => D
  <A, B, C>(list: [A, B, C]): <D>(f: (a: A, b: B, c: C) => D) => D

  <A, B, C, D, E>(list: [A, B, C, D]): (f: (a: A, b: B, c: C, d: D) => E) => E
  <A, B, C, D>(list: [A, B, C, D]): <E>(f: (a: A, b: B, c: C, d: D) => E) => E

  <A, B, C, D, E, F>(list: [A, B, C, D, E]): (f: (a: A, b: B, c: C, d: D, e: E) => F) => F

  (list: ArrayLike<never>): <A>(f: () => A) => A
  (list: ArrayLike<any>): <A>(f: (...args: Array<any>) => A) => A
  <A>(list: ArrayLike<any>, f: (...args: Array<any>) => A): A
  <A>(list: ArrayLike<any>): (f: (...args: Array<any>) => A) => A
}
