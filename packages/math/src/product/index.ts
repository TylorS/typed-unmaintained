import { List, reduce } from '@typed/list'

import { multiply } from '../multiply'

/**
 * Calculates the produce of a list of numbers.
 * @name produce(numbers: List<number>): number
 */
export const product: (numbers: List<number>) => number = reduce(multiply, 1)
