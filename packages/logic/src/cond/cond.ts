import { Cond, Conditional } from './types'
import { Maybe, Nothing } from '@typed/maybe'

import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Returns the value of an applied `Conditional`. If no `Conditional` is matched
 * then `Nothing` is returned.
 * @name cond<A, B>(conditionals: List<Condition<A, B>>, value: A): Maybe<B>
 */
export const cond: Cond = curry2(__cond)

function __cond<A, B>(conditionals: List<Conditional<A, B>>, value: A): Maybe<B> {
  const itemCount = conditionals.length

  for (let i = 0; i < itemCount; ++i) {
    const [predicate, f] = conditionals[i]

    if (predicate(value)) return Maybe.of(f(value))
  }

  return Nothing
}
