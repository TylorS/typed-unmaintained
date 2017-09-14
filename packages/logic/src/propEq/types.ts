export type PropEq = {
  <K extends string, A, O extends Readonly<Record<K, A>>>(key: K, value: A, object: O): boolean
  <K extends string, A>(key: K, value: A): <O extends Readonly<Record<K, A>>>(object: O) => boolean
  <K extends string>(key: K): {
    <A, O extends Readonly<Record<K, A>>>(value: A, object: O): boolean
    <A>(value: A): <O extends Readonly<Record<K, A>>>(object: O) => boolean
  }
}
