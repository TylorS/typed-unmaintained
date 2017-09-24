import { List } from '../types'
import { UpdateArity3 } from './types'
import { arrayFrom } from '../arrayFrom'
import { curry3 } from '@typed/functions'

/**
 * Updates the value of an array
 * @name update<A>(index: number, value: A, list: Li)
 */
export const update: UpdateArity3 = curry3(function update<A>(
  index: number,
  value: A,
  list: List<A>
): Array<A> {
  const length = list.length
  const newList = arrayFrom(list)

  if (length === 0 || index < 0 || index >= length) return newList

  newList[index] = value

  return newList
})
