[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [client/jsonRpc/advanced](client.jsonRpc.advanced.md) / JsonRpcTransformers

# Class: JsonRpcTransformers

## Constructors

### new JsonRpcTransformers()

> **new JsonRpcTransformers**(): [`JsonRpcTransformers`](client.jsonRpc.advanced.Class.JsonRpcTransformers.md)

#### Returns

[`JsonRpcTransformers`](client.jsonRpc.advanced.Class.JsonRpcTransformers.md)

## Methods

### toCellDep()

> `static` **toCellDep**(`cellDep`): `object`

#### Parameters

• **cellDep**: [`CellDepLike`](ckb.transaction.Type.CellDepLike.md)

#### Returns

`object`

##### dep\_type

> **dep\_type**: `string`

##### out\_point

> **out\_point**: `object`

##### out\_point.index

> **index**: \`0x$\{string\}\`

##### out\_point.tx\_hash

> **tx\_hash**: [`BytesLike`](bytes.Type.BytesLike.md) = `outPoint.txHash`

#### Source

[client/jsonRpc/advanced.ts:67](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L67)

***

### toCellInput()

> `static` **toCellInput**(`cellInput`): `object`

#### Parameters

• **cellInput**: [`CellInputLike`](ckb.transaction.Type.CellInputLike.md)

#### Returns

`object`

##### previous\_output

> **previous\_output**: `object`

##### previous\_output.index

> **index**: \`0x$\{string\}\`

##### previous\_output.tx\_hash

> **tx\_hash**: [`BytesLike`](bytes.Type.BytesLike.md) = `outPoint.txHash`

##### since

> **since**: \`0x$\{string\}\`

#### Source

[client/jsonRpc/advanced.ts:54](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L54)

***

### toCellOutput()

> `static` **toCellOutput**(`cellOutput`): `object`

#### Parameters

• **cellOutput**: [`CellOutputLike`](ckb.transaction.Type.CellOutputLike.md)

#### Returns

`object`

##### capacity

> **capacity**: \`0x$\{string\}\`

##### lock

> **lock**: `object`

##### lock.args

> **args**: [`BytesLike`](bytes.Type.BytesLike.md) = `script.args`

##### lock.code\_hash

> **code\_hash**: [`BytesLike`](bytes.Type.BytesLike.md) = `script.codeHash`

##### lock.hash\_type

> **hash\_type**: [`HashTypeLike`](ckb.script.Type.HashTypeLike.md) = `script.hashType`

##### type

> **type**: `undefined` \| `object`

#### Source

[client/jsonRpc/advanced.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L60)

***

### toDepType()

> `static` **toDepType**(`depType`): `"code"` \| `"dep_group"`

#### Parameters

• **depType**: [`DepTypeLike`](ckb.transaction.Type.DepTypeLike.md)

#### Returns

`"code"` \| `"dep_group"`

#### Source

[client/jsonRpc/advanced.ts:33](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L33)

***

### toOutPoint()

> `static` **toOutPoint**(`outPoint`): `object`

#### Parameters

• **outPoint**: [`OutPointLike`](ckb.transaction.Type.OutPointLike.md)

#### Returns

`object`

##### index

> **index**: \`0x$\{string\}\`

##### tx\_hash

> **tx\_hash**: [`BytesLike`](bytes.Type.BytesLike.md) = `outPoint.txHash`

#### Source

[client/jsonRpc/advanced.ts:48](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L48)

***

### toScript()

> `static` **toScript**(`script`): `object`

#### Parameters

• **script**: [`ScriptLike`](ckb.script.Type.ScriptLike.md)

#### Returns

`object`

##### args

> **args**: [`BytesLike`](bytes.Type.BytesLike.md) = `script.args`

##### code\_hash

> **code\_hash**: [`BytesLike`](bytes.Type.BytesLike.md) = `script.codeHash`

##### hash\_type

> **hash\_type**: [`HashTypeLike`](ckb.script.Type.HashTypeLike.md) = `script.hashType`

#### Source

[client/jsonRpc/advanced.ts:41](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L41)

***

### toTransaction()

> `static` **toTransaction**(`tx`): `object`

#### Parameters

• **tx**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

#### Returns

`object`

##### cell\_deps

> **cell\_deps**: `object`[]

##### header\_deps

> **header\_deps**: [`BytesLike`](bytes.Type.BytesLike.md)[] = `tx.headerDeps`

##### inputs

> **inputs**: `object`[]

##### outputs

> **outputs**: `object`[]

##### outputs\_data

> **outputs\_data**: [`BytesLike`](bytes.Type.BytesLike.md)[] = `tx.outputsData`

##### version

> **version**: \`0x$\{string\}\`

##### witnesses

> **witnesses**: [`BytesLike`](bytes.Type.BytesLike.md)[] = `tx.witnesses`

#### Source

[client/jsonRpc/advanced.ts:73](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L73)
