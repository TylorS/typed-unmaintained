import { Filter } from './types'
import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Takes a predicate and a "filterable", and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate.
 * Dispatches to the filter method of the second argument, if present.
 * @name filter<A>(predicate: (value: A, index: number) => boolean, list: List<A>): Array<A>
 */
export const filter: Filter = curry2(function filter<A>(
  predicate: (a: A, index: number) => boolean,
  list: List<A>
): Array<A> {
  const length = list.length
  const newList = []

  for (let i = 0; i < length; ++i) if (predicate(list[i], i)) newList.push(list[i])

  return newList
})
