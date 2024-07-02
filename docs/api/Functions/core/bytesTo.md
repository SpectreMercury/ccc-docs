[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / bytesTo

# Function: bytesTo()

> **bytesTo**(`val`, `encoding`): `string`

Converts a byte-like value to a string using the specified encoding.

## Parameters

• **val**: [`BytesLike`](ccc.Type.BytesLike.md)

The byte-like value to convert.

• **encoding**: `BytesFromEncoding`

The encoding to use for the conversion, as defined by the BytesFromEncoding type.

## Returns

`string`

A string representing the encoded bytes.

## Example

```typescript
const encodedString = bytesTo(new Uint8Array([104, 101, 108, 108, 111]), "utf8");
console.log(encodedString); // Outputs "hello"

const base64String = bytesTo(new Uint8Array([104, 101, 108, 108, 111]), "base64");
console.log(base64String); // Outputs "aGVsbG8="
```

## Source

[bytes/index.ts:51](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/bytes/index.ts#L51)
