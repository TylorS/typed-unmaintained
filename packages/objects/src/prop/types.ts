import { StrMap } from '../types'

export type Prop = {
  <A>(prop: number, obj: ArrayLike<A>): A
  <A, K extends keyof A = keyof A>(prop: K, obj: A): A[K]

  <A>(prop: number): (obj: ArrayLike<A>) => A
  (prop: number): <A>(obj: ArrayLike<A>) => A
  <A, K extends keyof A>(prop: K): (obj: A) => A[K]

  <K extends string>(prop: K): <A>(obj: StrMap<K, A>) => A
}
