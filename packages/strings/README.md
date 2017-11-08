# @typed/strings -- 3.2.0

Well-typed functions for strings

## Get it
```sh
yarn add @typed/strings
# or
npm install --save @typed/strings
```

## API Documentation

All functions are curried!

#### split(search: string | RegExp, str: string): Array\<string\>

<p>

Curried function to call `String.prototype.split`

</p>


<details>
<summary>See the code</summary>

```typescript

export const split: Split = curry2(__split)

export type Split = {
  (separator: string | RegExp, str: string): Array<string>
  (separator: string | RegExp): (str: string) => Array<string>
}

function __split(separator: string | RegExp, str: string): Array<string> {
  return str.split(separator)
}

```

</details>
<hr />


#### substr(from: number, length: number | undefined, str: string): string

<p>

A curried function to call `String.prototype.substr`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substr: Substr = curry3(__substr)

export type Substr = {
  (from: number, length: number | undefined, str: string): string
  (from: number, length: number | undefined): (str: string) => string
  (from: number): {
    (length: number | undefined, str: string): string
    (length: number | undefined): (str: string) => string
  }
}

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}

```

</details>
<hr />


#### substring(from: number, to: number | undefined, str: string)

<p>

A curried function to call `String.prototype.substring`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substring: Substring = curry3(__substring)

export type Substring = {
  (from: number, to: number | undefined, str: string): string
  (from: number, to: number | undefined): (str: string) => string
  (from: number): {
    (to: number | undefined, str: string): string
    (to: number | undefined): (str: string) => string
  }
}

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}

```

</details>
<hr />


#### toLowerCase(str: string): string

<p>

A function to call `String.prototype.toLowerCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toLowerCase = (str: string) => str.toLowerCase()

```

</details>
<hr />


#### toUpperCase(str: string): string

<p>

A function to call `String.prototype.toUpperCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toUpperCase = (str: string) => str.toUpperCase()

```

</details>
<hr />


#### trim(str: string): string

<p>

A function to call `String.prototype.trim`

</p>


<details>
<summary>See the code</summary>

```typescript

export const trim = (str: string): string => str.trim()

```

</details>
<hr />
