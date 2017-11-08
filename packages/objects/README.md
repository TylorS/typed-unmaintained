# @typed/objects -- 2.3.0

Well-typed functions for objects

## Get it
```sh
yarn add @typed/objects
# or
npm install --save @typed/objects
```

## API Documentation

All functions are curried!

#### StrMap

<p>

A StrMap type. Works as a readonly object.

</p>


```typescript

export type StrMap<K extends string, V> = Readonly<Record<K, V>>

```


#### clone\<A\>(obj: A): A

<p>

Returns a deep clone of a value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function clone<A>(obj: A): A {
  return _clone(obj, [], [], true)
}

function _clone(value: any, refFrom: Array<any>, refTo: Array<any>, deep: boolean): any {
  function copy(copiedValue: any) {
    const length = refFrom.length
    let i = 0

    for (; i < length; ++i) if (value === refFrom[i]) return refTo[i]

    refFrom[i + 1] = value
    refTo[i + 1] = copiedValue

    for (const key in value) {
      if (!value.hasOwnProperty(key)) continue

      copiedValue[key] = deep ? _clone(value[key] as any, refFrom, refTo, true) : value[key]
    }

    return copiedValue
  }

  switch (typeOf(value)) {
    case 'Object':
      return copy({})
    case 'Array':
      return copy([])
    case 'Date':
      return new Date(value.valueOf())
    case 'RegExp':
      return cloneRegexp(value)
    default:
      return value
  }
}

function cloneRegexp(pattern: RegExp): RegExp {
  return new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
  )
}

```

</details>
<hr />


#### hasOwnProperty\<A\>(key: PropertyKey, object: A): boolean

<p>

Given a property key and an object returns true if that object has a property
at the given property key.

</p>


<details>
<summary>See the code</summary>

```typescript

export const hasOwnProperty: HasOwnProperty = invoker<Object, PropertyKey, boolean>(
  1,
  'hasOwnProperty'
)

export type HasOwnProperty = {
  <O extends object>(key: PropertyKey, object: O): boolean
  <O extends object>(key: PropertyKey): (object: O) => boolean
  (key: PropertyKey): <O>(object: O) => boolean
}

```

</details>
<hr />


#### invoker\<O\>(arity: number, method: keyof O): (...args, object: O) =\> A

<p>

Turns a named method with a specified arity into a function that can be 
called directly supplied with arguments and a target object. The returned 
function is curried and accepts arity + 1 parameters where the final 
parameter is the target object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const invoker: InvokerFn = (curry2(<O, R>(arity: number, method: keyof O) =>
  curryN((arity + 1) as any, function(): R {
    const target = arguments[arity]

    return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity))
  })
) as any) as InvokerFn

```

</details>
<hr />


#### isEmpty\<A\>(obj: A): boolean

<p>

Returns true if an object or array is empty.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { isEmpty } from '167'

isEmpty({}) // true
isEmpty({ a: 1, b: 2 }) // false
isEmpty([]) // true
isEmpty([ 1, 2, 3 ]) // false
isEmpty(void 0) // false
isEmpty(null) // false
```

</details>

<details>
<summary>See the code</summary>

```typescript

export const isEmpty: <A>(object: A) => boolean = ifElse(
  x => x === null || x === void 0,
  always(false),
  pipe(keys, length, equals(0))
)

```

</details>
<hr />


#### keys\<A\>(obj: A): Array\<keyof A\>

<p>

Returns the keys of an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const keys = <A>(obj: A): Array<keyof A> => (Object.keys(obj) as any) as Array<keyof A>

```

</details>
<hr />


#### length\<A\>(obj: { length: A }): A

<p>

Returns the value of the property `length`

</p>


<details>
<summary>See the code</summary>

```typescript

export const length = prop('length')

```

</details>
<hr />


#### lensPath\<A, B\>(path: Array\<string\>): Lens\<A, B\>

<p>

Given a path to a value it returns a Lens that operates on that value.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lensPath: LensPath = function(path: ArrayLike<string>): Lens<any, any> {
  return apply(Array.from(path).map(lensProp), pipeLenses)
}

```

</details>
<hr />


#### lensProp\<A, K extends keyof A\>(key: K): Lens\<A, A[K]\>

<p>

Creates a lens that operates on an object's property.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lensProp = <A, K extends keyof A = keyof A>(key: K): Lens<A, A[K]> =>
  lens(prop(key), set(key))

```

</details>
<hr />


#### path\<A, B\>(path: List\<string\>, obj: A): Maybe\<B\>

<p>

Given a path to a value and an object it returns the values contained
at that path.

</p>


<details>
<summary>See the code</summary>

```typescript

export const path: Path = curry2(function(path: ArrayLike<string>, obj: any): any {
  return lensPath<any, any>(path).view(obj)
})

```

</details>
<hr />


#### prop\<A, K extends keyof A = K\>(key: K, obj: A): A[K]

<p>

Returns the value of a property from an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const prop: Prop = curry2(<A, K extends keyof A>(key: K, obj: A): A[K] => obj[key])

```

</details>
<hr />


#### set\<Key extends string, A, O extends Record\<Key, A\>\>(key: Key, value: A, obj: O): O

<p>

Sets the property on an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const set: SetArity3 = curry3(function __set<
  Key extends string,
  A,
  O extends { readonly: { [K in Key]: A } }
>(key: Key, value: A, obj: O): O {
  const clonedObj = clone(obj)
  ;(clonedObj as any)[key] = value

  return clonedObj
})

export type SetArity3 = {
  <A, O extends { readonly [key: number]: A }>(key: number, value: A, obj: O): O
  <Key extends string, A, O extends Readonly<Record<Key, A>>>(key: Key, value: A, obj: O): O

  <A>(key: number, value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <Key extends string, A>(key: Key, value: A): SetArity1<Key, A>

  (key: number): SetArity2Number
  <Key extends string>(key: Key): SetArity2<Key>
}

export type SetArity2Number = {
  <A, O extends { readonly [key: number]: A }>(value: A, obj: O): O
  <A>(value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <A, O extends { readonly [key: number]: A }>(value: A): (obj: O) => O
}

export type SetArity2<Key extends string> = {
  <A, O extends Readonly<Record<Key, A>>>(value: A, obj: O): O
  <A>(value: A): SetArity1<Key, A>
}

export type SetArity1<Key extends string, A> = {
  <O extends Readonly<Record<Key, A>>>(obj: O): O
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


#### values\<A\>(obj: A): Array\<A[keyof A]\>

<p>

Returns the values of an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const values = <A>(obj: A): Array<A[keyof A]> =>
  Object.keys(obj).map(key => obj[key as keyof A])

```

</details>
<hr />
