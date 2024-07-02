**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / CellDep

# Class: CellDep

## Constructors

### new CellDep()

> **new CellDep**(`outPoint`, `depType`): `CellDep`

Creates an instance of CellDep.

#### Parameters

• **outPoint**: `OutPoint`

The outpoint of the cell dependency.

• **depType**: `DepType`

The dependency type.

#### Returns

`CellDep`

#### Source

ckb/transaction.ts:472

## Properties

### depType

> **depType**: `DepType`

The dependency type.

#### Source

ckb/transaction.ts:474

***

### outPoint

> **outPoint**: `OutPoint`

The outpoint of the cell dependency.

#### Source

ckb/transaction.ts:473

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

ckb/transaction.ts:509

***

### fromBytes()

> **fromBytes**(`bytes`): `CellDep`

Creates a CellDep instance from a byte-like value or molecule CellDep.

#### Parameters

• **bytes**: `BytesLike` \| `CellDep`

The byte-like value or molecule CellDep to convert.

#### Returns

`CellDep`

A CellDep instance.

#### Example

```typescript
const cellDep = CellDep.fromBytes(new Uint8Array([/* cell dep bytes */]));
```

#### Source

ckb/transaction.ts:543

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

ckb/transaction.ts:527

***

### from()

> `static` **from**(`cellDep`): `CellDep`

Creates a CellDep instance from a CellDepLike object.

#### Parameters

• **cellDep**: `CellDepLike`

A CellDepLike object or an instance of CellDep.

#### Returns

`CellDep`

A CellDep instance.

#### Example

```typescript
const cellDep = CellDep.from({
  outPoint: { txHash: "0x...", index: 0 },
  depType: "depGroup"
});
```

#### Source

ckb/transaction.ts:492
