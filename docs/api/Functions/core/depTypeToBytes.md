**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / depTypeToBytes

# Function: depTypeToBytes()

> **depTypeToBytes**(`depType`): `Bytes`

Converts a DepTypeLike value to its corresponding byte representation.

## Parameters

• **depType**: `DepTypeLike`

The dep type value to convert.

## Returns

`Bytes`

A Uint8Array containing the byte representation of the dep type.

## Example

```typescript
const depTypeBytes = depTypeToBytes("code"); // Outputs Uint8Array [1]
```

## Source

ckb/transaction.ts:67
