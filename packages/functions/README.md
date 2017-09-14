# @typed/functions -- 1.0.0

Well-typed collection of functions for working with functions

## Get it
```sh
yarn add @typed/functions
# or
npm install --save @typed/functions
```

## API Documentation

All functions are curried!

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


#### apply\<A\>(list: List\<any\>, fn: (...args: Array\<any\>) =\> A): A

<p>

Given a list of arguments and a function, applies the function with 
the given arguments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const apply: Apply = function<A>(list: List<any>, f?: (...args: Array<any>) => A) {
  if (!f) return (f: (...args: Array<any>) => A) => __apply(list, f)

  return __apply(list, f)
}

function __apply<A>(list: List<any>, f: (...args: Array<any>) => A) {
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
