**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / fixedPointFrom

# Function: fixedPointFrom()

> **fixedPointFrom**(`val`, `decimals`): `FixedPoint`

Converts a FixedPointLike value to a FixedPoint (bigint) with fixed-point decimals.

## Parameters

• **val**: `FixedPointLike`

The value to convert, which can be a bigint, string, or number.

• **decimals**: `number`= `8`

The number of decimal places for the fixed-point representation. Default is 8.

## Returns

`FixedPoint`

A FixedPoint (bigint) representing the value with fixed-point decimals.

## Example

```typescript
const fixedPoint = fixedPointFrom(1.23456789, 8); // Outputs 123456789n
const fixedPointFromString = fixedPointFrom("1.23456789", 8); // Outputs 123456789n
const fixedPointFromNumber = fixedPointFrom(1.23456789, 8); // Outputs 123456789n
```

## Source

fixedPoint/index.ts:59
