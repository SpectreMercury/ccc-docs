[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/script](ckb.script.md) / Script

# Class: Script

## Constructors

### new Script()

> **new Script**(`codeHash`, `hashType`, `args`): [`Script`](ckb.script.Class.Script.md)

Creates an instance of Script.

#### Parameters

• **codeHash**: \`0x$\{string\}\`

The code hash of the script.

• **hashType**: [`HashType`](ckb.script.Type.HashType.md)

The hash type of the script.

• **args**: \`0x$\{string\}\`

The arguments for the script.

#### Returns

[`Script`](ckb.script.Class.Script.md)

#### Source

[ckb/script.ts:98](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L98)

## Properties

### args

> **args**: \`0x$\{string\}\`

The arguments for the script.

#### Source

[ckb/script.ts:101](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L101)

***

### codeHash

> **codeHash**: \`0x$\{string\}\`

The code hash of the script.

#### Source

[ckb/script.ts:99](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L99)

***

### hashType

> **hashType**: [`HashType`](ckb.script.Type.HashType.md)

The hash type of the script.

#### Source

[ckb/script.ts:100](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L100)

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the Script instance to molecule data format.

#### Returns

`object`

An object representing the script in molecule data format.

##### args

> **args**: `Uint8Array`

##### codeHash

> **codeHash**: `Uint8Array`

##### hashType

> **hashType**: `Uint8Array`

#### Source

[ckb/script.ts:138](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L138)

***

### eq()

> **eq**(`val`): `boolean`

Compares the current Script instance with another ScriptLike object for equality.

#### Parameters

• **val**: [`ScriptLike`](ckb.script.Type.ScriptLike.md)

The ScriptLike object to compare with.

#### Returns

`boolean`

True if the scripts are equal, otherwise false.

#### Example

```typescript
const isEqual = script.eq(anotherScript);
```

#### Source

[ckb/script.ts:196](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L196)

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the Script instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the script bytes.

#### Example

```typescript
const scriptBytes = script.toBytes();
```

#### Source

[ckb/script.ts:157](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L157)

***

### from()

> `static` **from**(`script`): [`Script`](ckb.script.Class.Script.md)

Creates a Script instance from a ScriptLike object.

#### Parameters

• **script**: [`ScriptLike`](ckb.script.Type.ScriptLike.md)

A ScriptLike object or an instance of Script.

#### Returns

[`Script`](ckb.script.Class.Script.md)

A Script instance.

#### Example

```typescript
const script = Script.from({
  codeHash: "0x1234...",
  hashType: "type",
  args: "0xabcd..."
});
```

#### Source

[ckb/script.ts:120](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L120)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`Script`](ckb.script.Class.Script.md)

Creates a Script instance from a byte-like value or molecule Script.

#### Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md) \| [`Script`](ckb.molecule.advanced.generated.Class.Script.md)

The byte-like value or molecule Script to convert.

#### Returns

[`Script`](ckb.script.Class.Script.md)

A Script instance.

#### Example

```typescript
const script = Script.fromBytes(new Uint8Array([/* script bytes */]));
```

#### Source

[ckb/script.ts:173](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/script.ts#L173)
