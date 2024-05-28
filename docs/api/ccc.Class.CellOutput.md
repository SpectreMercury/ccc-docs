[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / CellOutput

# Class: CellOutput

## Constructors

### new CellOutput()

> **new CellOutput**(`capacity`, `lock`, `type`?): [`CellOutput`](ccc.Class.CellOutput.md)

Creates an instance of CellOutput.

#### Parameters

• **capacity**: `bigint`

The capacity of the cell.

• **lock**: [`Script`](ccc.Class.Script.md)

The lock script of the cell.

• **type?**: [`Script`](ccc.Class.Script.md)

The optional type script of the cell.

#### Returns

[`CellOutput`](ccc.Class.CellOutput.md)

#### Source

[ckb/transaction.ts:186](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L186)

## Properties

### capacity

> **capacity**: `bigint`

The capacity of the cell.

#### Source

[ckb/transaction.ts:187](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L187)

***

### lock

> **lock**: [`Script`](ccc.Class.Script.md)

The lock script of the cell.

#### Source

[ckb/transaction.ts:188](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L188)

***

### type?

> `optional` **type**: [`Script`](ccc.Class.Script.md)

The optional type script of the cell.

#### Source

[ckb/transaction.ts:189](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L189)

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the CellOutput instance to molecule data format.

#### Returns

`object`

An object representing the cell output in molecule data format.

##### capacity

> **capacity**: `Uint8Array`

##### lock

> **lock**: `object`

##### lock.args

> **args**: `Uint8Array`

##### lock.codeHash

> **codeHash**: `Uint8Array`

##### lock.hashType

> **hashType**: `Uint8Array`

##### type

> **type**: `undefined` \| `object`

#### Source

[ckb/transaction.ts:226](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L226)

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the CellOutput instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the cell output bytes.

#### Example

```typescript
const cellOutputBytes = cellOutput.toBytes();
```

#### Source

[ckb/transaction.ts:245](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L245)

***

### from()

> `static` **from**(`cellOutput`): [`CellOutput`](ccc.Class.CellOutput.md)

Creates a CellOutput instance from a CellOutputLike object.

#### Parameters

• **cellOutput**: [`CellOutputLike`](ccc.Type.CellOutputLike.md)

A CellOutputLike object or an instance of CellOutput.

#### Returns

[`CellOutput`](ccc.Class.CellOutput.md)

A CellOutput instance.

#### Example

```typescript
const cellOutput = CellOutput.from({
  capacity: 1000n,
  lock: { codeHash: "0x...", hashType: "type", args: "0x..." },
  type: { codeHash: "0x...", hashType: "type", args: "0x..." }
});
```

#### Source

[ckb/transaction.ts:208](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L208)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`CellOutput`](ccc.Class.CellOutput.md)

Creates a CellOutput instance from a byte-like value or molecule CellOutput.

#### Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md) \| `CellOutput`

The byte-like value or molecule CellOutput to convert.

#### Returns

[`CellOutput`](ccc.Class.CellOutput.md)

A CellOutput instance.

#### Example

```typescript
const cellOutput = CellOutput.fromBytes(new Uint8Array([/* cell output bytes */]));
```

#### Source

[ckb/transaction.ts:261](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L261)
