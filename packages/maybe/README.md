# @typed/maybe -- 0.0.0

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
  <summary>See an example</summary>
  
```typescript
import { Maybe, Just, Nothing } from '@typed/maybe'

function toMaybe<A>(value: A | null): Maybe<A> {
  return value === null ? Nothing : Just.of(value)
}
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Just<A> {
  return Object.freeze<Just<A>>({ '@typed/Just': value })
}
}

```

</details>
<hr />


#### Maybe.ap\<A, B\>(fn: Maybe\<Arity1\<A, B\>\>, value: Maybe\<A\>): Maybe\<B\>

<p>

Apply a function contained in a Maybe to a value contained in another Maybe.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: MaybeAP = curry2(function ap<A, B>(
  fn: Maybe<Arity1<A, B>>,
  value: Maybe<A>
): Maybe<B> {
  return Maybe.chain(f => Maybe.map(f, value), fn)
})
}

```

</details>
<hr />


#### Maybe.chain\<A, B\>(f: Arity1\<A, Maybe\<B\>\>, maybe: Maybe\<A\>): Maybe\<B\>

<p>

Create a new Maybe from another Maybe's value.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: MaybeChain = curry2(function<A, B>(
  f: Arity1<A, Maybe<B>>,
  maybe: Maybe<A>
): Maybe<B> {
  return ifElse<Maybe<A>, Maybe<B>>(Maybe.isJust, pipe(fromJust, f), always(Nothing), maybe)
})

```

</details>
<hr />


#### Maybe.isJust\<A\>(maybe: Maybe\<A\>): maybe is Just\<A\>

<p>

Given a Maybe\<A\> it returns true if the Maybe\<A\> is Just\<A\> or 
false if it is a Nothing.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { Maybe } from '@typed/maybe'

console.log(Maybe.isJust(Maybe.nothing())) // logs false
console.log(Maybe.isJust(Maybe.of(1))) // logs true
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


#### Maybe.isNothing\<A\>(maybe: Maybe\<A\>): maybe is Nothing

<p>

Given a Maybe\<A\> it returns false if the Maybe\<A\> is Just\<A\> or 
true if it is a Nothing.

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { Maybe, Nothing } from '@typed/maybe'

console.log(Maybe.isNothing(Nothing)) // logs true
console.log(Maybe.isNothing(Maybe.of(1))) // logs false
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return !!(maybe as Nothing)['@typed/Nothing']
}

```

</details>
<hr />


#### Maybe.map\<A, B\>(f: Arity1\<A, B\>, maybe: Maybe\<A\>): Maybe\<B\>

<p>

Map the value of a Maybe.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: MaybeMap = curry2(function map<A, B>(
  f: Arity1<A, B>,
  maybe: Maybe<A>
): Maybe<B> {
  return Maybe.chain(pipe(f, Just.of), maybe)
})

```

</details>
<hr />


#### Maybe.nothing\<A = any\>(): Maybe\<A\>

<p>

Returns a instance of Nothing.

</p>


<details>
<summary>See the code</summary>

```typescript

export function nothing<A = any>(): Maybe<A> {
  return Nothing
}

```

</details>
<hr />


#### Maybe.of\<A\>(value: A): Maybe\<A\>

<p>

Creates a Maybe containg a value

</p>


<details>
  <summary>See an example</summary>
  
```typescript
import { Maybe } from '@typed/maybe'

const maybe: Maybe<number> = Maybe.of(1)
```

</details>

<details>
<summary>See the code</summary>

```typescript

export function of<A>(value: A): Maybe<A> {
  return Just.of(value)
}

```

</details>
<hr />


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
export const Nothing: Nothing = Object.freeze<Nothing>({ '@typed/Nothing': true })

```


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
  return clone(just['@typed/Just'] as any)
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

export const fromMaybe: FromMaybe = curry2(function fromMaybe<A>(
  defaultValue: A,
  maybe: Maybe<A>
): A {
  return ifElse<Maybe<A>, A>(Maybe.isJust, fromJust, always(defaultValue), maybe)
})

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}

export interface MaybeMap {
  <A, B>(f: Arity1<A, B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Arity1<A, B>): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeChain {
  <A, B>(f: Arity1<A, Maybe<B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Arity1<A, Maybe<B>>): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeAP {
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
}

```

</details>
<hr />


#### isMaybe\<A\>(x: any): x is Maybe\<A\>

<p>

Given a value returns true if it is a Maybe

</p>


<details>
<summary>See the code</summary>

```typescript

export function isMaybe<A>(x: any): x is Maybe<A> {
  return isJust(x) || isNothing(x)
}

```

</details>
<hr />
