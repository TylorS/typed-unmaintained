import { Either } from '@typed/either'
import { List } from '../types'

// prettier-ignore
export type TryCatch = {
  <A, Err = any>(list: List<never>, f: () => A): Either<Err, A>
  <A, B, Err = any>(list: [A], f: (a: A) => B): Either<Err, B>
  <A, B, C, Err = any>(list: [A, B], f: (a: A, b: B) => C): Either<Err, C>
  <A, B, C, D, Err = any>(list: [A, B, C], f: (a: A, b: B, c: C) => D): Either<Err, D>
  <A, B, C, D, E, Err = any>(list: [A, B, C, D], f: (a: A, b: B, c: C, d: D) => E): Either<Err, E>
  <A, B, C, D, E, F, Err = any>(
    list: [A, B, C, D, E],
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ): Either<Err, F>

  <A, B, Err = any>(list: [A]): (f: (a: A) => B) => Either<Err, B>
  <A, Err = any>(list: [A]): <B>(f: (a: A) => B) => Either<Err, B>

  <A, B, C, Err = any>(list: [A, B]): (f: (a: A, b: B) => C) => Either<Err, C>
  <A, B, Err = any>(list: [A, B]): <C>(f: (a: A, b: B) => C) => Either<Err, C>

  <A, B, C, D, Err = any>(list: [A, B, C]): (f: (a: A, b: B, c: C) => D) => Either<Err, D>
  <A, B, C, Err = any>(list: [A, B, C]): <D>(f: (a: A, b: B, c: C) => D) => Either<Err, D>

  <A, B, C, D, E, Err = any>(list: [A, B, C, D]): (
    f: (a: A, b: B, c: C, d: D) => E
  ) => Either<Err, E>
  <A, B, C, D, Err = any>(list: [A, B, C, D]): <E>(
    f: (a: A, b: B, c: C, d: D) => E
  ) => Either<Err, E>

  <A, B, C, D, E, F, Err = any>(list: [A, B, C, D, E]): (
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ) => Either<Err, F>

  <A, Err = any>(list: List<any>, f: (...args: Array<any>) => A): Either<Err, A>
  <A, Err = any>(list: List<any>): (f: (...args: Array<any>) => A) => Either<Err, A>
  (list: List<any>): <A, Err = any>(f: (...args: Array<any>) => A) => Either<Err, A>
}
