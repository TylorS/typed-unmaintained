# @typed/logic -- 2.0.0

Collection of functions to perform logic

## Get it
```sh
yarn add @typed/logic
# or
npm install --save @typed/logic
```

## API Documentation

All functions are curried!

#### Conditional

<p>



</p>


```typescript

export type Conditional<A, B> = [Predicate<A>, (value: A) => B]

```


#### all\<A\>(predicate: Predicate\<A\>, list: List\<A\>): boolean

<p>

Returns `true` if predicate function returns `true` for all values in a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const all = curry2(__all)

function __all<A>(predicate: Predicate<A>, list: List<A>): boolean {
  for (let i = 0; i < list.length; ++i) if (not(predicate(list[i]))) return false

  return true
}

```

</details>
<hr />


#### allPass\<A\>(predicates: List\<Predicate\<A\>\>, value: A): boolean

<p>

Returns true if all predicates return true.

</p>


<details>
<summary>See the code</summary>

```typescript

export const allPass: AllPass = curry2(__allPass)

export type AllPass = {
  <A>(predicates: List<Predicate<A>>, value: A): boolean
  <A>(predicates: List<Predicate<A>>): Predicate<A>
}

function __allPass<A>(predicates: List<Predicate<A>>, value: A): boolean {
  const predicateCount = predicates.length

  for (let i = 0; i < predicateCount; ++i) if (not(predicates[i](value))) return false

  return true
}

```

</details>
<hr />


#### and\<A\>(predicate1: Predicate\<A\>, predicate2: Predicate\<A\>, value: A): boolean

<p>

Applies `&&` between two predicate functions.

</p>


<details>
<summary>See the code</summary>

```typescript

export const and: And = curry3(__and)

export type And = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __and<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) && predicate2(value)
}

```

</details>
<hr />


#### any\<A\>(predicate: Predicate\<A\>, list: List\<A\>): boolean

<p>

Returns `true` if predicate function returns `true` for any value contained 
in a `List`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const any: Any = curry2(__any)

function __any<A>(predicate: Predicate<A>, list: List<A>): boolean {
  for (let i = 0; i < list.length; ++i) if (predicate(list[i])) return true

  return false
}

```

</details>
<hr />


#### anyPass\<A\>(predicates: List\<Predicate\<A\>\>, value: A): boolean

<p>

Returns true if any predicates returns true, false otherwise.

</p>


<details>
<summary>See the code</summary>

```typescript

export const anyPass: AnyPass = curry2(__anyPass)

export type AnyPass = {
  <A>(predicates: List<Predicate<A>>, value: A): boolean
  <A>(predicates: List<Predicate<A>>): (value: A) => boolean
}

function __anyPass<A>(predicates: List<Predicate<A>>, value: A): boolean {
  for (const predicate of Array.from(predicates)) if (predicate(value)) return true

  return false
}

```

</details>
<hr />


#### cond\<A, B\>(conditionals: List\<Condition\<A, B\>\>, value: A): Maybe\<B\>

<p>

Returns the value of an applied `Conditional`. If no `Conditional` is matched
then `Nothing` is returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export const cond: Cond = curry2(__cond)

function __cond<A, B>(conditionals: List<Conditional<A, B>>, value: A): Maybe<B> {
  const itemCount = conditionals.length

  for (let i = 0; i < itemCount; ++i) {
    const [predicate, f] = conditionals[i]

    if (predicate(value)) return Maybe.of(f(value))
  }

  return Nothing
}

```

</details>
<hr />


#### equals\<A\>(a: A, b: A): boolean

<p>

Checks if two values are equal.

</p>


<details>
<summary>See the code</summary>

```typescript

export const equals: Equals = curry2(function equals<A>(x: A, y: A): boolean {
  return isEqual(x, y, [], [])
})

function isEqual(a: any, b: any, stackA: Array<any>, stackB: Array<any>): boolean {
  if (a === b) return true

  if (typeOf(a) !== typeOf(b)) return false

  // tslint:disable-next-line
  if (a == null || b == null) return false

  switch (typeOf(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && functionName(a.constructor) === 'Promise')
        return a === b
      break
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && a.valueOf() === b.valueOf())) return false
      break
    case 'Date':
      if (a.valueOf() !== b.valueOf()) return false

      break
    case 'Error':
      return a.name === b.name && a.message === b.message
    case 'RegExp':
      if (
        !(
          a.source === b.source &&
          a.global === b.global &&
          a.ignoreCase === b.ignoreCase &&
          a.multiline === b.multiline &&
          a.sticky === b.sticky &&
          a.unicode === b.unicode
        )
      ) {
        return false
      }
      break
    case 'Map':
    case 'Set':
      if (!isEqual(Array.from(a.entries()), Array.from(b.entries()), stackA, stackB)) return false
      break
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break
    case 'ArrayBuffer':
      break
    default:
      // Values of other types are only equal if identical.
      return false
  }

  const keysA = Object.keys(a)

  if (keysA.length !== Object.keys(b).length) return false

  let idx = stackA.length - 1

  while (idx >= 0) {
    if (stackA[idx] === a) return stackB[idx] === b

    idx -= 1
  }

  stackA.push(a)
  stackB.push(b)
  idx = keysA.length - 1

  while (idx >= 0) {
    const key = keysA[idx]

    if (!(Object.prototype.hasOwnProperty.call(b, key) && isEqual(b[key], a[key], stackA, stackB)))
      return false

    idx -= 1
  }

  stackA.pop()
  stackB.pop()

  return true
}

```

</details>
<hr />


#### functionName(fn: Function): string

<p>

Returns the name of a function.

</p>


<details>
<summary>See the code</summary>

```typescript

export function functionName(fn: Function): string {
  if (fn.name) return fn.name

  const [, name] = String(fn).match(FUNCTION_NAME_REGEX) || DEFAULT_MATCH

  return name
}

```

</details>
<hr />


#### greaterThan\<A\>(right: A, left: A): boolean

<p>

Applies `\>` to 2 values. 

</p>


<details>
<summary>See the code</summary>

```typescript

export const greaterThan: GreaterThan = curry2(<A>(right: A, left: A) => left > right)

export type GreaterThan = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

```

</details>
<hr />


#### greaterThanOrEqual\<A\>(right: A, left: A): boolean

<p>

Applies `\>=` to 2 values.

</p>


<details>
<summary>See the code</summary>

```typescript

export const greaterThanOrEqual: GreaterThanOrEqual = curry2(
  <A>(right: A, left: A) => left >= right
)

export type GreaterThanOrEqual = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

```

</details>
<hr />


#### ifElse\<A, B\>(predicate: Predicate\<A\>, thenF: Arity1\<A, B\>, elseF: Arity1\<A, B\>, value: A): B

<p>

Function for handling if/Else statements.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ifElse: IfElseArity4 = curry4(__ifElse)

function __ifElse<A, B>(
  ifF: (value: A) => boolean,
  thenF: (value: A) => B,
  elseF: (value: A) => B,
  value: A
): B {
  return ifF(value) ? thenF(value) : elseF(value)
}

```

</details>
<hr />


#### isArray\<A = any\>(x: any): x is Array\<A\>

<p>

Returns true if given value is an Array.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isArray<A = any>(x: any): x is Array<A> {
  return Array.isArray(x)
}

```

</details>
<hr />


#### isIterable\<A\>(x: any): x is Iterable\<A\>

<p>

Returns true if a value is an Iterable.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isIterable<A>(x: any): x is Iterable<A> {
  return x && typeof x[Symbol.iterator] === 'function' && isIterator(x[Symbol.iterator]())
}

```

</details>
<hr />


#### isIterator\<A\>(x: any): x is Iterator\<A\>

<p>

Returns true if value is an iterator.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isIterator<A>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}

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


#### isMap\<A = any, B = any\>(x: any): x is Map\<A, B\>

<p>

Returns true if a value is a `Map`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isMap<A = any, B = any>(x: any): x is Map<A, B> {
  return (
    x && typeof (x as Map<A, B>).delete === 'function' && typeof (x as Map<A, B>).set === 'function'
  )
}

```

</details>
<hr />


#### isNull(x: any): x is null

<p>

Returns true if the value is null

</p>


<details>
<summary>See the code</summary>

```typescript

export function isNull(x: any): x is null {
  return x === null
}

```

</details>
<hr />


#### isNumber(x: any): x is number

<p>

Returns true if value is a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isNumber(x: any): x is number {
  return typeof x === 'number'
}

```

</details>
<hr />


#### isObject\<A extends object = Object\>(x: any): x is A

<p>

Returns true if a value is an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isObject<A extends object = Object>(x: any): x is A {
  return x && typeof x === 'object'
}

```

</details>
<hr />


#### isPromiseLike\<A = any\>(x: any): x is PromiseLike\<A\>

<p>

Returns true if a value is PromiseLike

</p>


<details>
<summary>See the code</summary>

```typescript

export function isPromiseLike<A = any>(x: any): x is PromiseLike<A> {
  return x && typeof x.then === 'function'
}

```

</details>
<hr />


#### isSet\<A = any\>(x: any): x is Set\<A\>

<p>

Returns true if a value is a Set.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isSet<A = any>(x: any): x is Set<A> {
  return x && typeof (x as Set<A>).delete === 'function' && typeof (x as Set<A>).add === 'function'
}

```

</details>
<hr />


#### isUndefined(x: any): x is undefined

<p>

Returns true if the value is undefined.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isUndefined(x: any): x is undefined {
  return x === void 0
}

```

</details>
<hr />


#### lessThan\<A\>(right: A, left: A): boolean

<p>

Compares two values using `\<`

</p>


<details>
<summary>See the code</summary>

```typescript

export const lessThan: LessThan = curry2(<A>(right: A, left: A) => left < right)

export type LessThan = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

```

</details>
<hr />


#### lessThanOrEqual\<A\>(right: A, left: A): boolean

<p>

Compares 2 values using `\<=`

</p>


<details>
<summary>See the code</summary>

```typescript

export const lessThanOrEqual: LessThanOrEqual = curry2(<A>(right: A, left: A) => left <= right)

export type LessThanOrEqual = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

```

</details>
<hr />


#### not\<A\>(a: A): boolean

<p>

Applies `!` to a value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function not<A>(x: A): boolean {
  return !x
}

```

</details>
<hr />


#### or\<A\>(predicate1: Predicate\<A\>, predicate2: Predicate\<A\>, value: A): boolean

<p>

Applies `||` between two predicate functions.

</p>


<details>
<summary>See the code</summary>

```typescript

export const or: Or = curry3(__or)

export type Or = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __or<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) || predicate2(value)
}

```

</details>
<hr />


#### propEq\<O, K extends keyof O\>(key: K, value: O[K], obj: O): boolean

<p>

Returns `true` if a given object's key value is equal to the given `value`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const propEq: PropEq = curry3(function<O, K extends keyof O>(
  key: K,
  value: O[K],
  obj: O
): boolean {
  return equals(obj[key], value)
})

```

</details>
<hr />


#### tryCatch\<A\>(list: List\<any\>, fn: (...args: Array\<any\>) =\> A): Either\<Error, A\>

<p>

Given a list of arguments and a function, applies the function with 
the given arguments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const tryCatch: TryCatch = curry2(function apply<A, Err = any>(
  list: List<any>,
  f: (...args: Array<any>) => A
): Either<Err, A> {
  switch (list.length) {
    case 0:
      return __catch(f)
    case 1:
      return __catch(() => f(list[0]))
    case 2:
      return __catch(() => f(list[0], list[1]))
    case 3:
      return __catch(() => f(list[0], list[1], list[2]))
    case 4:
      return __catch(() => f(list[0], list[1], list[2], list[3]))
    case 5:
      return __catch(() => f(list[0], list[1], list[2], list[3], list[4]))
    default:
      return __catch(() => f.apply(null, list))
  }
})

function __catch<A, Err = any>(f: () => A): Either<Err, A> {
  try {
    return Either.of(f())
  } catch (error) {
    return Either.left(error)
  }
}

```

</details>
<hr />


#### typeOf(value: any): string

<p>

Returns the type of a value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function typeOf(value: string): 'String'
export function typeOf(value: number): 'Number'
export function typeOf(value: null): 'Null'
export function typeOf(value: undefined): 'Undefined'
export function typeOf(value: undefined): 'Undefined'
export function typeOf(value: any): string
export function typeOf(value: any): string {
  if (value === null) return 'Null'

  if (value === void 0) return `Undefined`

  return Object.prototype.toString.call(value).slice(8, -1)
}

```

</details>
<hr />
