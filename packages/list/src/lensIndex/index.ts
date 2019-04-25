import { Index, List } from '../types'
import { Lens, lens } from '@typed/lenses'

import { update } from '../update'

/**
 * Creates an index for a List.
 * @name lensIndex<A>(index: number): Lens<List<A>, A>
 */
export function lensIndex<A>(index: Index): Lens<List<A>, A> {
  return lens((array: List<A>): A => array[index], (value, list) => update(index, value, list))
}
