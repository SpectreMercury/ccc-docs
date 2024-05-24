[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/script](ckb.script.md) / hashTypeFromBytes

# Function: hashTypeFromBytes()

> **hashTypeFromBytes**(`bytes`): [`HashType`](ckb.script.Type.HashType.md)

Converts a byte-like value to a HashType.

## Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md)

The byte-like value to convert.

## Returns

[`HashType`](ckb.script.Type.HashType.md)

The corresponding HashType.

## Throws

Will throw an error if the input bytes do not correspond to a valid hash type.

## Example

```typescript
const hashType = hashTypeFromBytes(new Uint8Array([0])); // Outputs "type"
```

## Source

[ckb/script.ts:79](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L79)
