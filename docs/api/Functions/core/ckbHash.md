[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / ckbHash

# Function: ckbHash()

> **ckbHash**(`data`): [`Hex`](ccc.Type.Hex.md)

Computes the CKB hash of the given data using the Blake2b algorithm.

## Parameters

• **data**: [`BytesLike`](ccc.Type.BytesLike.md)

The data to hash.

## Returns

[`Hex`](ccc.Type.Hex.md)

The hexadecimal string representation of the hash.

## Example

```typescript
const hash = ckbHash("some data"); // Outputs something like "0x..."
```

## Source

[hasher/index.ts:74](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/hasher/index.ts#L74)
