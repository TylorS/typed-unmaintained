# @typed/uuid -- 0.0.0

Cross-platform TypeScript implementation of UUID

## Get it
```sh
yarn add @typed/uuid
# or
npm install --save @typed/uuid
```

## API Documentation

All functions are curried!

#### Uuid

<p>



</p>


```typescript

export type Uuid = string

```


#### createUuid(): Uuid

<p>

Creates a universally unique identifier that works in both browser and Node.js
environments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const createUuid = pipe(generateRandomNumbers, generateUuid) as () => Uuid

```

</details>
<hr />


#### isUuid(value: string): value is Uuid

<p>

Returns `true` if a string is a UUID.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isUuid(value: string): value is Uuid {
  return uuidPattern.test(value)
}

```

</details>
<hr />
