# @typed/list -- 1.0.0

Immutable List for TypeScript

## Get it
```sh
yarn add @typed/list
# or
npm install --save @typed/list
```

## API Documentation

All functions are curried!

#### Reducer

<p>



</p>


```typescript

export type Reducer<A, B> = (seed: B, value: A, index: number) => B

export type ReduceArity3 = {
  <A, B>(f: Reducer<A, B>, seed: B, list: List<A>): B
  <A, B>(f: Reducer<A, B>, seed: B): ReduceArity1<A, B>
  <A, B>(f: Reducer<A, B>): ReduceArity2<A, B>
}

export type ReduceArity2<A, B> = {
  (seed: B, list: List<A>): B
  (seed: B): ReduceArity1<A, B>
}

export type ReduceArity1<A, B> = {
  (list: List<A>): B
}

```


#### RightReducer

<p>



</p>


```typescript

export type RightReducer<A, B> = (value: A, accumulator: B, index: number) => B

export type ReduceRightArity3 = {
  <A, B>(f: RightReducer<A, B>, seed: B, list: List<A>): B
  <A, B>(f: RightReducer<A, B>, seed: B): ReduceRightArity1<A, B>
  <A, B>(f: RightReducer<A, B>): ReduceRightArity2<A, B>
}

export interface ReduceRightArity2<A, B> {
  (seed: B, list: List<A>): B
  (seed: B): ReduceRightArity1<A, B>
}

export interface ReduceRightArity1<A, B> {
  (list: List<A>): B
}

```


#### append\<A\>(value: A, list: List\<A\>): List\<A\>

<p>

Appends a value to the end of a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const append: Append = curry2(__append)

export type Append = {
  <A>(value: A, list: List<A>): List<A>
  <A>(value: A): (list: List<A>) => List<A>
}

function __append<A>(value: A, list: List<A>): List<A> {
  const itemCount = length(list)
  const newList = Array(itemCount + 1)

  for (let i = 0; i < itemCount; ++i) newList[i] = list[i]

  newList[itemCount] = value

  return newList
}

```

</details>
<hr />


#### arrayFrom\<A\>(iterable: Iterable\<A\> | Iterator\<A\> | List\<A\>): Array\<A\>

<p>

Converts any `Iterable`, `Iterator` or `ArrayLike` to an `Array`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function arrayFrom<A>(iterable: Iterable<A> | Iterator<A> | List<A>): Array<A> {
  if (Array.isArray(iterable)) return iterable

  if (isIterator(iterable)) return Array.from(toIterable(iterable))

  return Array.from(iterable as Iterable<A>)
}

function isIterator<A>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}

function toIterable<A>(iterator: Iterator<A>): Iterable<A> {
  return {
    [Symbol.iterator]() {
      return iterator
    },
  }
}

```

</details>
<hr />


#### ascend\<A, B\>(f: (a: A) =\> B, a: A, b: A): ComparisonNumbers

<p>

Makes an ascending comparator function out of a function that returns a 
value that can be compared with \< and \>.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ascend: AscendArity3 = curry3(function ascend<A, B>(
  f: (a: A) => B,
  a: A,
  b: A
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) return -1

  if (aa > bb) return 1

  return 0
})

export type AscendArity3 = {
  <A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(f: (a: A) => B): AscendArity2<A>
  <A, B>(f: (a: A) => B, a: A): AscendArity1<A>
}

export type AscendArity2<A> = {
  (a: A, b: A): ComparisonNumbers
  (a: A): AscendArity1<A>
}

export type AscendArity1<A> = (b: A) => ComparisonNumbers

```

</details>
<hr />


#### concat\<A\>(list1: List\<A\>, list2: List\<B\>): List\<B\>

<p>

Returns the result of concatenating the given lists or strings.

</p>


<details>
<summary>See the code</summary>

```typescript

export const concat: Concat = curry2(function<A>(list1: List<A>, list2: List<A>): List<A> {
  const length1 = list1.length
  const length2 = list2.length
  const newList = Array(length1 + length2)

  for (let i = 0; i < length1; ++i) newList[i] = list1[i]

  for (let i = 0; i < length2; ++i) newList[i + length1] = list2[i]

  return newList
})

```

</details>
<hr />


#### contains\<A\>(value: A, list: List\<A\>): boolean

<p>

Returns true if a list contains a value, false otherwise.

</p>


<details>
<summary>See the code</summary>

```typescript

export const contains: Contains = curry2(__contains)

export type Contains = {
  <A>(value: A, list: List<A>): boolean
  <A>(value: A): (list: List<A>) => boolean
}

function __contains<A>(value: A, list: List<A>): boolean {
  return fromMaybe(false, map(() => true, indexOf(value, list)))
}

```

</details>
<hr />


#### descend\<A, B\>(f: (a: A) =\> B, a: A, b: A): ComparisonNumbers

<p>

Makes a descending comparator function out of a function that returns a 
value that can be compared with \< and \>.

</p>


<details>
<summary>See the code</summary>

```typescript

export const descend: Descend = curry3(function ascend<A, B>(
  f: (a: A) => B,
  a: A,
  b: A
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) return 1

  if (aa > bb) return -1

  return 0
})

export type Descend = {
  <A, B>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B>(f: (a: A) => B): (a: A) => (b: A) => ComparisonNumbers
  <A, B>(f: (a: A) => B): (a: A, b: A) => ComparisonNumbers
}

```

</details>
<hr />


#### drop\<A\>(quantity: number, list: List\<A\>): List\<A\>

<p>

Drops the first `n` items from a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const drop: Drop = curry2(__drop)

export type Drop = {
  <A>(quanity: number, list: List<A>): List<A>
  <A>(quanity: number): (list: List<A>) => List<A>
}

function __drop<A>(quanity: number, list: List<A>): List<A> {
  return slice(quanity, Nothing, list)
}

```

</details>
<hr />


#### dropLast\<A\>(quantity: number, list: List\<A\>): List\<A\>

<p>

Drops `n` number of items from the end of a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const dropLast: DropLast = curry2(__dropLast)

export type DropLast = {
  <A>(quanity: number, list: List<A>): List<A>
  <A>(quanity: number): (list: List<A>) => List<A>
}

function __dropLast<A>(quanity: number, list: List<A>): List<A> {
  return slice(0, Maybe.of(list.length - quanity), list)
}

```

</details>
<hr />


#### filter\<A\>(predicate: (value: A, index: number) =\> boolean, list: List\<A\>): List\<A\>

<p>

Takes a predicate and a "filterable", and returns a new filterable of the
same type containing the members of the given filterable which satisfy the
given predicate.
Dispatches to the filter method of the second argument, if present.

</p>


<details>
<summary>See the code</summary>

```typescript

export const filter: Filter = curry2(function filter<A>(
  predicate: (a: A, index: number) => boolean,
  list: List<A>
): List<A> {
  const length = list.length
  const newList = []

  for (let i = 0; i < length; ++i) if (predicate(list[i], i)) newList.push(list[i])

  return newList
})

```

</details>
<hr />


#### find\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<A\>

<p>

Find the value contained in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const find: Find = curry2(__find) as Find

export type Find = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<Readonly<A>>
  (predicate: (value: any) => boolean): <A>(list: List<A>) => Maybe<Readonly<A>>
}

const prop = <A>(list: List<A>) => (index: Index): A => list[index]

function __find<A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A> {
  return map(prop(list), findIndex(predicate, list))
}

```

</details>
<hr />


#### findIndex\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<Index\>

<p>

Find the index of a value in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const findIndex: FindIndex = curry2(__findIndex)

export type FindIndex = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<Index>
  (predicate: (value: any) => boolean): <A>(list: List<A>) => Maybe<Index>
}

function __findIndex<A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index> {
  const itemCount = length(list)

  for (let i = 0; i < itemCount; ++i) if (predicate(list[i])) return Maybe.of(i)

  return Nothing
}

```

</details>
<hr />


#### findLast\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<A\>

<p>

Find the last value contained in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const findLast: FindLast = curry2(__findLast)

export type FindLast = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A>
  <A>(predicate: (value: any) => boolean): (list: List<A>) => Maybe<A>
}

const propFlipped = <A>(list: List<A>) => (index: Index): A => list[index]

function __findLast<A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A> {
  return map(propFlipped(list), findLastIndex(predicate, list))
}

```

</details>
<hr />


#### findLastIndex\<A\>(predicate: Predicate\<A\>, list: List\<A\>): Maybe\<Index\>

<p>

Find the last index of a value in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const findLastIndex: FindLastIndex = curry2(__findLastIndex)

export type FindLastIndex = {
  <A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index>
  <A>(predicate: (value: A) => boolean): (list: List<A>) => Maybe<Index>
}

function __findLastIndex<A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index> {
  const itemCount = length(list)

  for (let i = itemCount - 1; i >= 0; --i) if (predicate(list[i])) return Maybe.of(i)

  return Nothing
}

```

</details>
<hr />


#### forEach\<A\>(f: (value: A, index: number) =\> any, list: List\<A\>): List\<A\>

<p>

Applies a function to each item in a `List`, returning the list after.

</p>


<details>
<summary>See the code</summary>

```typescript

export const forEach: ForEach = curry2(__forEach)

export type ForEach = {
  <A>(f: (value: A, index: number) => any, list: List<A>): List<A>
  <A>(f: (value: A, index: number) => any): (list: List<A>) => List<A>
}

function __forEach<A>(f: (value: A, index: number) => any, list: List<A>): List<A> {
  for (let i = 0; i < list.length; ++i) f(list[i], i)

  return list
}

```

</details>
<hr />


#### groupBy\<Keys extends string, A\>(f: Arity1\<A, Keys\>, list: List\<A\>): Readonly\<Record\<Keys, List\<A\>\>\>

<p>

Groups a list by keys returned by applying the provided function to each 
item.

</p>


<details>
<summary>See the code</summary>

```typescript

export const groupBy: GroupBy = curry2(__groupBy)

function __groupBy<Keys extends string, A>(
  f: (value: A) => Keys,
  list: List<A>
): Readonly<Record<Keys, List<A>>> {
  const itemCount = list.length
  const strMap = {} as Record<Keys, Array<A>>

  for (let i = 0; i < itemCount; ++i) {
    const value = list[i]
    const key = f(value)

    if (strMap[key]) strMap[key].push(value)
    else strMap[key] = [value]
  }

  return strMap
}

```

</details>
<hr />


#### head\<A\>(list: List\<A\>): Maybe\<A\>

<p>

Returns the first item of a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export function head<A>(list: List<A>): Maybe<A> {
  const { view } = lensIndex<A>(HEAD_INDEX)

  return view(list)
}

```

</details>
<hr />


#### indexOf\<A\>(value: A, list: List\<A\>): Maybe\<Index\>

<p>

Returns the index of a value in a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const indexOf: IndexOf = curry2(__indexOf)

function __indexOf<A>(value: A, list: List<A>): Maybe<Index> {
  return findIndex(equals(value), list)
}

```

</details>
<hr />


#### insert\<A\>(index: number, value: A, list: List\<A\>): List\<A\>

<p>

Inserts a value into a `List`. at a given index.

</p>


<details>
<summary>See the code</summary>

```typescript

export const insert: InsertArity3 = curry3(function insert<A>(
  index: number,
  value: A,
  list: List<A>
): List<A> {
  const length = list.length

  if (index < 0) return list

  if (length === 0) return [value]

  const newList = []
  let i = 0

  for (; i < index; ++i) newList[i] = list[i]

  newList[i++] = value

  for (; i <= length; ++i) newList[i] = list[i - 1]

  return newList
})

```

</details>
<hr />


#### isList\<A = any\>(x: any): x is List\<A\>

<p>

Returns true if a value is a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isList<A = any>(x: any): x is List<A> {
  if (Array.isArray(x)) return true
  if (!x || typeof x !== 'object' || typeof x === 'string') return false
  if (x.nodeType === 1) return !!x.length
  if (x.length === 0) return true
  if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  return false
}

```

</details>
<hr />


#### join(separator: string, list: List\<string\>): string

<p>

Takes a `List\<string\>` and concatenates them via with a defined
separator.

</p>


<details>
<summary>See the code</summary>

```typescript

export const join: Join = curry2(__join)

export type Join = {
  (separator: string, list: List<string>): string
  (separator: string): (list: List<string>) => string
}

function __join(separator: string, list: List<string>): string {
  const itemCount = list.length

  let str = ''

  if (itemCount === 0) return str

  str += list[0]

  if (itemCount === 1) return str

  for (let i = 1; i < itemCount; ++i) str += separator + list[i]

  return str
}

```

</details>
<hr />


#### last\<A\>(list: List\<A\>): Maybe\<A\>

<p>

Returns the last item in a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function last<A>(list: List<A>): Maybe<A> {
  const index = list.length - 1
  const { view } = lensIndex<A>(index)

  return view(list)
}

```

</details>
<hr />


#### lastIndexOf\<A\>(value: A, list: List\<A\>): Maybe\<Index\>

<p>

Finds the last index of a value in a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lastIndexOf: LastIndexOf = curry2(__lastIndexOf)

export type LastIndexOf = {
  <A>(value: A, list: List<A>): Maybe<Index>
  <A>(value: A): (list: List<A>) => Maybe<Index>
}

function __lastIndexOf<A>(value: A, list: List<A>): Maybe<Index> {
  return findLastIndex(equals(value), list)
}

```

</details>
<hr />


#### lensIndex\<A\>(index: number): Lens\<List\<A\>, A\>

<p>

Creates an index for a List.

</p>


<details>
<summary>See the code</summary>

```typescript

export function lensIndex<A>(index: Index): Lens<List<A>, A> {
  return lens((array: List<A>) => array[index], update(index))
}

```

</details>
<hr />


#### move\<A\>(from: Index, to: Index, list: List\<A\>): List\<A\>

<p>

Moves a value from one index to another.

</p>


<details>
<summary>See the code</summary>

```typescript

export const move: MoveArity3 = curry3(function move<A>(
  fromIndex: number,
  toIndex: number,
  list: List<A>
): List<A> {
  const length = list.length
  const newArray = Array(length)

  const outOfBounds = or(lessThan(0), greaterThanOrEqual(length))

  if (outOfBounds(toIndex) || outOfBounds(fromIndex)) return list

  for (let i = 0; i < length; ++i) newArray[i] = list[findMovedIndex(i, fromIndex, toIndex)]

  return newArray
})

const increment = (x: number) => x + 1
const decrement = (x: number) => x - 1

function __findMovedIndex(i: number, fromIndex: number, toIndex: number): number {
  if (equals(i, toIndex)) return fromIndex

  return ifElse(
    () => lessThan(toIndex, fromIndex),
    ifElse(between(fromIndex, toIndex), id, increment),
    ifElse(between(toIndex, fromIndex), id, decrement),
    i
  )
}

function between(min: number, max: number): (num: number) => boolean {
  return or(lessThan(min), greaterThan(max))
}

export type MoveArity3 = {
  <A>(fromIndex: number, toIndex: number, list: List<A>): List<A>
  <A>(fromIndex: number, toIndex: number): MoveArity1<A>
  <A>(fromIndex: number): MoveArity2<A>
}

export type MoveArity2<A> = {
  (toIndex: number, list: List<A>): List<A>
  (toIndex: number): MoveArity1<A>
}

export type MoveArity1<A> = {
  (list: List<A>): List<A>
}

```

</details>
<hr />


#### prepend\<A\>(value: A, list: List\<A\>): List\<A\>

<p>

Puts at value at the beginning of a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const prepend = curry2(__prepend)

function __prepend<A>(value: A, list: List<A>): List<A> {
  const itemCount = length(list) + 1
  const newList = Array(itemCount)

  newList[0] = value

  for (let i = 1; i < itemCount; ++i) newList[i] = list[i - 1]

  return newList
}

```

</details>
<hr />


#### range(from: number, to: number): List\<number\>

<p>

Creates a `List` that contains the numbers `from` to the 1 less than the
number `to`.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { range, equals } from '167'

const xs = range(1, 4)
const ys = [1, 2, 3]

equals(xs, ys) // true
```

</details>

<details>
<summary>See the code</summary>

```typescript

export const range: Range = curry2(__range)

export type Range = {
  (from: number, to: number): List<number>
  (from: number): (to: number) => List<number>
}

function __range(from: number, to: number): List<number> {
  const length = to - from
  const list = Array(length)

  for (let i = 0; i < length; ++i) list[i] = i + from

  return list
}

```

</details>
<hr />


#### reduce\<A, B\>(f: (accumulator: B, value: A) =\> B, seed: B, list: List\<A\>): B

<p>

Fold over the values in an array-like object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const reduce: ReduceArity3 = curry3(function reduce<A, B>(
  f: (acc: B, value: A, index: number) => B,
  seed: B,
  list: List<A>
) {
  const length = list.length
  let acc: B = seed

  for (let i = 0; i < length; ++i) acc = f(acc, list[i], i)

  return acc
})

```

</details>
<hr />


#### reduceRight\<A, B\>(f: (value: A, acc: B) =\> B, seed: B, list: List\<A\>): B

<p>

Fold over the values in a list from right-to-left.

</p>


<details>
<summary>See the code</summary>

```typescript

export const reduceRight: ReduceRightArity3 = curry3(function reduce<A, B>(
  f: RightReducer<A, B>,
  seed: B,
  list: List<A>
): B {
  const length = list.length
  let acc: B = seed

  for (let i = length - 1; i >= 0; --i) acc = f(list[i], acc, i)

  return acc
})

```

</details>
<hr />


#### remove\<A\>(index: number, amount: number, list: List\<A\>): List\<A\>

<p>

Removes items from a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const remove: RemoveArity3 = curry3(function remove<A>(
  index: number,
  amount: number,
  list: List<A>
): List<A> {
  const length = list.length

  if (isZero(amount) || isZero(length) || index >= length) return list
  if (isZero(index) && amount >= length) return []

  const newList = Array(length - Math.abs(index) - 1)

  for (let i = 0; i < index; ++i) newList[i] = list[i]

  for (let i = index + amount; i < length; ++i) newList[i - amount] = list[i]

  return newList
})

```

</details>
<hr />


#### reverse\<A\>(list: List\<A\>): List\<A\>

<p>

Reverses the order of values contained in a List.

</p>


<details>
<summary>See the code</summary>

```typescript

export const reverse: Reverse = function reverse<A>(list: List<A>): List<A> {
  const itemCount = length(list)
  const reversedList = Array(itemCount)

  for (let index = 0; index < itemCount; ++index) reversedList[index] = list[itemCount - 1 - index]

  return reversedList
}

```

</details>
<hr />


#### slice\<A\>(start: number, end: Maybe\<number\>, list: List\<A\>): List\<A\>

<p>

Slices a list between two indexes.

</p>


<details>
<summary>See the code</summary>

```typescript

export const slice: Slice = curry3(__slice)

export type Slice = {
  <A>(startIndex: number, endIndex: Maybe<number>, list: List<A>): List<A>
  <A>(startIndex: number, endIndex: Maybe<number>): (list: List<A>) => List<A>
  <A>(startIndex: number): {
    (endIndex: Maybe<number>, list: List<A>): List<A>
    (endIndex: Maybe<number>): (list: List<A>) => List<A>
  }
}

function __slice<A>(startIndex: number, endIndex: Maybe<number>, list: List<A>): List<A> {
  return arrayFrom(list).slice(startIndex, fromMaybe(void 0, endIndex))
}

```

</details>
<hr />


#### sort\<A\>(comparator: Comparator\<A\>, list: List\<A\>): List\<A\>

<p>

Sorts a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const sort: Sort = curry2(__sort)

export type Sort = {
  <A>(comparator: (a: A, b: A) => number, list: List<A>): List<A>
  <A>(comparator: (a: A, b: A) => number): (list: List<A>) => List<A>
}

function __sort<A>(comparator: (a: A, b: A) => number, list: List<A>): List<A> {
  return arrayFrom(list)
    .slice(0)
    .sort(comparator)
}

```

</details>
<hr />


#### splitAt\<A\>(index: Index, list: List\<A\>): [List\<A\>, List\<A\>]

<p>

Splits a `List` at a given index.

</p>


<details>
<summary>See the code</summary>

```typescript

export const splitAt: SplitAt = curry2(__splitAt)

export type SplitAt = {
  <A>(index: Index, list: List<A>): [List<A>, List<A>]
  <A>(index: Index): (list: List<A>) => [List<A>, List<A>]
}

function __splitAt<A>(index: Index, list: List<A>): [List<A>, List<A>] {
  return [slice(0, Maybe.of(index), list), slice(index, Maybe.of(list.length), list)]
}

```

</details>
<hr />


#### splitEvery\<A\>(amount: number, list: List\<A\>): List\<List\<A\>\>

<p>

Splits a list into a list of lists containing `n` number of values.

</p>


<details>
<summary>See the code</summary>

```typescript

export const splitEvery: SplitEvery = curry2(function splitEvery<A>(
  amount: number,
  list: List<A>
): List<List<A>> {
  if (amount <= 0) return [list]

  const result = []
  let i = 0

  while (i < list.length) result.push(slice(i, Maybe.of((i += amount)), list))

  return result
})

export type SplitEvery = {
  <A>(amount: number, list: List<A>): List<List<A>>
  <A>(amount: number): (list: List<A>) => List<List<A>>
}

```

</details>
<hr />


#### take\<A\>(n: number, list: List\<A\>): List\<A\>

<p>

Takes the first `n` items of a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const take: Take = curry2(<A>(n: number, list: List<A>) =>
  slice(0, Maybe.of(n < 0 ? Infinity : n), list)
)

export type Take = {
  <A>(n: number, list: List<A>): List<A>
  <A>(n: number): (list: List<A>) => List<A>
}

```

</details>
<hr />


#### takeLast\<A\>(n: number, list: List\<A\>): List\<A\>

<p>

Takes the last `n` values from a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const takeLast: TakeLast = curry2(<A>(n: number, list: List<A>) =>
  drop(n >= 0 ? list.length - n : 0, list)
)

export type TakeLast = {
  <A>(n: number, list: List<A>): List<A>
  <A>(n: number): (list: List<A>) => List<A>
}

```

</details>
<hr />


#### uniq\<A\>(list: List\<A\>): List\<A\>

<p>

Returns a `List` of unique values.

</p>


<details>
<summary>See the code</summary>

```typescript

export function uniq<A>(list: List<A>): List<A> {
  return arrayFrom(new Set<A>(arrayFrom(list)))
}

```

</details>
<hr />


#### update\<A\>(index: number, value: A, list: Li)

<p>

Updates the value of an array

</p>


<details>
<summary>See the code</summary>

```typescript

export const update: UpdateArity3 = curry3(function update<A>(
  index: number,
  value: A,
  list: List<A>
): List<A> {
  const length = list.length
  const newList = arrayFrom(list)

  if (length === 0 || index < 0 || index >= length) return newList

  newList[index] = value

  return newList
})

```

</details>
<hr />


#### without\<A\>(values: List\<A\>, list: List\<A\>): List\<A\>

<p>

Returns a list without the specified values.

</p>


<details>
<summary>See the code</summary>

```typescript

export const without: Without = curry2(__without)

export type Without = {
  <A>(values: List<A>, list: List<A>): List<A>
  <A>(values: List<A>): (list: List<A>) => List<A>
}

function __without<A>(values: List<A>, list: List<A>): List<A> {
  const set = new Set(arrayFrom(values))

  return filter(x => !set.has(x), list)
}

```

</details>
<hr />
