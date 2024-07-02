**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / hashTypeToBytes

# Function: hashTypeToBytes()

> **hashTypeToBytes**(`hashType`): `Bytes`

Converts a HashTypeLike value to its corresponding byte representation.

## Parameters

• **hashType**: `HashTypeLike`

The hash type value to convert.

## Returns

`Bytes`

A Uint8Array containing the byte representation of the hash type.

## Example

```typescript
const hashTypeBytes = hashTypeToBytes("type"); // Outputs Uint8Array [0]
```

## Source

ckb/script.ts:61
