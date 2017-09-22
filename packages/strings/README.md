# @typed/strings -- 1.1.0

Well-typed functions for strings

## Get it
```sh
yarn add @typed/strings
# or
npm install --save @typed/strings
```

## API Documentation

All functions are curried!

#### endsWith(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.endsWith`

</p>


<details>
<summary>See the code</summary>

```typescript

export const endsWith = invoker(1, 'endsWith')

```

</details>
<hr />


#### endsWith(startIndex: number, endIndex: number | void, str: string): boolean

<p>

Curried function to call `String.prototype.substring`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substring = invoker(2, 'substring')

```

</details>
<hr />


#### includes(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.includes`

</p>


<details>
<summary>See the code</summary>

```typescript

export const includes = invoker(1, 'includes')

```

</details>
<hr />


#### split(search: string | RegExp, str: string): List\<string\>

<p>

Curried function to call `String.prototype.split`

</p>


<details>
<summary>See the code</summary>

```typescript

export const split = invoker(1, 'split')

```

</details>
<hr />


#### startsWith(search: string, str: string): boolean

<p>

Curried function to call `String.prototype.startsWith`

</p>


<details>
<summary>See the code</summary>

```typescript

export const startsWith = invoker(1, 'startsWith')

```

</details>
<hr />


#### substr(startIndex: number, length: number | void, str: string): boolean

<p>

Curried function to call `String.prototype.substr`

</p>


<details>
<summary>See the code</summary>

```typescript

export const substr = invoker(2, 'substr')

```

</details>
<hr />


#### toLowerCase(str: string): string

<p>

Curried function to call `String.prototype.toLowerCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toLowerCase = invoker(0, 'toLowerCase')

```

</details>
<hr />


#### toUpperCase(str: string): string

<p>

Curried function to call `String.prototype.toUpperCase`

</p>


<details>
<summary>See the code</summary>

```typescript

export const toUpperCase = invoker(0, 'toUpperCase')

```

</details>
<hr />


#### trim(str: string): string

<p>

Curried function to call `String.prototype.trim`

</p>


<details>
<summary>See the code</summary>

```typescript

export const trim = invoker(0, 'trim')

```

</details>
<hr />
