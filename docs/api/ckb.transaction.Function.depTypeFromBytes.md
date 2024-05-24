[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/transaction](ckb.transaction.md) / depTypeFromBytes

# Function: depTypeFromBytes()

> **depTypeFromBytes**(`bytes`): [`DepType`](ckb.transaction.Type.DepType.md)

Converts a byte-like value to a DepType.

## Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md)

The byte-like value to convert.

## Returns

[`DepType`](ckb.transaction.Type.DepType.md)

The corresponding DepType.

## Throws

Will throw an error if the input bytes do not correspond to a valid dep type.

## Example

```typescript
const depType = depTypeFromBytes(new Uint8Array([1])); // Outputs "code"
```

## Source

[ckb/transaction.ts:77](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L77)
