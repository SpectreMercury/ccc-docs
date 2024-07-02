**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / ckbHash

# Function: ckbHash()

> **ckbHash**(`data`): `Hex`

Computes the CKB hash of the given data using the Blake2b algorithm.

## Parameters

• **data**: `BytesLike`

The data to hash.

## Returns

`Hex`

The hexadecimal string representation of the hash.

## Example

```typescript
const hash = ckbHash("some data"); // Outputs something like "0x..."
```

## Source

hasher/index.ts:74
