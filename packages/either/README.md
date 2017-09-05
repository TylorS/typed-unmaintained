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


#### Either.left\<A, B = any\>(value: A): Either\<A, B\>

<p>

Creates an Either\<A, B\> that is of type Left\<A\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const left:<A, B = any>(value: A) => Either<A, B> = Left.of
}

```

</details>
<hr />


#### Either.right\<A, B = any\>(value: A): Either\<B, A\>

<p>

Creates an Either\<A, B\> that is of type Right\<B\>

</p>


<details>
<summary>See the code</summary>

```typescript

export const right: <A, B = any>(value: A) => Either<B, A> = Right.of

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
