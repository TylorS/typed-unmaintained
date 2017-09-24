import { List } from '../types'

export type Concat = {
  <A>(list1: List<A>, list2: List<A>): Array<A>
  <A>(list1: List<A>): (list2: List<A>) => Array<A>
}
