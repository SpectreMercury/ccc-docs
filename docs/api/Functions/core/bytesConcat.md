[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / bytesConcat

# Function: bytesConcat()

> **bytesConcat**(...`args`): [`Bytes`](ccc.Type.Bytes.md)

Concatenates multiple byte-like arrays into a single byte array.

## Parameters

• ...**args**: [`BytesLike`](ccc.Type.BytesLike.md)[]

The byte-like arrays to concatenate.

## Returns

[`Bytes`](ccc.Type.Bytes.md)

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

[bytes/index.ts:25](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/bytes/index.ts#L25)
