**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / numBeFromBytes

# Function: numBeFromBytes()

> **numBeFromBytes**(`val`): `Num`

Converts a byte array to a Num (bigint) assuming big-endian order.

## Parameters

• **val**: `BytesLike`

The byte array to convert.

## Returns

`Num`

A Num (bigint) representing the numeric value.

## Example

```typescript
const num = numBeFromBytes(new Uint8Array([0, 0, 48, 57])); // Outputs 12345n
```

## Source

num/index.ts:152
