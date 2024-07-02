**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Hasher

# Class: Hasher

## Constructors

### new Hasher()

> **new Hasher**(`outLength`, `personal`): `Hasher`

Creates an instance of Hasher.

#### Parameters

• **outLength**: `number`= `32`

The output length of the hash in bytes. Default is 32.

• **personal**: `string`= `CKB_BLAKE2B_PERSONAL`

The personal string for the Blake2b algorithm. Default is CKB_BLAKE2B_PERSONAL.

#### Returns

`Hasher`

#### Source

hasher/index.ts:16

## Properties

### hasher

> `private` `readonly` **hasher**: `Blake2b`

#### Source

hasher/index.ts:7

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

hasher/index.ts:57

***

### update()

> **update**(`data`): `Hasher`

Updates the hash with the given data.

#### Parameters

• **data**: `BytesLike`

The data to update the hash with.

#### Returns

`Hasher`

The current Hasher instance for chaining.

#### Example

```typescript
const hasher = new Hasher();
hasher.update("some data").update("more data");
const hash = hasher.digest();
```

#### Source

hasher/index.ts:39
