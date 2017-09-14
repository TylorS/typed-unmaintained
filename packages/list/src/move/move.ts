import { curry3, id, memoize } from '@typed/functions'
import { equals, greaterThan, greaterThanOrEqual, ifElse, lessThan, or } from '@typed/logic'

import { List } from '../types'

const findMovedIndex = memoize(__findMovedIndex)

/**
 * Moves a value from one index to another.
 * @name move<A>(from: Index, to: Index, list: List<A>): List<A>
 */
export const move: MoveArity3 = curry3(function move<A>(
  fromIndex: number,
  toIndex: number,
  list: List<A>
): List<A> {
  const length = list.length
  const newArray = Array(length)

  const outOfBounds = or(lessThan(0), greaterThanOrEqual(length))

  if (outOfBounds(toIndex) || outOfBounds(fromIndex)) return list

  for (let i = 0; i < length; ++i) newArray[i] = list[findMovedIndex(i, fromIndex, toIndex)]

  return newArray
})

const increment = (x: number) => x + 1
const decrement = (x: number) => x - 1

function __findMovedIndex(i: number, fromIndex: number, toIndex: number): number {
  if (equals(i, toIndex)) return fromIndex

  return ifElse(
    () => lessThan(toIndex, fromIndex),
    ifElse(between(fromIndex, toIndex), id, increment),
    ifElse(between(toIndex, fromIndex), id, decrement),
    i
  )
}

function between(min: number, max: number): (num: number) => boolean {
  return or(lessThan(min), greaterThan(max))
}

export type MoveArity3 = {
  <A>(fromIndex: number, toIndex: number, list: List<A>): List<A>
  <A>(fromIndex: number, toIndex: number): MoveArity1<A>
  <A>(fromIndex: number): MoveArity2<A>
}

export type MoveArity2<A> = {
  (toIndex: number, list: List<A>): List<A>
  (toIndex: number): MoveArity1<A>
}

export type MoveArity1<A> = {
  (list: List<A>): List<A>
}
