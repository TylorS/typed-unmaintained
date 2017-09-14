# @typed/maybe -- 2.0.0

Well-typed Maybe data structure

## Get it
```sh
yarn add @typed/maybe
# or
npm install --save @typed/maybe
```

## API Documentation

All functions are curried!

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
