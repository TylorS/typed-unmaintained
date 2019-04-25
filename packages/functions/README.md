# @typed/functions -- 3.0.0

Well-typed collection of functions for working with functions

## Get it
```sh
yarn add @typed/functions
# or
npm install --save @typed/functions
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


#### __

<p>

A placeholder for `partial`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const __: PlaceHolder = { '@@placeholder': true }

const isPlaceholder = (x: any): x is PlaceHolder => x['@@placeholder'] === true

```

</details>
<hr />


#### always\<A\>(a: A): (...args: Array\<any\>) =\> A

<p>

Given a value returns a function that will always return that value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function always<A>(a: A) {
  function constant(...args: Array<any>): A
  function constant(): A {
    return a
  }

  return constant
}

```

</details>
<hr />


#### apply\<A\>(list: ArrayLike\<any\>, fn: (...args: Array\<any\>) =\> A): A

<p>

Given a list of arguments and a function, applies the function with
the given arguments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const apply: Apply = function<A>(list: ArrayLike<any>, f?: (...args: Array<any>) => A) {
  if (!f) return (f: (...args: Array<any>) => A) => __apply(list, f)

  return __apply(list, f)
}

function __apply<A>(list: ArrayLike<any>, f: (...args: Array<any>) => A) {
  switch (list.length) {
    case 0:
      return f()
    case 1:
      return f(list[0])
    case 2:
      return f(list[0], list[1])
    case 3:
      return f(list[0], list[1], list[2])
    case 4:
      return f(list[0], list[1], list[2], list[3])
    case 5:
      return f(list[0], list[1], list[2], list[3], list[4])
    default:
      return f.apply(null, list)
  }
}

```

</details>
<hr />


#### compose\<A, B\>(...fns: Array\<Function\>): (value: A) =\> B

<p>

Right-to-left function composition.

</p>


<details>
<summary>See the code</summary>

```typescript

export const compose: Compose = (...fns: Array<(value: any) => any>) => apply(fns.reverse(), pipe)

```

</details>
<hr />


#### curry(fn: Fuction): CurriedFunction

<p>

Given a function it returns a curried version of that function.

</p>


<details>
<summary>See the code</summary>

```typescript

export const curry: CurryFn = function curry(fn: any) {
  switch (fn.length) {
    case 0:
      return fn
    case 1:
      return fn
    case 2:
      return curry2(fn as Curry2<any, any, any>)
    case 3:
      return curry3(fn as Curry3<any, any, any, any>)
    case 4:
      return curry4(fn as Curry4<any, any, any, any, any>)
    case 5:
      return curry5(fn as Curry5<any, any, any, any, any, any>)
    default:
      return curryN(fn.length, fn)
  }
}

export type CurryFn = {
  <A>(f: () => A): () => A
  <A, B>(f: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(f: Arity2<A, B, C>): Curry2<A, B, C>
  <A, B, C, D>(f: Arity3<A, B, C, D>): Curry3<A, B, C, D>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E>
  <A, B, C, D, E, F>(f: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(f: Arity6<A, B, C, D, E, F, G>): Curry6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(f: Arity7<A, B, C, D, E, F, G, H>): Curry7<A, B, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(f: Arity8<A, B, C, D, E, F, G, H, I>): Curry8<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
  >
  <A, B, C, D, E, F, G, H, I, J>(f: Arity9<A, B, C, D, E, F, G, H, I, J>): Curry9<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
  >
  <A, B, C, D, E, F, G, H, I, J, K>(f: Arity10<A, B, C, D, E, F, G, H, I, J, K>): Curry10<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K
  >
}

```

</details>
<hr />


#### curryN(arity: number, f: Function): CurriedFunction

<p>

Curries a function to `n` arity.

</p>


<details>
<summary>See the code</summary>

```typescript

export const curryN: CurryNFn = curriedN(
  2,
  (arity: number, f: ArityN<any>) => curriedN(arity, f, []),
  []
)

function curriedN(arity: number, f: ArityN<any>, previousArgs: Array<any>): ArityN<any> {
  if (arity <= 1) return f

  return function(...args: Array<any>) {
    const concatArgs = previousArgs.concat(args)

    if (concatArgs.length >= arity) return f.apply(this, concatArgs)

    return curriedN(arity, f, concatArgs)
  }
}

```

</details>
<hr />


#### flip\<A, B, C\>(fn: (a: A, b: B) =\> C): Curry2\<B, A, C\>

<p>

Flips the first 2 arguments of a function.

</p>


<details>
<summary>See the code</summary>

```typescript

export const flip: Flip = function flip<A, B, C>(f: (a: A, b: B, ...args: Array<any>) => C) {
  return curry(function(b: B, a: A, ...args: Array<any>): C {
    return apply([a, b, ...args], f)
  })
}

```

</details>
<hr />


#### id\<A\>(value: A): A

<p>

Returns the value passed in

</p>


<details>
<summary>See the code</summary>

```typescript

export const id: Id = <A>(value: A): A => value

export type Id = {
  <A>(value: A, ...args: Array<any>): A
}

```

</details>
<hr />


#### memoize\<F extends Function\>(f: F): F

<p>

Memoizes a function.

</p>


<details>
<summary>See the code</summary>

```typescript

export const memoize = function<F extends Function>(f: F): F {
  const cache = new Map<any, any>()

  return (function(...args: Array<any>): any {
    const key = args.reduce((x, y) => x + JSON.stringify(y), '')

    if (cache.has(key)) return cache.get(key)

    let result = f.apply(this, args)

    if (typeof result === 'function') result = memoize(result)

    cache.set(key, result)

    return result
  } as any) as F
}

```

</details>
<hr />


#### partial(f: Function, args: List\<any\>): PartiallyAppliedFunction

<p>

Allows partially applying a function

</p>


<details>
<summary>See the code</summary>

```typescript

export const partial: PartialFn = curry2(
  (f: (...args: Array<any>) => any, args: Array<any>): any => {
    const fnLength = f.length
    const argsLength = args.length

    if (fnLength === 0) return f
    if (argsLength === 0) return curryN(fnLength as 2, f)

    const placeholderAmount = args.filter(isPlaceholder).length
    const expectedLength = Math.max(0, fnLength - argsLength) + placeholderAmount

    function partiallyApplied(...otherArgs: Array<any>) {
      if (placeholderAmount === 0) return apply(args.concat(otherArgs), f)

      const combinedArgs: Array<any> = Array(fnLength)

      for (let i = 0; i < combinedArgs.length; ++i)
        combinedArgs[i] = isPlaceholder(args[i]) ? otherArgs.shift() : args[i]

      return apply(combinedArgs.concat(otherArgs), f)
    }

    return curryN(expectedLength as 2, partiallyApplied)
  }
)

```

</details>
<hr />


#### pipe\<A, B\>(...fns: Array\<Function\>): (value: A) =\> B

<p>

Left-to-right function composition.

</p>


<details>
<summary>See the code</summary>

```typescript

export const pipe: PipeFn = function pipe<A, B>(...fns: Array<Function>) {
  return function(a: A): B {
    switch (fns.length) {
      case 1:
        return fns[0](a)
      case 2:
        return fns[1](fns[0](a))
      case 3:
        return fns[2](fns[1](fns[0](a)))
      case 4:
        return fns[3](fns[2](fns[1](fns[0](a))))
      case 5:
        return fns[4](fns[3](fns[2](fns[1](fns[0](a)))))
      default:
        return fns.reduce((accumulator: any, value: Function) => value(accumulator), a)
    }
  }
}

```

</details>
<hr />
