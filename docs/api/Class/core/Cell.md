[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / Cell

# Class: Cell

## Constructors

### new Cell()

> **new Cell**(`outPoint`, `cellOutput`, `outputData`, `blockNumber`): [`Cell`](ccc.Class.Cell.md)

Creates an instance of Cell.

#### Parameters

• **outPoint**: [`OutPoint`](ccc.Class.OutPoint.md)

The output point of the cell.

• **cellOutput**: [`CellOutput`](ccc.Class.CellOutput.md)

The cell output of the cell.

• **outputData**: \`0x$\{string\}\`

The output data of the cell.

• **blockNumber**: `bigint`

The block number of the cell.

#### Returns

[`Cell`](ccc.Class.Cell.md)

#### Source

[ckb/transaction.ts:297](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L297)

## Properties

### blockNumber

> **blockNumber**: `bigint`

The block number of the cell.

#### Source

[ckb/transaction.ts:301](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L301)

***

### cellOutput

> **cellOutput**: [`CellOutput`](ccc.Class.CellOutput.md)

The cell output of the cell.

#### Source

[ckb/transaction.ts:299](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L299)

***

### outPoint

> **outPoint**: [`OutPoint`](ccc.Class.OutPoint.md)

The output point of the cell.

#### Source

[ckb/transaction.ts:298](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L298)

***

### outputData

> **outputData**: \`0x$\{string\}\`

The output data of the cell.

#### Source

[ckb/transaction.ts:300](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L300)

## Methods

### from()

> `static` **from**(`cell`): [`Cell`](ccc.Class.Cell.md)

Creates a Cell instance from a CellLike object.

#### Parameters

• **cell**: [`CellLike`](ccc.Type.CellLike.md)

A CellLike object or an instance of Cell.

#### Returns

[`Cell`](ccc.Class.Cell.md)

A Cell instance.

#### Source

[ckb/transaction.ts:311](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L311)
