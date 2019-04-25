import { Either } from '@typed/either'
import { List } from '../types'
import { TryCatch } from './types'
import { curry2 } from '@typed/functions'

/**
 * Given a list of arguments and a function, applies the function with
 * the given arguments.
 * @name tryCatch<A>(list: List<any>, fn: (...args: Array<any>) => A): Either<Error, A>
 */
export const tryCatch = curry2(function apply<A, Err = any>(
  list: List<any>,
  f: (...args: Array<any>) => A
): Either<Err, A> {
  switch (list.length) {
    case 0:
      return __catch(f)
    case 1:
      return __catch(() => f(list[0]))
    case 2:
      return __catch(() => f(list[0], list[1]))
    case 3:
      return __catch(() => f(list[0], list[1], list[2]))
    case 4:
      return __catch(() => f(list[0], list[1], list[2], list[3]))
    case 5:
      return __catch(() => f(list[0], list[1], list[2], list[3], list[4]))
    default:
      return __catch(() => f.apply(null, list))
  }
}) as TryCatch

function __catch<A, Err = any>(f: () => A): Either<Err, A> {
  try {
    return Either.of(f())
  } catch (error) {
    return Either.left(error)
  }
}
