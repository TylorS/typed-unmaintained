export type Equals = {
  <A>(a: A, b: A): boolean
  <A>(a: A): (b: A) => boolean
}
