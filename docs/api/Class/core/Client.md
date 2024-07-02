[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / Client

# Class: `abstract` Client

## Extended by

- [`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md)

## Constructors

### new Client()

> **new Client**(): [`Client`](ccc.Class.Client.md)

#### Returns

[`Client`](ccc.Class.Client.md)

## Accessors

### addressPrefix

> `get` `abstract` **addressPrefix**(): `string`

#### Returns

`string`

#### Source

[client/client.ts:30](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L30)

***

### url

> `get` `abstract` **url**(): `string`

#### Returns

`string`

#### Source

[client/client.ts:29](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L29)

## Methods

### findCells()

> **findCells**(`key`, `order`?, `limit`?): `AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

• **order?**: `"asc"` \| `"desc"`

• **limit?**: `number`= `10`

#### Returns

`AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Source

[client/client.ts:70](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L70)

***

### findCellsByLockAndType()

> **findCellsByLockAndType**(`lock`, `type`, `withData`): `AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Parameters

• **lock**: [`ScriptLike`](ccc.Type.ScriptLike.md)

• **type**: [`ScriptLike`](ccc.Type.ScriptLike.md)

• **withData**: `boolean`= `true`

#### Returns

`AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Source

[client/client.ts:94](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L94)

***

### findCellsPaged()

> `abstract` **findCellsPaged**(`key`, `order`?, `limit`?, `after`?): `Promise`\<[`ClientFindCellsResponse`](ccc.Type.ClientFindCellsResponse.md)\>

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

• **order?**: `"asc"` \| `"desc"`

• **limit?**: [`NumLike`](ccc.Type.NumLike.md)

• **after?**: `string`

#### Returns

`Promise`\<[`ClientFindCellsResponse`](ccc.Type.ClientFindCellsResponse.md)\>

#### Source

[client/client.ts:63](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L63)

***

### getBalance()

> **getBalance**(`locks`): `Promise`\<`bigint`\>

#### Parameters

• **locks**: [`ScriptLike`](ccc.Type.ScriptLike.md)[]

#### Returns

`Promise`\<`bigint`\>

#### Source

[client/client.ts:124](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L124)

***

### getBalanceSingle()

> **getBalanceSingle**(`lock`): `Promise`\<`bigint`\>

#### Parameters

• **lock**: [`ScriptLike`](ccc.Type.ScriptLike.md)

#### Returns

`Promise`\<`bigint`\>

#### Source

[client/client.ts:112](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L112)

***

### getCell()

> **getCell**(`outPoint`): `Promise`\<`null` \| [`Cell`](ccc.Class.Cell.md)\>

#### Parameters

• **outPoint**: [`OutPointLike`](ccc.Type.OutPointLike.md)

#### Returns

`Promise`\<`null` \| [`Cell`](ccc.Class.Cell.md)\>

#### Source

[client/client.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L44)

***

### getCellsCapacity()

> `abstract` **getCellsCapacity**(`key`): `Promise`\<`bigint`\>

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

#### Returns

`Promise`\<`bigint`\>

#### Source

[client/client.ts:110](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L110)

***

### getKnownScript()

> `abstract` **getKnownScript**(`script`): `Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Parameters

• **script**: [`KnownScript`](ccc.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Source

[client/client.ts:32](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L32)

***

### getTransaction()

> `abstract` **getTransaction**(`txHash`): `Promise`\<`null` \| [`ClientTransactionResponse`](ccc.Type.ClientTransactionResponse.md)\>

#### Parameters

• **txHash**: [`BytesLike`](ccc.Type.BytesLike.md)

#### Returns

`Promise`\<`null` \| [`ClientTransactionResponse`](ccc.Type.ClientTransactionResponse.md)\>

#### Source

[client/client.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L40)

***

### sendTransaction()

> `abstract` **sendTransaction**(`transaction`, `validator`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **transaction**: [`TransactionLike`](ccc.Type.TransactionLike.md)

• **validator?**: [`OutputsValidator`](ccc.Type.OutputsValidator.md)

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

[client/client.ts:36](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L36)
