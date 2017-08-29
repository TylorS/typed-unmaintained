# @typed/either -- 0.0.0

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


#### Either.ap\<A, B, C\>(fn: Either\<A, Arity1\<B, C\>\>, value: Either\<A, B\>): Either\<A, C\>

<p>

Applies the function contained in a Right Either, to the value of contained
in another Right Either.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: EitherAP = curry2(function ap<A, B, C>(
  fn: Either<A, Arity1<B, C>>,
  value: Either<A, B>
): Either<A, C> {
  return chain(f => map(f, value), fn)
})
}

export interface EitherChain {
<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
<A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

export interface EitherMap {
<A, B, C>(f: Arity1<B, C>, either: Either<A, B>): Either<A, C>
<A, B, C>(f: Arity1<B, C>): (either: Either<A, B>) => Either<A, C>
}

export interface EitherAP {
<A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>
<A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
}

```

</details>
<hr />


#### Either.chain\<A, B, C\>(f: (value: B) =\> Either\<A, C\>, either: Either\<A, B\>): Either\<A, C\>

<p>

Create a new Either\<A, C\> by calling a function `f` with the value of 
the given Either\<A, B\> if that Either is Right\<B\> and not Left\<A\>. If the 
given Either\<A, B\> is Left\<A\> it is simply returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: EitherChain = curry2(function chain<A, B, C>(
  f: (value: B) => Either<A, C>,
  either: Either<A, B>
): Either<A, C> {
  return isLeft<A, B>(either) ? either : f(fromRight(either))
})

```

</details>
<hr />


#### Either.isLeft\<A, B\>(either: Either\<A, B\>): Either is Left\<A\>

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


#### Either.isRight\<A, B\>(either: Either\<A, B\>): either is Right\<B\>

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


#### Either.left\<A, B\>(value: A): Either\<A, B\>

<p>

Creates an Either\<A, B\> that is of type Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const left = <A, B>(value: A): Either<A, B> => Left.of(value)

```

</details>
<hr />


#### Either.map\<A, B, C\>(f: (value: B) =\> C, either: Either\<A, B\>): Either\<A, C\>

<p>

Maps the value of a Right\<B\> either to type Either\<A, C\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: EitherMap = curry2(function map<A, B, C>(
  f: Arity1<B, C>,
  either: Either<A, B>
): Either<A, C> {
  return chain<A, B, C>(pipe<B, C, Either<A, C>>(f, Either.of), either)
})

```

</details>
<hr />


#### Either.of\<A, B\>(value: B): Either\<A, B\>

<p>

Creates an Either\<A, B\> that is of type Right\<B\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const of = <A, B>(value: B): Either<A, B> => Right.of(value)

```

</details>
<hr />


#### Left

<p>

A JSON-serializable Left\<A\> data-structure.

</p>


<details>
<summary>See the code</summary>

```typescript

export interface Left<A> {
  readonly '@typed/Left': A
}

```

</details>
<hr />


#### Left.of\<A\>(value: A): Left\<A\>

<p>

Create a Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Left<A> {
  return Object.freeze<Left<A>>({ '@typed/Left': value })
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
  return Object.freeze<Right<A>>({ '@typed/Right': value })
}
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
