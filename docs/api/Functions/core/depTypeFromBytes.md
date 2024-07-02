[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / depTypeFromBytes

# Function: depTypeFromBytes()

> **depTypeFromBytes**(`bytes`): [`DepType`](ccc.Type.DepType.md)

Converts a byte-like value to a DepType.

## Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md)

The byte-like value to convert.

## Returns

[`DepType`](ccc.Type.DepType.md)

The corresponding DepType.

## Throws

Will throw an error if the input bytes do not correspond to a valid dep type.

## Example

```typescript
const depType = depTypeFromBytes(new Uint8Array([1])); // Outputs "code"
```

## Source

[ckb/transaction.ts:85](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L85)
