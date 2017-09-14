import { Index, List } from '../types'

import { Maybe } from '@typed/maybe'

export type IndexOf = {
  <A>(value: A, list: List<A>): Maybe<Index>
  <A>(value: A): (list: List<A>) => Maybe<Index>
}
