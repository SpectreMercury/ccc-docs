**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / bytesTo

# Function: bytesTo()

> **bytesTo**(`val`, `encoding`): `string`

Converts a byte-like value to a string using the specified encoding.

## Parameters

• **val**: `BytesLike`

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

bytes/index.ts:51
