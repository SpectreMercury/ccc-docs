[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / depTypeToBytes

# Function: depTypeToBytes()

> **depTypeToBytes**(`depType`): [`Bytes`](ccc.Type.Bytes.md)

Converts a DepTypeLike value to its corresponding byte representation.

## Parameters

• **depType**: [`DepTypeLike`](ccc.Type.DepTypeLike.md)

The dep type value to convert.

## Returns

[`Bytes`](ccc.Type.Bytes.md)

A Uint8Array containing the byte representation of the dep type.

## Example

```typescript
const depTypeBytes = depTypeToBytes("code"); // Outputs Uint8Array [1]
```

## Source

[ckb/transaction.ts:59](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L59)
