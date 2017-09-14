import { List } from '../types'

export type Flatten = {
  <A>(list: List<A | List<A>>): List<A>
  <A>(list: List<A | List<A> | List<List<A>>>): List<A>
  <A>(list: List<A | List<A> | List<List<A>> | List<List<List<A>>>>): List<A>
  <A>(
    list: List<A | List<A> | List<List<A>> | List<List<List<A>>> | List<List<List<List<A>>>>>
  ): List<A>
  <A>(list: List<List<A>>): List<A>
  <A>(list: List<List<List<A>>>): List<A>
  <A>(list: List<List<List<List<A>>>>): List<A>
  <A>(list: List<List<List<List<List<A>>>>>): List<A>
  <A>(list: List<any>): List<A>
}
