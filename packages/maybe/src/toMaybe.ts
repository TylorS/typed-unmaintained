import { Maybe } from './Maybe'
import { Nothing } from './Nothing'

export function toMaybe<A>(value: A | void): Maybe<A> {
  return value === void 0 ? Nothing : Maybe.of<A>(value)
}
