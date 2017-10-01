# @typed/prelude -- 4.0.0

The TypeScript standard library

## Get it
```sh
yarn add @typed/prelude
# or
npm install --save @typed/prelude
```

## API Documentation

All functions are curried!

#### 

<p>

Re-exported types and functions. Please see their respective documentation!

</p>


```typescript

export {
  unpack,
  Either,
  Left,
  Right,
  isLeft,
  isRight,
  fromLeft,
  fromRight,
  mapLeft,
  chainLeft,
} from '@typed/either'
export {
  __,
  always,
  apply,
  compose,
  curry,
  curry2,
  curry3,
  curry4,
  curry5,
  curryN,
  flip,
  id,
  memoize,
  partial,
  pipe,
} from '@typed/functions'
export { composeLenses, lens, Lens, pipeLenses, updateAt, view } from '@typed/lenses'
export {
  append,
  arrayFrom,
  ascend,
  concat,
  contains,
  descend,
  drop,
  dropLast,
  endsWith,
  filter,
  find,
  findIndex,
  findLast,
  findLastIndex,
  flatten,
  forEach,
  groupBy,
  head,
  includes,
  indexOf,
  insert,
  isList,
  join,
  last,
  lastIndexOf,
  lensIndex,
  move,
  prepend,
  range,
  reduce,
  reduceRight,
  remove,
  reverse,
  slice,
  sort,
  splitAt,
  splitEvery,
  startsWith,
  take,
  takeLast,
  uniq,
  update,
  without,
} from '@typed/list'
export {
  all,
  allPass,
  and,
  any,
  anyPass,
  cond,
  equals,
  greaterThan,
  greaterThanOrEqual,
  ifElse,
  isArray,
  isIterable,
  isIterator,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromiseLike,
  isSet,
  isUndefined,
  lessThan,
  lessThanOrEqual,
  not,
  or,
  propEq,
  tryCatch,
} from '@typed/logic'
export {
  add,
  decrement,
  divide,
  increment,
  mean,
  median,
  modulo,
  multiply,
  negate,
  pow,
  product,
  subtract,
  sum,
} from '@typed/math'
export {
  fromJust,
  fromMaybe,
  isJust,
  isNothing,
  Just,
  Nothing,
  Maybe,
  toMaybe,
  combine,
  combineArray,
} from '@typed/maybe'
export {
  clone,
  hasOwnProperty,
  invoker,
  isEmpty,
  keys,
  length,
  lensPath,
  lensProp,
  path,
  prop,
  set,
  values,
} from '@typed/objects'
export { split, trim, toLowerCase, toUpperCase, substr, substring } from '@typed/strings'

```


#### ap\<A, B\>(fn: List\<Arity1\<A, B\>\>, values: List\<A\>): Array\<B\>

<p>

Apply the function contained in an Applicative to the values contained
in another Applicative. Works with all data structures supported by `chain` and 
`map`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: Ap = curry2(__ap)

function __ap<A, B>(fn: List<Arity1<A, B>>, value: List<A>): Array<B> {
  return chain((f: Arity1<A, B>) => map(f, value), fn)
}

export type Ap = {
  <A, B>(fn: List<Arity1<A, B>>, list: List<A>): Array<B>
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>

  <A, B>(fn: List<Arity1<A, B>>): (list: List<A>) => Array<B>
  <A, B>(fn: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### chain\<A, B\>(f: (value: A) =\> List\<B\>, list: List\<A\>): Array\<B\>

<p>

Creates a new `Monad` from the value contained in another.
Works with `Maybe`, `Either`, `PromiseLike` and `List` data 
structures.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: Chain = curry2<any, any, any>(function(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeChain(f, list)
  if (isLeft(list) || isRight(list)) return eitherChain(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return listChain(f, list)
})

export type Chain = {
  <A, B>(f: (value: A, index: number) => List<B>, list: List<A>): Array<B>

  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>

  <A, B>(f: (value: A, index: number) => List<B>): (list: List<A>) => Array<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(f: (value: A) => PromiseLike<B>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(f: (value: A) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### map\<A, B\>(f: (value: A, index: number) =\> B, list: List\<A\>): Array\<B\>

<p>

Map over the value contained in a data structure.
Works for `List`, `Maybe`, `Either`, and `PromiseLike` data strctures.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: Map = curry2<any, any, any>(function map(f: (value: any) => any, list: any): any {
  if (isJust(list) || isNothing(list)) return maybeMap(f, list)
  if (isLeft(list) || isRight(list)) return eitherMap(f, list)
  if (isPromiseLike(list)) return Promise.resolve(list.then(f))

  return listMap(f, list)
})

export type Map = {
  <A, B>(f: (value: A, index: number) => B, list: List<A>): Array<B>
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>

  <A, B>(f: (value: A, index: number) => B): MapArity1<A, B>
}

export type MapArity1<A, B> = {
  (list: List<A>): Array<B>
  (maybe: Maybe<A>): Maybe<B>
  (promise: Promise<A>): Promise<B>
  <C>(either: Either<C, A>): Either<C, B>
}

```

</details>
<hr />
