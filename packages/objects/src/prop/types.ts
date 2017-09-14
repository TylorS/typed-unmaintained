import { List, StrMap } from '@typed/core'

export type Prop = {
  <A>(prop: number, obj: List<A>): A
  <A, K extends keyof A = keyof A>(prop: K, obj: A): A[K]

  <A>(prop: number): (obj: List<A>) => A
  (prop: number): <A>(obj: List<A>) => A
  <A, K extends keyof A>(prop: K): (obj: A) => A[K]

  <K extends string>(prop: K): <A>(obj: StrMap<K, A>) => A
}
