[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / depTypeFrom

# Function: depTypeFrom()

> **depTypeFrom**(`val`): [`DepType`](ccc.Type.DepType.md)

Converts a DepTypeLike value to a DepType.

## Parameters

• **val**: [`DepTypeLike`](ccc.Type.DepTypeLike.md)

The value to convert, which can be a string, number, or bigint.

## Returns

[`DepType`](ccc.Type.DepType.md)

The corresponding DepType.

## Throws

Will throw an error if the input value is not a valid dep type.

## Example

```typescript
const depType = depTypeFrom(1); // Outputs "code"
const depType = depTypeFrom("depGroup"); // Outputs "depGroup"
```

## Source

[ckb/transaction.ts:37](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L37)
