import { List } from '../types'

export type InsertArity3 = {
  <A>(index: number, value: A, list: List<A>): List<A>
  <A>(index: number, value: A): InsertArity1<A>
  (index: number): InsertArity2
}

export type InsertArity2 = {
  <A>(value: A, list: List<A>): List<A>
  <A>(value: A): InsertArity1<A>
}

export type InsertArity1<A> = {
  (list: List<A>): List<A>
}
