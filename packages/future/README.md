# @typed/future -- 3.0.0

Small future implemenatation

## Get it
```sh
yarn add @typed/future
# or
npm install --save @typed/future
```

## API Documentation

All functions are curried!

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


#### Future.create\<A, B\>(fork: Fork\<A, B\>): Future\<A, B\>

<p>

Creates a `Future` given a `Fork` function.

</p>


<details>
<summary>See the code</summary>

```typescript

export function create<A, B>(fork: Fork<A, B>): Future<A, B> {
  return { fork }
}

```

</details>
<hr />


#### Future.of\<A, B = any\>(value: A): Future\<B, A\>

<p>

Creates a `Future` which will always fork to the right with the given value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function of<A, B = any>(value: A): Future<B, A> {
  return create((_, resolve) => resolve(value))
}

```

</details>
<hr />


#### Future.reject\<A, B = any\>(value: A): Future\<A, B\>

<p>

Creates a `Future` which will always fork to the left with the given value.

</p>


<details>
<summary>See the code</summary>

```typescript

export function reject<A, B = any>(value: A): Future<A, B> {
  return create(reject => reject(value))
}
}

```

</details>
<hr />


#### all\<A, B\>(futures: ArrayLike\<Future\<A, B\>\>): Future\<A, ReadonlyArray\<B\>\>

<p>

Creates a `Future` that concurrently forks all of the given `Futures` resolving
with an Array of their values, or rejecting if any of the futures reject. Conceptually 
the same as to `Promise.all`.

</p>


<details>
<summary>See the code</summary>

```typescript

export function all<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>> {
  return Future.create<A, ReadonlyArray<B>>((reject, resolve) => {
    const promises: Array<Promise<B>> = []

    for (let i = 0; i < futures.length; ++i) promises[i] = toPromise(futures[i])

    Promise.all(promises)
      .then(resolve)
      .catch(reject)
  })
}

```

</details>
<hr />


#### ap\<A, B, C\>(fn: Future\<A, (value: B) =\> C\>, value: Future\<A, B\>): Future\<A, C\>

<p>

Applies the function resolved from a `Future` to the value resolved from a 
second `Future`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const ap: FutureAp = curry2(__ap)

function __ap<A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C> {
  return chain(f => map(f, value), fn)
}

export type FutureAp = {
  <A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, (value: B) => C>): (value: Future<A, B>) => Future<A, C>
}

```

</details>
<hr />


#### chain\<A, B, C\>(f: (value: B) =\> Future\<A, C\>, future: Future\<A, B\>): Future\<A C\>

<p>

Returns a `Future` that is the result of calling `f` with the resolved 
value of another future. Similar to `Promise.then`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chain: FutureChain = curry2(__chain)

function __chain<A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C> {
  return Future.create((reject, resolve) => {
    future.fork(reject, value => f(value).fork(reject, resolve))
  })
}

export type FutureChain = {
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}

```

</details>
<hr />


#### chainLeft\<A, B, C\>(f: (value: A) =\> Future\<C, B\>, future: Future\<A, B\>): Future\<C, B\>

<p>

Returns a `Future` that is the result of calling `f` with the rejected 
value of another future. Similar to `Promise.catch`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const chainLeft: FutureChainLeft = curry2(__chainLeft)

function __chainLeft<A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B> {
  return Future.create((reject, resolve) => {
    future.fork(value => f(value).fork(reject, resolve), resolve)
  })
}

export type FutureChainLeft = {
  <A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => Future<C, B>): (future: Future<A, B>) => Future<C, B>
}

```

</details>
<hr />


#### fork\<A, B\>(left: (value: A) =\> any, right: (value: B) =\> any, future: Future\<A, B\>): void

<p>

Activates a future (side-effectful).

</p>


<details>
<summary>See the code</summary>

```typescript

export const fork: ForkFn = curry3(forkFuture)

function forkFuture<A, B>(
  left: (value: A) => any,
  right: (value: B) => any,
  future: Future<A, B>
): void {
  future.fork(left, right)
}

export interface ForkFn {
  <A, B>(left: (value: A) => any, right: (value: B) => any, future: Future<A, B>): void
  <A, B>(left: (value: A) => any): (right: (value: B) => any, future: Future<A, B>) => void
  <A, B>(left: (value: A) => any, right: (value: B) => any): (future: Future<A, B>) => void
  <A, B>(left: (value: A) => any): (right: (value: B) => any) => (future: Future<A, B>) => void
}

```

</details>
<hr />


#### map\<A, B, C\>(f: (value: B) =\> C, future: Future\<A, B\>): Future\<A, C\>

<p>

Maps the value of a Future. Similar to `Promise.then`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const map: FutureMap = curry2(__map)

function __map<A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C> {
  return chain(b => Future.of(f(b)), future)
}

export type FutureMap = {
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => C): (future: Future<A, B>) => Future<A, C>
}

```

</details>
<hr />


#### mapLeft\<A, B, C\>(f: (value: A) =\> C, future: Future\<A, B\>): Future\<C, B\>

<p>

Returns a `Future` that is the result of calling `f` with the rejected 
value of another future. Similar to `Promise.catch`.

</p>


<details>
<summary>See the code</summary>

```typescript

export const mapLeft: FutureMapLeft = curry2(__mapLeft)

function __mapLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B> {
  return chainLeft(value => Future.reject(f(value)), future)
}

export type FutureMapLeft = {
  <A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => C): (future: Future<A, B>) => Future<C, B>
}

```

</details>
<hr />


#### sequence\<A, B\>(futures: ArrayLike\<Future\<A, B\>\>): Future\<A, ReadonlyArray\<B\>\>

<p>

Creates a `Future` that will lazily fork each `Future` one after another.
Similar to `all` except that concurrency is always 1.

</p>


<details>
<summary>See the code</summary>

```typescript

export function sequence<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>> {
  let seed = Future.of<Array<B>, A>([])

  for (let i = 0; i < futures.length; ++i) {
    const future = futures[i]

    seed = chain(values => map(value => values.concat(value), future), seed)
  }

  return seed
}

```

</details>
<hr />


#### toPromise\<A\>(future: Future\<any, A\>): Promise\<A\>

<p>

Forks a `Future` into a Promise

</p>


<details>
<summary>See the code</summary>

```typescript

export function toPromise<A>(future: Future<any, PromiseLike<A>>): Promise<A>
export function toPromise<A>(future: Future<any, A>): Promise<A>
export function toPromise<A>(future: Future<any, A>): Promise<A> {
  return new Promise<A>((resolve, reject) => future.fork(reject, resolve))
}

```

</details>
<hr />
