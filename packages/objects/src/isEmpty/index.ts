import { always, pipe } from '@typed/functions'
import { equals, ifElse } from '@typed/logic'

import { keys } from '../keys'
import { length } from '../length'

/**
 * Returns true if an object or array is empty.
 * @name isEmpty<A>(obj: A): boolean
 * @example
 * import { isEmpty } from '167'
 *
 * isEmpty({}) // true
 * isEmpty({ a: 1, b: 2 }) // false
 * isEmpty([]) // true
 * isEmpty([ 1, 2, 3 ]) // false
 * isEmpty(void 0) // false
 * isEmpty(null) // false
 */
export const isEmpty: <A>(object: A) => boolean = ifElse(
  x => x === null || x === void 0,
  always(false),
  pipe(
    keys,
    length,
    equals(0)
  )
)
