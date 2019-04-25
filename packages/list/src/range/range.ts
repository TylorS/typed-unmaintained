import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Creates a `List` that contains the numbers `from` to the 1 less than the
 * number `to`.
 * @name range(from: number, to: number): Array<number>
 * @example
 * import { range, equals } from '167'
 *
 * const xs = range(1, 4)
 * const ys = [1, 2, 3]
 *
 * equals(xs, ys) // true
 */
export const range: Range = curry2(__range)

export type Range = {
  (from: number, to: number): Array<number>
  (from: number): (to: number) => List<number>
}

function __range(from: number, to: number): Array<number> {
  const length = to - from
  const list = Array(length)

  for (let i = 0; i < length; ++i) list[i] = i + from

  return list
}
