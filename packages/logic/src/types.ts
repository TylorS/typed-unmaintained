export type List<A> = {
  readonly [key: number]: A
  readonly length: number
}

export type Predicate<A> = (value: A) => boolean
