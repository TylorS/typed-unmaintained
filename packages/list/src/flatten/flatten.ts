import { Flatten } from './types'
import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { isList } from '../isList'
import { reduce } from '../reduce'

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 */
export const flatten: Flatten = function flatten<A>(list: List<any>): Array<A> {
  return reduce<A | List<A>, Array<A>>(flattenReducer, [], list)
}

function flattenReducer<A>(acc: Array<A>, value: A | List<A>): Array<A> {
  if (isList(value)) acc.push(...arrayFrom(flatten(value)))
  else acc.push(value)

  return acc
}
