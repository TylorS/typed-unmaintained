/**
 * Returns the value passed in
 * @name id<A>(value: A): A
 */
export const id: Id = <A>(value: A): A => value

export type Id = {
  <A>(value: A, ...args: Array<any>): A
}
