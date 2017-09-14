import { List } from '../types'
import { arrayFrom } from '../arrayFrom'

/**
 * Returns a `List` of unique values.
 * @name uniq<A>(list: List<A>): List<A>
 */
export function uniq<A>(list: List<A>): List<A> {
  return arrayFrom(new Set<A>(arrayFrom(list)))
}
