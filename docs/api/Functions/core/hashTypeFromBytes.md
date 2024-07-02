**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / hashTypeFromBytes

# Function: hashTypeFromBytes()

> **hashTypeFromBytes**(`bytes`): `HashType`

Converts a byte-like value to a HashType.

## Parameters

• **bytes**: `BytesLike`

The byte-like value to convert.

## Returns

`HashType`

The corresponding HashType.

## Throws

Will throw an error if the input bytes do not correspond to a valid hash type.

## Example

```typescript
const hashType = hashTypeFromBytes(new Uint8Array([0])); // Outputs "type"
```

## Source

ckb/script.ts:79
