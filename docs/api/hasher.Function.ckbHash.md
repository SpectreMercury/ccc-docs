[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [hasher](hasher.md) / ckbHash

# Function: ckbHash()

> **ckbHash**(`data`): [`Hex`](hex.Type.Hex.md)

Computes the CKB hash of the given data using the Blake2b algorithm.

## Parameters

• **data**: [`BytesLike`](bytes.Type.BytesLike.md)

The data to hash.

## Returns

[`Hex`](hex.Type.Hex.md)

The hexadecimal string representation of the hash.

## Example

```typescript
const hash = ckbHash("some data"); // Outputs something like "0x..."
```

## Source

[hasher/index.ts:74](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/hasher/index.ts#L74)
