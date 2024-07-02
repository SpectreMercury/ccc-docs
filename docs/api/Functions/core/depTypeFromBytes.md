**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / depTypeFromBytes

# Function: depTypeFromBytes()

> **depTypeFromBytes**(`bytes`): `DepType`

Converts a byte-like value to a DepType.

## Parameters

• **bytes**: `BytesLike`

The byte-like value to convert.

## Returns

`DepType`

The corresponding DepType.

## Throws

Will throw an error if the input bytes do not correspond to a valid dep type.

## Example

```typescript
const depType = depTypeFromBytes(new Uint8Array([1])); // Outputs "code"
```

## Source

ckb/transaction.ts:85
