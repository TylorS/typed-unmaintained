# @typed/either -- 3.3.0

Well-typed Either data-structure

## Get it
```sh
yarn add @typed/either
# or
npm install --save @typed/either
```

## API Documentation

All functions are curried!

#### Either

<p>

Either data structure. Extremely useful for handling errors or different 
logic paths without the use of if-statements.

</p>


```typescript

export type Either<A, B> = Left<A> | Right<B>

```


#### Either.left\<A, B = any\>(value: A): Either\<A, B\>

<p>

Creates an Either\<A, B\> that is of type Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const left: <A, B = any>(value: A) => Either<A, B> = Left.of
}

```

</details>
<hr />


#### Either.of\<A, B = any\>(value: A): Either\<B, A\>

<p>

Creates an Either\<A, B\> that is of type Right\<B\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const of: <A, B = any>(value: A) => Either<B, A> = Right.of

```

</details>
<hr />


#### Left

<p>

A JSON-serializable Left\<A\> data-structure.

</p>


```typescript

export interface Left<A> {
  readonly '@typed/Left': A
}

```


#### Left.of\<A\>(value: A): Left\<A\>

<p>

Create a Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Left<A> {
  return { '@typed/Left': value }
}
}

```

</details>
<hr />


#### Right

<p>

A JSON-serializable Right data-structure.

</p>


```typescript

export interface Right<A> {
  readonly '@typed/Right': A
}

```


#### Right.of\<A\>(value: A): Right\<A\>

<p>

Creates a Right

</p>


<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Right<A> {
  return { '@typed/Right': value }
}
}

```

</details>
<hr />


#### ap\<A, B, C\>(fn: Either\<A, (value: B) =\> C\>, value: Either\<A, B\>): Either\<A, C\>

<p>

Applies the function contains in an `Either` to the value contained in a 
second `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: EitherAp = curry2(__ap)

function __ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C> {
  return chain(f => map(f, value), fn)
}

export type EitherAp = {
  <A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, (value: B) => C>): (value: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### chain\<A, B, C\>(f: (value: B) =\> Either\<A, C\>, either: Either\<A, B\>): Either\<A C\>

<p>

Returns a `Either` that is the result of calling `f` with the resolved 
value of another `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: EitherChain = curry2(__chain)

function __chain<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C> {
  return isLeft(either) ? either : f(fromRight(either))
}

export type EitherChain = {
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### chainLeft\<A, B, C\>(f: (value: B) =\> Either\<C, B\>, either: Either\<A, B\>): Either\<A C\>

<p>

Returns a `Either` that is the result of calling `f` with the rejected 
value of another `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chainLeft: EitherChainLeft = curry2(__chainLeft)

function __chainLeft<A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B> {
  return isLeft(either) ? f(fromLeft(either)) : either
}

export type EitherChainLeft = {
  <A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => Either<C, B>): (either: Either<A, B>) => Either<C, B>
}

```

</details>
<hr />


#### fromLeft\<A\>(left: Left\<A\>): A

<p>

Extracts the value contained in a Left.

</p>


<details>
<summary>See the code</summary>

```typescript

export function fromLeft<A>(left: Left<A>): A {
  return left['@typed/Left']
}

```

</details>
<hr />


#### fromRight\<A\>(right: Right\<A\>): A

<p>

Extracts the value contained in a Right.

</p>


<details>
<summary>See the code</summary>

```typescript

export function fromRight<A>(right: Right<A>): A {
  return right['@typed/Right']
}

```

</details>
<hr />


#### isLeft\<A, B\>(either: Either\<A, B\>): Either is Left\<A\>

<p>

Returns true if an Either\<A, B\> is type Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export function isLeft<A, B>(either: Either<A, B>): either is Left<A> {
  return either.hasOwnProperty('@typed/Left')
}

```

</details>
<hr />


#### isRight\<A, B\>(either: Either\<A, B\>): either is Right\<B\>

<p>

Returns true if an Either\<A, B\> is type Right\<B\>

</p>


<details>
<summary>See the code</summary>

```typescript

export function isRight<A, B>(either: Either<A, B>): either is Right<B> {
  return either.hasOwnProperty('@typed/Right')
}

```

</details>
<hr />


#### map\<A, B, C\>(f: (value: B) =\> C, either: Either\<A, B\>): Either\<A C\>

<p>

Returns a `Either` that is the result of calling `f` with the resolved 
value of another `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: EitherMap = curry2(__map)

function __map<A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C> {
  return chain(value => Either.of(f(value)), either)
}

export type EitherMap = {
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => C): (either: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### mapLeft\<A, B, C\>(f: (value: A) =\> C, either: Either\<A, B\>): Either\<A C\>

<p>

Returns a `Either` that is the result of calling `f` with the resolved 
value of another `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const mapLeft: EitherMapLeft = curry2(__mapLeft)

function __mapLeft<A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B> {
  return chainLeft(value => Either.left(f(value)), either)
}

export type EitherMapLeft = {
  <A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => C): (either: Either<A, B>) => Either<C, B>
}

```

</details>
<hr />


#### swap\<A, B\>(either: Either\<A, B\>): Either\<B, A\>

<p>

Swaps the values contained in an `Either`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function swap<A, B>(either: Either<A, B>): Either<B, A> {
  return isLeft(either) ? Either.of(fromLeft(either)) : Either.left(fromRight(either))
}

```

</details>
<hr />


#### unpack\<A, B, C\>(f: Arity1\<A, C\>, g: Arity1\<B, C\>, either: Either\<A, B\>): C

<p>

Extracts the value from an `Either` applying function `f` if the `Either\<A, B\>` is
`Left\<A\>` or function `g` if `Right\<B\>`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const unpack: Unpack = curry3(__unpack)

function __unpack<A, B, C>(f: (value: A) => C, g: (value: B) => C, either: Either<A, B>): C {
  return isLeft(either) ? f(fromLeft(either)) : g(fromRight(either))
}

```

</details>
<hr />
