import { Arity1 } from '@typed/core'
import { Either } from '../Either'

export type Unpack = {
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>): (either: Either<A, B>) => C
  <A, B, C>(f: Arity1<A, C>): UnpackArity2A<A, B, C>
  <A, C>(f: Arity1<A, C>): UnpackArity2B<A, C>
}

export type UnpackArity2A<A, B, C> = {
  (g: Arity1<B, C>, either: Either<A, B>): C
  (g: Arity1<B, C>): (either: Either<A, B>) => C
}

export type UnpackArity2B<A, C> = {
  <B>(g: Arity1<B, C>, either: Either<A, B>): C
  <B>(g: Arity1<B, C>): (either: Either<A, B>) => C
}
