import { Maybe } from './Maybe'
import { Nothing } from './Nothing'

export function toMaybe<A>(value: A | null | void): Maybe<A> {
  return value === void 0 || value === null ? Nothing : Maybe.of<A>(value)
}
