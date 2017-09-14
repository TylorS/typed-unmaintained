import { List } from '@typed/list'
import { divide } from '../divide'
import { sum } from '../sum'

/**
 * Calculates the average of a list of numbers.
 * @name mean(numbers: List<number>): number
 */
export const mean = (numbers: List<number>) => divide(numbers.length, sum(numbers))
