import { List, Predicate } from '../types'

export type Any = {
  <A>(predicate: Predicate<A>, list: List<A>): boolean
  <A>(predicate: Predicate<A>): (list: List<A>) => boolean
}
