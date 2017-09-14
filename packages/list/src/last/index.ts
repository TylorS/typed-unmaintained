import { List } from '../'
import { Maybe } from '@typed/maybe'
import { lensIndex } from '../lensIndex'

/**
 * Returns the last item in a `List`.
 * @name last<A>(list: List<A>): Maybe<A>
 */
export function last<A>(list: List<A>): Maybe<A> {
  const index = list.length - 1
  const { view } = lensIndex<A>(index)

  return view(list)
}
