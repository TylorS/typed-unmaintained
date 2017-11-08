import { Just } from './Just'
import { Maybe } from './Maybe'
import { Nothing } from './Nothing'

export function toMaybe<A>(value: A | void): Maybe<A> {
  return value == null ? Nothing : Just.of<A>(value)
}
