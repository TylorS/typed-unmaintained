# @typed/core -- 1.1.0

Shared kernel of types for Typed organization

## Get it
```sh
yarn add @typed/core
# or
npm install --save @typed/core
```

## API Documentation

All functions are curried!

#### Arity0

<p>



</p>


```typescript

export type Arity0<A> = () => A

```


#### Arity1

<p>



</p>


```typescript

export type Arity1<A, B> = (value: A) => B

```


#### Arity10

<p>



</p>


```typescript

export type Arity10<A, B, C, D, E, F, G, H, I, J, K> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J
) => K

```


#### Arity10N

<p>



</p>


```typescript

export type Arity10N<A, B, C, D, E, F, G, H, I, J, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J,
  ...args: Array<any>
) => R

```


#### Arity1Bound

<p>



</p>


```typescript

export type Arity1Bound<that, A, B> = (this: that, a: A) => B

```


#### Arity1N

<p>



</p>


```typescript

export type Arity1N<A, R> = (a: A, ...args: Array<any>) => R

```


#### Arity2

<p>



</p>


```typescript

export type Arity2<A, B, C> = (a: A, b: B) => C

```


#### Arity2Bound

<p>



</p>


```typescript

export type Arity2Bound<that, A, B, C> = (this: that, a: A, b: B) => C

```


#### Arity2N

<p>



</p>


```typescript

export type Arity2N<A, B, R> = (a: A, b: B, ...args: Array<any>) => R

```


#### Arity3

<p>



</p>


```typescript

export type Arity3<A, B, C, D> = (a: A, b: B, c: C) => D

```


#### Arity3Bound

<p>



</p>


```typescript

export type Arity3Bound<that, A, B, C, D> = (this: that, a: A, b: B, c: C) => D

```


#### Arity3N

<p>



</p>


```typescript

export type Arity3N<A, B, C, R> = (a: A, b: B, c: C, ...args: Array<any>) => R

```


#### Arity4

<p>



</p>


```typescript

export type Arity4<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E

```


#### Arity4Bound

<p>



</p>


```typescript

export type Arity4Bound<that, A, B, C, D, E> = (this: that, a: A, b: B, c: C, d: D) => E

```


#### Arity4N

<p>



</p>


```typescript

export type Arity4N<A, B, C, D, R> = (a: A, b: B, c: C, d: D, ...args: Array<any>) => R

```


#### Arity5

<p>



</p>


```typescript

export type Arity5<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F

```


#### Arity5Bound

<p>



</p>


```typescript

export type Arity5Bound<that, A, B, C, D, E, F> = (this: that, a: A, b: B, c: C, d: D, e: E) => F

```


#### Arity5N

<p>



</p>


```typescript

export type Arity5N<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E, ...args: Array<any>) => R

```


#### Arity6

<p>



</p>


```typescript

export type Arity6<A, B, C, D, E, F, G> = (a: A, b: B, c: C, d: D, e: E, f: F) => G

```


#### Arity6N

<p>



</p>


```typescript

export type Arity6N<A, B, C, D, E, F, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  ...args: Array<any>
) => R

```


#### Arity7

<p>



</p>


```typescript

export type Arity7<A, B, C, D, E, F, G, H> = (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H

```


#### Arity7N

<p>



</p>


```typescript

export type Arity7N<A, B, C, D, E, F, G, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  ...args: Array<any>
) => R

```


#### Arity8

<p>



</p>


```typescript

export type Arity8<A, B, C, D, E, F, G, H, I> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H
) => I

```


#### Arity8N

<p>



</p>


```typescript

export type Arity8N<A, B, C, D, E, F, G, H, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  ...args: Array<any>
) => R

```


#### Arity9

<p>



</p>


```typescript

export type Arity9<A, B, C, D, E, F, G, H, I, J> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I
) => J

```


#### Arity9N

<p>



</p>


```typescript

export type Arity9N<A, B, C, D, E, F, G, H, I, R> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  ...args: Array<any>
) => R

```


#### ArityN

<p>



</p>


```typescript

export type ArityN<R> = (...args: Array<any>) => R

```


#### Comparator

<p>



</p>


```typescript

export type Comparator<A> = (a: A, b: A) => ComparisonNumbers

```


#### ComparisonNumber

<p>



</p>


```typescript

export type ComparisonNumbers = -1 | 0 | 1

```


#### Curry10

<p>



</p>


```typescript

export type Curry10<A, B, C, D, E, F, G, H, I, J, K> = {
  (a: A): Curry9<B, C, D, E, F, G, H, I, J, K>
  (a: A, b: B): Curry8<C, D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C): Curry7<D, E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D): Curry6<E, F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E): Curry5<F, G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry4<G, H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry3<H, I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry2<I, J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Arity1<J, K>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): K
}

```


#### Curry2

<p>



</p>


```typescript

export type Curry2<A, B, C> = {
  (a: A): Arity1<B, C>
  (a: A, b: B): C
}

```


#### Curry3

<p>



</p>


```typescript

export type Curry3<A, B, C, D> = {
  (a: A): Curry2<B, C, D>
  (a: A, b: B): Arity1<C, D>
  (a: A, b: B, c: C): D
}

```


#### Curry4

<p>



</p>


```typescript

export type Curry4<A, B, C, D, E> = {
  (a: A): Curry3<B, C, D, E>
  (a: A, b: B): Curry2<C, D, E>
  (a: A, b: B, c: C): Arity1<D, E>
  (a: A, b: B, c: C, d: D): E
}

```


#### Curry5

<p>



</p>


```typescript

export type Curry5<A, B, C, D, E, F> = {
  (a: A): Curry4<B, C, D, E, F>
  (a: A, b: B): Curry3<C, D, E, F>
  (a: A, b: B, c: C): Curry2<D, E, F>
  (a: A, b: B, c: C, d: D): Arity1<E, F>
  (a: A, b: B, c: C, d: D, e: E): F
}

```


#### Curry6

<p>



</p>


```typescript

export type Curry6<A, B, C, D, E, F, G> = {
  (a: A): Curry5<B, C, D, E, F, G>
  (a: A, b: B): Curry4<C, D, E, F, G>
  (a: A, b: B, c: C): Curry3<D, E, F, G>
  (a: A, b: B, c: C, d: D): Curry2<E, F, G>
  (a: A, b: B, c: C, d: D, e: E): Arity1<F, G>
  (a: A, b: B, c: C, d: D, e: E, f: F): G
}

```


#### Curry7

<p>



</p>


```typescript

export type Curry7<A, B, C, D, E, F, G, H> = {
  (a: A): Curry6<B, C, D, E, F, G, H>
  (a: A, b: B): Curry5<C, D, E, F, G, H>
  (a: A, b: B, c: C): Curry4<D, E, F, G, H>
  (a: A, b: B, c: C, d: D): Curry3<E, F, G, H>
  (a: A, b: B, c: C, d: D, e: E): Curry2<F, G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F): Arity1<G, H>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): H
}

```


#### Curry8

<p>



</p>


```typescript

export type Curry8<A, B, C, D, E, F, G, H, I> = {
  (a: A): Curry7<B, C, D, E, F, G, H, I>
  (a: A, b: B): Curry6<C, D, E, F, G, H, I>
  (a: A, b: B, c: C): Curry5<D, E, F, G, H, I>
  (a: A, b: B, c: C, d: D): Curry4<E, F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E): Curry3<F, G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry2<G, H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Arity1<H, I>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): I
}

```


#### Curry9

<p>



</p>


```typescript

export type Curry9<A, B, C, D, E, F, G, H, I, J> = {
  (a: A): Curry8<B, C, D, E, F, G, H, I, J>
  (a: A, b: B): Curry7<C, D, E, F, G, H, I, J>
  (a: A, b: B, c: C): Curry6<D, E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D): Curry5<E, F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E): Curry4<F, G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry3<G, H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry2<H, I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Arity1<I, J>
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): J
}

```


#### Either

<p>

Either data structure. Extremely useful for handling errors or different 
logic paths without the use of if-statements.

</p>


```typescript

export type Either<A, B> = Left<A> | Right<B>

```


#### Fork

<p>

Fork function signature used by Future.

</p>


```typescript

export type Fork<A, B> = (reject: (value: A) => void, resolve: (value: B) => void) => void

```


#### Future

<p>

Asynchronous data-structure similar to a Promise, but lazy.

</p>


```typescript

export interface Future<A, B> {
  readonly fork: Fork<A, B>
}

```


#### Index

<p>

A type-alias for numbers representing a List index

</p>


```typescript

export type Index = number

```


#### Just

<p>

A JSON-serializable Just data-structure

</p>


```typescript

export interface Just<A> {
  readonly '@typed/Just': A
}

```


#### Left

<p>

A JSON-serializable Left\<A\> data-structure.

</p>


```typescript

export interface Left<A> {
  readonly '@typed/Left': A
}

```


#### List

<p>

An immutable List type.

</p>


```typescript

export interface List<A> {
  readonly [key: number]: A
  readonly length: number
}

```


#### Maybe\<A\>

<p>

Maybe type. Very useful when errors can occur.

</p>


```typescript

export type Maybe<A> = Just<A> | Nothing

```


#### Nothing

<p>

The Nothing type, used in place of nulls or undefined.

</p>


```typescript

export interface Nothing {
  readonly '@typed/Nothing': true
}

```


#### Predicate

<p>



</p>


```typescript

export type Predicate<A> = (value: A) => boolean

```


#### Predicate2

<p>



</p>


```typescript

export type Predicate2<A> = (a: A, b: A) => boolean

```


#### Right

<p>

A JSON-serializable Right data-structure.

</p>


```typescript

export interface Right<A> {
  readonly '@typed/Right': A
}

```
