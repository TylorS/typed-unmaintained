# @typed/maybe -- 4.1.0

Well-typed Maybe data structure

## Get it
```sh
yarn add @typed/maybe
# or
npm install --save @typed/maybe
```

## API Documentation

All functions are curried!

#### Just

<p>

A JSON-serializable Just data-structure

</p>


```typescript

export interface Just<A> {
  readonly '@typed/Just': A
}

```


#### Just.of\<A\>(value: A): Just\<A\>

<p>

Creates a Just given a value. 

</p>


<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Just<A> {
  return { '@typed/Just': value }
}
}

```

</details>
<hr />


#### Maybe.of\<A\>(value: A): Maybe\<A\>

<p>

Creates a Maybe containg a value

</p>


<details>
<summary>See the code</summary>

```typescript

export const of: <A>(value: A) => Maybe<A> = Just.of
}

```

</details>
<hr />


#### Nothing

<p>

The Nothing type, used in place of nulls or undefined.

</p>


```typescript

export interface Nothing {
  readonly '@typed/Nothing': true
}
export const Nothing: Nothing = { '@typed/Nothing': true }

```


#### ap\<A, B\>(fn: Maybe\<(value: A) =\> B\>, value: Maybe\<A\>): Maybe\<B\>

<p>

Applies the function contained in a `Maybe` to the value contained in a 
second `Maybe`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: MaybeAp = curry2(__ap)

function __ap<A, B>(fn: Maybe<(value: A) => B>, maybe: Maybe<A>): Maybe<B> {
  return chain(f => map(f, maybe), fn)
}

export interface MaybeAp {
  <A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (value: Maybe<A>) => Maybe<B>
}

```

</details>
<hr />


#### chain\<A, B\>(f: (value: A) =\> Maybe\<B\>, maybe: Maybe\<A\>): Maybe\<B\>

<p>

Maps a `Maybe` to another `Maybe`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: MaybeChain = curry2(__chain)

function __chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B> {
  return isNothing(maybe) ? maybe : f(fromJust(maybe))
}

export interface MaybeChain {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}

```

</details>
<hr />


#### combine\<A, B, C\>(f: (a: A, b: B) =\> C, a: Maybe\<A\>, b: Maybe\<B\>): Maybe\<C\>

<p>

Applies a function with the values contained in 2 `Maybes` if both are 
`Just`s. If either `Maybe`s are `Nothing` then `Nothing` is returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export const combine: Combine = curry3(__combine)

export type Combine = {
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>

  <A, B, C>(f: (valueA: A, valueB: B) => C): {
    (maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
    (maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>
  }
}

function __combine<A, B, C>(
  f: (valueA: A, valueB: B) => C,
  maybeA: Maybe<A>,
  maybeB: Maybe<B>
): Maybe<C> {
  return combineArray(f, [maybeA, maybeB])
}

```

</details>
<hr />


#### combineArray\<R\>(f: (...values: Array\<any\>) =\> R, maybes: ReadonlyArray\<Maybe\<any\>\>): R

<p>

Applies a function with all of the values contained in an array of `Maybe`s.
If *any* of the `Maybe`s are `Nothing`s then `Nothing` is returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export const combineArray: CombineArray = curry2(__combineArray)

function __combineArray<R>(
  f: (...values: Array<any>) => R,
  maybes: ReadonlyArray<Maybe<any>>
): Maybe<R> {
  const containsNothing = maybes.some(isNothing)

  return containsNothing
    ? Nothing
    : Just.of<R>(f(...(maybes as ReadonlyArray<Just<any>>).map(fromJust)))
}

export type CombineArray = {
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybes: [Maybe<A>, Maybe<B>]): Maybe<C>
  <A, B, C, D>(
    f: (valueA: A, valueB: B, valueC: C) => D,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>]
  ): Maybe<D>
  <A, B, C, D, E>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D) => E,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]
  ): Maybe<E>
  <A, B, C, D, E, F>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E) => F,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]
  ): Maybe<F>
  <A, B, C, D, E, F, G>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E, valueF: F) => G,
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]
  ): Maybe<G>

  <A, B, C>(f: (valueA: A, valueB: B) => C): (maybes: [Maybe<A>, Maybe<B>]) => Maybe<C>
  <A, B, C, D>(f: (valueA: A, valueB: B, valueC: C) => D): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>]
  ) => Maybe<D>
  <A, B, C, D, E>(f: (valueA: A, valueB: B, valueC: C, valueD: D) => E): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]
  ) => Maybe<E>
  <A, B, C, D, E, F>(f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E) => F): (
    maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]
  ) => Maybe<F>
  <A, B, C, D, E, F, G>(
    f: (valueA: A, valueB: B, valueC: C, valueD: D, valueE: E, valueF: F) => G
  ): (maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]) => Maybe<G>

  (f: ArrayConstructor): {
    <A, B>(maybes: [Maybe<A>, Maybe<B>]): Maybe<[A, B]>
    <A, B, C>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>]): Maybe<[A, B, C]>
    <A, B, C, D>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>]): Maybe<[A, B, C, D]>
    <A, B, C, D, E>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>]): Maybe<
      [A, B, C, D, E]
    >
    <A, B, C, D, E, F>(maybes: [Maybe<A>, Maybe<B>, Maybe<C>, Maybe<D>, Maybe<E>, Maybe<F>]): Maybe<
      [A, B, C, D, E, F]
    >
  }

  <R>(f: (...values: Array<any>) => R, maybes: ReadonlyArray<Maybe<any>>): Maybe<R>
  <R>(f: (...values: Array<any>) => R): (maybes: ReadonlyArray<Maybe<any>>) => Maybe<R>
}

```

</details>
<hr />


#### fromJust\<A\>(just: Just\<A\>): A

<p>

Extract the value contained in a Just

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { fromJust, Just } from '@typed/maybe'

const value = fromJust(Just.of(1))
console.log(value) // logs '1'
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function fromJust<A>(just: Just<A>): A {
  return just['@typed/Just']
}

```

</details>
<hr />


#### fromMaybe\<A\>(defaultValue: A, maybe: Maybe\<A\>): A

<p>

Given a default value and a Maybe returns the default value if the Maybe is a 
Nothing or the value contained in a Just.

</p>


<details>
<summary>See the code</summary>

```typescript

export const fromMaybe: FromMaybe = curry2(__fromMaybe)

function __fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A {
  return isJust(maybe) ? fromJust(maybe) : defaultValue
}

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}

```

</details>
<hr />


#### isJust\<A\>(maybe: Maybe\<A\>): maybe is Just\<A\>

<p>

Given a Maybe\<A\> it returns true if the Maybe\<A\> is Just\<A\> or 
false if it is a Nothing.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { isJust, Nothing, Maybe } from '@typed/maybe'

console.log(isJust(Nothing)) // logs false
console.log(isJust(Maybe.of(1))) // logs true
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe.hasOwnProperty('@typed/Just')
}

```

</details>
<hr />


#### isNothing\<A\>(maybe: Maybe\<A\>): maybe is Nothing

<p>

Given a Maybe\<A\> it returns false if the Maybe\<A\> is Just\<A\> or 
true if it is a Nothing.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { isNothing, Maybe, Nothing } from '@typed/maybe'

console.log(isNothing(Nothing)) // logs true
console.log(isNothing(Maybe.of(1))) // logs false
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return (maybe as Nothing)['@typed/Nothing'] === true
}

```

</details>
<hr />


#### map\<A, B\>(f: (value: A) =\> B, maybe: Maybe\<A\>): Maybe\<B\>

<p>

Applies a function to the value possibly contained in a `Maybe`. If the 
maybe is a `Nothing` just the `Nothing` is returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: MaybeMap = curry2(__map)

function __map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B> {
  return chain(a => Maybe.of(f(a)), maybe)
}

export interface MaybeMap {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}

```

</details>
<hr />
