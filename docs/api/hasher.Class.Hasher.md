[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [hasher](hasher.md) / Hasher

# Class: Hasher

## Constructors

### new Hasher()

> **new Hasher**(`outLength`, `personal`): [`Hasher`](hasher.Class.Hasher.md)

Creates an instance of Hasher.

#### Parameters

• **outLength**: `number`= `32`

The output length of the hash in bytes. Default is 32.

• **personal**: `string`= `CKB_BLAKE2B_PERSONAL`

The personal string for the Blake2b algorithm. Default is CKB_BLAKE2B_PERSONAL.

#### Returns

[`Hasher`](hasher.Class.Hasher.md)

#### Source

[hasher/index.ts:16](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/hasher/index.ts#L16)

## Methods

### digest()

> **digest**(): \`0x$\{string\}\`

Finalizes the hash and returns the digest as a hexadecimal string.

#### Returns

\`0x$\{string\}\`

The hexadecimal string representation of the hash.

#### Example

```typescript
const hasher = new Hasher();
hasher.update("some data");
const hash = hasher.digest(); // Outputs something like "0x..."
```

#### Source

[hasher/index.ts:57](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/hasher/index.ts#L57)

***

### update()

> **update**(`data`): [`Hasher`](hasher.Class.Hasher.md)

Updates the hash with the given data.

#### Parameters

• **data**: [`BytesLike`](bytes.Type.BytesLike.md)

The data to update the hash with.

#### Returns

[`Hasher`](hasher.Class.Hasher.md)

The current Hasher instance for chaining.

#### Example

```typescript
const hasher = new Hasher();
hasher.update("some data").update("more data");
const hash = hasher.digest();
```

#### Source

[hasher/index.ts:39](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/hasher/index.ts#L39)
