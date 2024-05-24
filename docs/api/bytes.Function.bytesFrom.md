[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [bytes](bytes.md) / bytesFrom

# Function: bytesFrom()

> **bytesFrom**(`bytes`, `encoding`?): [`Bytes`](bytes.Type.Bytes.md)

Converts various types of byte-like values to a Uint8Array.

## Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md)

The byte-like value to convert. It can be a string, Uint8Array, ArrayBuffer, or number array.

• **encoding?**: [`BytesFromEncoding`](bytes.advanced.Type.BytesFromEncoding.md)

Optional encoding to use if the input is a string. Defaults to hexadecimal if not specified.

## Returns

[`Bytes`](bytes.Type.Bytes.md)

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

[bytes/index.ts:80](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/bytes/index.ts#L80)
