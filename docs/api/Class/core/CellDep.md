[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / CellDep

# Class: CellDep

## Constructors

### new CellDep()

> **new CellDep**(`outPoint`, `depType`): [`CellDep`](ccc.Class.CellDep.md)

Creates an instance of CellDep.

#### Parameters

• **outPoint**: [`OutPoint`](ccc.Class.OutPoint.md)

The outpoint of the cell dependency.

• **depType**: [`DepType`](ccc.Type.DepType.md)

The dependency type.

#### Returns

[`CellDep`](ccc.Class.CellDep.md)

#### Source

[ckb/transaction.ts:472](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L472)

## Properties

### depType

> **depType**: [`DepType`](ccc.Type.DepType.md)

The dependency type.

#### Source

[ckb/transaction.ts:474](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L474)

***

### outPoint

> **outPoint**: [`OutPoint`](ccc.Class.OutPoint.md)

The outpoint of the cell dependency.

#### Source

[ckb/transaction.ts:473](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L473)

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the CellDep instance to molecule data format.

#### Returns

`object`

An object representing the cell dependency in molecule data format.

##### depType

> **depType**: `Uint8Array`

##### outPoint

> **outPoint**: `object`

##### outPoint.index

> **index**: `Uint8Array`

##### outPoint.txHash

> **txHash**: `Uint8Array`

#### Source

[ckb/transaction.ts:509](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L509)

***

### fromBytes()

> **fromBytes**(`bytes`): [`CellDep`](ccc.Class.CellDep.md)

Creates a CellDep instance from a byte-like value or molecule CellDep.

#### Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md) \| `CellDep`

The byte-like value or molecule CellDep to convert.

#### Returns

[`CellDep`](ccc.Class.CellDep.md)

A CellDep instance.

#### Example

```typescript
const cellDep = CellDep.fromBytes(new Uint8Array([/* cell dep bytes */]));
```

#### Source

[ckb/transaction.ts:543](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L543)

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the CellDep instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the cell dependency bytes.

#### Example

```typescript
const cellDepBytes = cellDep.toBytes();
```

#### Source

[ckb/transaction.ts:527](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L527)

***

### from()

> `static` **from**(`cellDep`): [`CellDep`](ccc.Class.CellDep.md)

Creates a CellDep instance from a CellDepLike object.

#### Parameters

• **cellDep**: [`CellDepLike`](ccc.Type.CellDepLike.md)

A CellDepLike object or an instance of CellDep.

#### Returns

[`CellDep`](ccc.Class.CellDep.md)

A CellDep instance.

#### Example

```typescript
const cellDep = CellDep.from({
  outPoint: { txHash: "0x...", index: 0 },
  depType: "depGroup"
});
```

#### Source

[ckb/transaction.ts:492](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L492)
