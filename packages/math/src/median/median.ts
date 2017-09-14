import { List, ascend, slice, sort } from '@typed/list'
import { Maybe, Nothing } from '@typed/maybe'

import { mean } from '../mean'

/**
 * Calculates the median of a `List`. If the calculated median is `NaN`
 * a `Nothing` is returned otherwise a `Just` containing the median will be returned.
 * @name median(numbers: List<number>): Maybe<number>
 */
export function median(numbers: List<number>): Maybe<number> {
  const length = numbers.length

  if (length === 0) return Nothing

  const width = 2 - length % 2
  const index = (length - width) / 2

  const medianNumbers = slice(index, Maybe.of(index + width), sort<number>(ascend(x => x), numbers))

  return numberToMaybe(mean(medianNumbers))
}

function numberToMaybe(num: number): Maybe<number> {
  return Number.isNaN(num) ? Nothing : Maybe.of(num)
}
