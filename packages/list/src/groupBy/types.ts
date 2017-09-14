import { List } from '../types'

export type GroupBy = {
  <Keys extends string, Value>(f: (value: Value) => Keys, list: List<Value>): Readonly<
    Record<Keys, Value>
  >
  <Keys extends string, Value>(f: (value: Value) => Keys): (
    list: List<Value>
  ) => Readonly<Record<Keys, Value>>
}
