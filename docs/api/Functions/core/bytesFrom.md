**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / bytesFrom

# Function: bytesFrom()

> **bytesFrom**(`bytes`, `encoding`?): `Bytes`

Converts various types of byte-like values to a Uint8Array.

## Parameters

• **bytes**: `BytesLike`

The byte-like value to convert. It can be a string, Uint8Array, ArrayBuffer, or number array.

• **encoding?**: `BytesFromEncoding`

Optional encoding to use if the input is a string. Defaults to hexadecimal if not specified.

## Returns

`Bytes`

A Uint8Array representing the input bytes.

## Throws

Will throw an error if the input bytes are invalid or out of range.

## Example

```typescript
const bytes1 = bytesFrom(new Uint8Array([1, 2, 3]));
console.log(bytes1); // Outputs Uint8Array [1, 2, 3]

const bytes2 = bytesFrom("68656c6c6f", "hex");
console.log(bytes2); // Outputs Uint8Array [104, 101, 108, 108, 111]

const bytes3 = bytesFrom("hello", "utf8");
console.log(bytes3); // Outputs Uint8Array [104, 101, 108, 108, 111]

const bytes4 = bytesFrom([1, 2, 255]);
console.log(bytes4); // Outputs Uint8Array [1, 2, 255]
```

## Source

bytes/index.ts:80
