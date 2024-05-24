[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/molecule.advanced/generated](ckb.molecule.advanced.generated.md) / RawHeader

# Class: RawHeader

## Constructors

### new RawHeader()

> **new RawHeader**(`reader`, `__namedParameters`): [`RawHeader`](ckb.molecule.advanced.generated.Class.RawHeader.md)

#### Parameters

• **reader**: `any`

• **\_\_namedParameters**= `{}`

• **\_\_namedParameters.validate**: `undefined` \| `boolean`= `true`

#### Returns

[`RawHeader`](ckb.molecule.advanced.generated.Class.RawHeader.md)

#### Source

[ckb/molecule.advanced/generated.js:1160](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1160)

## Properties

### view

> **view**: `DataView`

#### Source

[ckb/molecule.advanced/generated.js:1161](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1161)

## Methods

### getCompactTarget()

> **getCompactTarget**(): [`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Returns

[`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Source

[ckb/molecule.advanced/generated.js:1173](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1173)

***

### getDao()

> **getDao**(): [`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Returns

[`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Source

[ckb/molecule.advanced/generated.js:1314](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1314)

***

### getEpoch()

> **getEpoch**(): [`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Returns

[`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Source

[ckb/molecule.advanced/generated.js:1203](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1203)

***

### getExtraHash()

> **getExtraHash**(): [`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Returns

[`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Source

[ckb/molecule.advanced/generated.js:1287](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1287)

***

### getNumber()

> **getNumber**(): [`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Returns

[`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Source

[ckb/molecule.advanced/generated.js:1193](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1193)

***

### getParentHash()

> **getParentHash**(): [`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Returns

[`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Source

[ckb/molecule.advanced/generated.js:1218](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1218)

***

### getProposalsHash()

> **getProposalsHash**(): [`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Returns

[`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Source

[ckb/molecule.advanced/generated.js:1262](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1262)

***

### getTimestamp()

> **getTimestamp**(): [`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Returns

[`Uint64`](ckb.molecule.advanced.generated.Class.Uint64.md)

#### Source

[ckb/molecule.advanced/generated.js:1183](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1183)

***

### getTransactionsRoot()

> **getTransactionsRoot**(): [`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Returns

[`Byte32`](ckb.molecule.advanced.generated.Class.Byte32.md)

#### Source

[ckb/molecule.advanced/generated.js:1239](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1239)

***

### getVersion()

> **getVersion**(): [`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Returns

[`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Source

[ckb/molecule.advanced/generated.js:1167](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1167)

***

### validate()

> **validate**(`compatible`): `void`

#### Parameters

• **compatible**: `boolean`= `false`

#### Returns

`void`

#### Source

[ckb/molecule.advanced/generated.js:1343](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1343)

***

### size()

> `static` **size**(): `number`

#### Returns

`number`

#### Source

[ckb/molecule.advanced/generated.js:1356](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1356)
