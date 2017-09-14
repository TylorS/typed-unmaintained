import { Index, List } from '../types'

import { Maybe } from '@typed/maybe'
import { lensIndex } from '../lensIndex'

const HEAD_INDEX: Index = 0

/**
 * Returns the first item of a list.
 * @name head<A>(list: List<A>): Maybe<A>
 */
export function head<A>(list: List<A>): Maybe<A> {
  const { view } = lensIndex<A>(HEAD_INDEX)

  return view(list)
}
