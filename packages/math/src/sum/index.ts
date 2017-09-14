import { List, reduce } from '@typed/list'

import { add } from '../add'

/**
 * Adds together all of the numbers in a list.
 * @name sum(number: List<number>): number
 */
export const sum: (numbers: List<number>) => number = reduce(add, 0)
