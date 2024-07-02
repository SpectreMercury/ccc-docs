[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / WitnessArgs

# Class: WitnessArgs

## Constructors

### new WitnessArgs()

> **new WitnessArgs**(`lock`?, `inputType`?, `outputType`?): [`WitnessArgs`](ccc.Class.WitnessArgs.md)

Creates an instance of WitnessArgs.

#### Parameters

• **lock?**: \`0x$\{string\}\`

The optional lock field of the witness.

• **inputType?**: \`0x$\{string\}\`

The optional input type field of the witness.

• **outputType?**: \`0x$\{string\}\`

The optional output type field of the witness.

#### Returns

[`WitnessArgs`](ccc.Class.WitnessArgs.md)

#### Source

[ckb/transaction.ts:568](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L568)

## Properties

### inputType?

> `optional` **inputType**: \`0x$\{string\}\`

The optional input type field of the witness.

#### Source

[ckb/transaction.ts:570](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L570)

***

### lock?

> `optional` **lock**: \`0x$\{string\}\`

The optional lock field of the witness.

#### Source

[ckb/transaction.ts:569](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L569)

***

### outputType?

> `optional` **outputType**: \`0x$\{string\}\`

The optional output type field of the witness.

#### Source

[ckb/transaction.ts:571](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L571)

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the WitnessArgs instance to molecule data format.

#### Returns

`object`

An object representing the witness arguments in molecule data format.

##### inputType

> **inputType**: `undefined` \| `Uint8Array`

##### lock

> **lock**: `undefined` \| `Uint8Array`

##### outputType

> **outputType**: `undefined` \| `Uint8Array`

#### Source

[ckb/transaction.ts:608](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L608)

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the WitnessArgs instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the witness arguments bytes.

#### Example

```typescript
const witnessArgsBytes = witnessArgs.toBytes();
```

#### Source

[ckb/transaction.ts:627](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L627)

***

### from()

> `static` **from**(`witnessArgs`): [`WitnessArgs`](ccc.Class.WitnessArgs.md)

Creates a WitnessArgs instance from a WitnessArgsLike object.

#### Parameters

• **witnessArgs**: [`WitnessArgsLike`](ccc.Type.WitnessArgsLike.md)

A WitnessArgsLike object or an instance of WitnessArgs.

#### Returns

[`WitnessArgs`](ccc.Class.WitnessArgs.md)

A WitnessArgs instance.

#### Example

```typescript
const witnessArgs = WitnessArgs.from({
  lock: "0x...",
  inputType: "0x...",
  outputType: "0x..."
});
```

#### Source

[ckb/transaction.ts:590](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L590)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`WitnessArgs`](ccc.Class.WitnessArgs.md)

Creates a WitnessArgs instance from a byte-like value or molecule WitnessArgs.

#### Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md) \| `WitnessArgs`

The byte-like value or molecule WitnessArgs to convert.

#### Returns

[`WitnessArgs`](ccc.Class.WitnessArgs.md)

A WitnessArgs instance.

#### Example

```typescript
const witnessArgs = WitnessArgs.fromBytes(new Uint8Array([/* witness args bytes */]));
```

#### Source

[ckb/transaction.ts:643](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L643)
