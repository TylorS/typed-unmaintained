import { Maybe } from './Maybe'
import { Nothing } from './Nothing'

export function toMaybe<A>(value: A | void): Maybe<A> {
  return value == null ? Nothing : Maybe.of<A>(value)
}
