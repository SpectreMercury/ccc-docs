[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/script](ckb.script.md) / hashTypeToBytes

# Function: hashTypeToBytes()

> **hashTypeToBytes**(`hashType`): [`Bytes`](bytes.Type.Bytes.md)

Converts a HashTypeLike value to its corresponding byte representation.

## Parameters

• **hashType**: [`HashTypeLike`](ckb.script.Type.HashTypeLike.md)

The hash type value to convert.

## Returns

[`Bytes`](bytes.Type.Bytes.md)

A Uint8Array containing the byte representation of the hash type.

## Example

```typescript
const hashTypeBytes = hashTypeToBytes("type"); // Outputs Uint8Array [0]
```

## Source

[ckb/script.ts:61](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L61)
