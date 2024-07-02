[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / fixedPointFrom

# Function: fixedPointFrom()

> **fixedPointFrom**(`val`, `decimals`): [`FixedPoint`](ccc.Type.FixedPoint.md)

Converts a FixedPointLike value to a FixedPoint (bigint) with fixed-point decimals.

## Parameters

• **val**: [`FixedPointLike`](ccc.Type.FixedPointLike.md)

The value to convert, which can be a bigint, string, or number.

• **decimals**: `number`= `8`

The number of decimal places for the fixed-point representation. Default is 8.

## Returns

[`FixedPoint`](ccc.Type.FixedPoint.md)

A FixedPoint (bigint) representing the value with fixed-point decimals.

## Example

```typescript
const fixedPoint = fixedPointFrom(1.23456789, 8); // Outputs 123456789n
const fixedPointFromString = fixedPointFrom("1.23456789", 8); // Outputs 123456789n
const fixedPointFromNumber = fixedPointFrom(1.23456789, 8); // Outputs 123456789n
```

## Source

[fixedPoint/index.ts:59](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/fixedPoint/index.ts#L59)
