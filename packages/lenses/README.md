# @typed/lenses -- 1.0.0

Well-typed functional lenses

## Get it
```sh
yarn add @typed/lenses
# or
npm install --save @typed/lenses
```

## API Documentation

All functions are curried!

#### Lens

<p>

A common interface for Updating objects

</p>


```typescript

export interface Lens<A, B> {
  readonly view: (object: A) => Maybe<B>
  readonly updateAt: LensUpdateAt<A, B>
}

export type LensUpdateAt<A, B> = {
  (f: (previousValue: Maybe<B>) => Maybe<B>, object: A): A
  (f: (previousValue: Maybe<B>) => Maybe<B>): (object: A) => A
}

```


#### composeLenses(...lens: Array\<Lens\<any, any\>): Lens\<any, any\>

<p>

Right-to-left lens composition.

</p>


<details>
<summary>See the code</summary>

```typescript

export const composeLenses: ComposeLenses = function(
  ...lenses: Array<Lens<any, any>>
): Lens<any, any> {
  return pipeLenses.apply(this, lenses.reverse())
}

```

</details>
<hr />


#### lens\<A, B\>(getter: (a: A) =\> B | void, setter: (value: B, a: A) =\> A): Lens\<A, B\>

<p>

Given a getter and a setter function,
it returns a Lens.

</p>


<details>
<summary>See the code</summary>

```typescript

export const lens: LensFn = curry2(__lens)

function __lens<A, B>(getter: (a: A) => B | void, setter: (value: B, a: A) => A): Lens<A, B> {
  function updateAt(f: (value: Maybe<B>) => Maybe<B>, a: A): A {
    const value = f(view(a))

    if (isNothing(value)) return a

    return setter(fromJust(value), a)
  }

  function view(a: A): Maybe<B> {
    return toMaybe(getter(a))
  }

  return { view, updateAt: curry2(updateAt) }
}

export type LensFn = {
  <A, B>(getter: (a: A) => B, setter: (value: B, a: A) => A): Lens<A, B>
  <A, B>(getter: (a: A) => B): (setter: (value: B, a: A) => A) => Lens<A, B>
}

```

</details>
<hr />


#### pipeLenses\<A, B\>(...lenses: Array\<Lens\<any, any\>\>): Lens\<A, B\>

<p>

Left-to-right composition of Lenses.

</p>


<details>
<summary>See the code</summary>

```typescript

export const pipeLenses: PipeLenses = function pipeLenses<A, B>(
  ...lenses: Array<Lens<any, any>>
): Lens<A, B> {
  return lenses.slice(1).reduce(__pipeLenses, lenses[0])
}

function __pipeLenses<A, B, C>(lensAB: Lens<A, B>, lensBC: Lens<B, C>): Lens<A, C> {
  function view(obj: A): Maybe<C> {
    return chain(b => lensBC.view(b), lensAB.view(obj))
  }

  function updateAt(f: (value: Maybe<C>) => Maybe<C>, obj: A): A {
    const value = f(view(obj))

    const nestedObject = lensAB.view(obj)

    if (isNothing(nestedObject)) return obj

    return lensAB.updateAt(
      () => Maybe.of(lensBC.updateAt(() => value, fromJust(nestedObject))),
      obj
    )
  }

  return { view, updateAt: curry2(updateAt) }
}

```

</details>
<hr />


#### updateAt\<A, B\>(lens: \<A, B\>, f: (value: Maybe\<B\>) =\> Maybe\<B\>, obj: A): A

<p>

Uses a lenses to update a value contained in an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const updateAt: UpdateAt = curry3(function<A, B>(
  lens: Lens<A, B>,
  f: (value: Maybe<B>) => Maybe<B>,
  obj: A
): A {
  return lens.updateAt(f, obj)
})

export type UpdateAt = {
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>, obj: A): A
  <A, B>(lens: Lens<A, B>, f: (value: Maybe<B>) => Maybe<B>): (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>) => (obj: A) => A
  <A, B>(lens: Lens<A, B>): (f: (value: Maybe<B>) => Maybe<B>, obj: A) => A
}

```

</details>
<hr />


#### view\<A, B\>(lens: Lens\<A, B\>, obj: A): Maybe\<B\>

<p>

Uses a lenses to view a value contained in an object.

</p>


<details>
<summary>See the code</summary>

```typescript

export const view: View = curry2(function<A, B>(lens: Lens<A, B>, obj: A): Maybe<B> {
  return lens.view(obj)
})

export type View = {
  <A, B>(lens: Lens<A, B>, obj: A): Maybe<B>
  <A, B>(lens: Lens<A, B>): (obj: A) => Maybe<B>
}

```

</details>
<hr />
