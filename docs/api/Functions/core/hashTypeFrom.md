[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / hashTypeFrom

# Function: hashTypeFrom()

> **hashTypeFrom**(`val`): [`HashType`](ccc.Type.HashType.md)

Converts a HashTypeLike value to a HashType.

## Parameters

• **val**: [`HashTypeLike`](ccc.Type.HashTypeLike.md)

The value to convert, which can be a string, number, or bigint.

## Returns

[`HashType`](ccc.Type.HashType.md)

The corresponding HashType.

## Throws

Will throw an error if the input value is not a valid hash type.

## Example

```typescript
const hashType = hashTypeFrom(1); // Outputs "data"
const hashType = hashTypeFrom("type"); // Outputs "type"
```

## Source

[ckb/script.ts:28](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/script.ts#L28)
