# @typed/math -- 2.0.0

Math related functions

## Get it
```sh
yarn add @typed/math
# or
npm install --save @typed/math
```

## API Documentation

All functions are curried!

#### add(x: number, y: number): number

<p>

Add 2 numbers together

</p>


<details>
<summary>See the code</summary>

```typescript

export const add = curry2(__add)

function __add(x: number, y: number): number {
  return x + y
}

```

</details>
<hr />


#### decrement(num: number): number

<p>

Subtracts `1` from a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export const decrement = add(-1)

```

</details>
<hr />


#### divide(x: number, y: number): number

<p>

Divides 2 numbers

</p>


<details>
<summary>See the code</summary>

```typescript

export const divide = curry2(__divide)

function __divide(right: number, left: number): number {
  return left / right
}

```

</details>
<hr />


#### increment(num: number): number

<p>

Adds 1 to a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export const increment = add(1)

```

</details>
<hr />


#### mean(numbers: List\<number\>): number

<p>

Calculates the average of a list of numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const mean = (numbers: List<number>) => divide(numbers.length, sum(numbers))

```

</details>
<hr />


#### median(numbers: List\<number\>): Maybe\<number\>

<p>

Calculates the median of a `List`. If the calculated median is `NaN`
a `Nothing` is returned otherwise a `Just` containing the median will be returned.

</p>


<details>
<summary>See the code</summary>

```typescript

export function median(numbers: List<number>): Maybe<number> {
  const length = numbers.length

  if (length === 0) return Nothing

  const width = 2 - length % 2
  const index = (length - width) / 2

  const medianNumbers = slice(index, Maybe.of(index + width), sort<number>(ascend(x => x), numbers))

  return numberToMaybe(mean(medianNumbers))
}

function numberToMaybe(num: number): Maybe<number> {
  return Number.isNaN(num) ? Nothing : Maybe.of(num)
}

```

</details>
<hr />


#### modulo(right: number, left: number): number

<p>

Applies `%` to 2 numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const modulo = curry2(__modulo)

function __modulo(right: number, left: number): number {
  return left % right
}

```

</details>
<hr />


#### multiply(x: number, y: number): number

<p>

Multiplies 2 numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const multiply = curry2(__multiply)

function __multiply(x: number, y: number): number {
  return x * y
}

```

</details>
<hr />


#### negate(n: number): number

<p>

Negates a number.

</p>


<details>
<summary>See the code</summary>

```typescript

export const negate = (n: number): number => -n

```

</details>
<hr />


#### produce(numbers: List\<number\>): number

<p>

Calculates the produce of a list of numbers.

</p>


<details>
<summary>See the code</summary>

```typescript

export const product: (numbers: List<number>) => number = reduce(multiply, 1)

```

</details>
<hr />


#### subtract(right: number, left: number): number

<p>

Subtracts one number from another.

</p>


<details>
<summary>See the code</summary>

```typescript

export const subtract = curry2(__subtract)

function __subtract(right: number, left: number): number {
  return left - right
}

```

</details>
<hr />


#### sum(number: List\<number\>): number

<p>

Adds together all of the numbers in a list.

</p>


<details>
<summary>See the code</summary>

```typescript

export const sum: (numbers: List<number>) => number = reduce(add, 0)

```

</details>
<hr />
