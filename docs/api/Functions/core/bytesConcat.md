**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / bytesConcat

# Function: bytesConcat()

> **bytesConcat**(...`args`): `Bytes`

Concatenates multiple byte-like arrays into a single byte array.

## Parameters

• ...**args**: `BytesLike`[]

The byte-like arrays to concatenate.

## Returns

`Bytes`

A Uint8Array containing the concatenated bytes.

## Example

```typescript
const concatenatedBytes = bytesConcat(
  new Uint8Array([1, 2]),
  new Uint8Array([3, 4]),
  "hello",
  [5, 6, 7]
);
console.log(concatenatedBytes); // Outputs Uint8Array [1, 2, 3, 4, /* bytes of "hello" */, 5, 6, 7]
```

## Source

bytes/index.ts:25
