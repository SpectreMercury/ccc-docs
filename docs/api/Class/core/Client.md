**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Client

# Class: `abstract` Client

## Extended by

- `ClientJsonRpc`

## Constructors

### new Client()

> **new Client**(): `Client`

#### Returns

`Client`

## Accessors

### addressPrefix

> `get` `abstract` **addressPrefix**(): `string`

#### Returns

`string`

#### Source

client/client.ts:30

***

### url

> `get` `abstract` **url**(): `string`

#### Returns

`string`

#### Source

client/client.ts:29

## Methods

### findCells()

> **findCells**(`key`, `order`?, `limit`?): `AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

• **order?**: `"asc"` \| `"desc"`

• **limit?**: `number`= `10`

#### Returns

`AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Source

client/client.ts:70

***

### findCellsByLockAndType()

> **findCellsByLockAndType**(`lock`, `type`, `withData`): `AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Parameters

• **lock**: `ScriptLike`

• **type**: `ScriptLike`

• **withData**: `boolean`= `true`

#### Returns

`AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Source

client/client.ts:94

***

### findCellsPaged()

> `abstract` **findCellsPaged**(`key`, `order`?, `limit`?, `after`?): `Promise`\<`ClientFindCellsResponse`\>

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

• **order?**: `"asc"` \| `"desc"`

• **limit?**: `NumLike`

• **after?**: `string`

#### Returns

`Promise`\<`ClientFindCellsResponse`\>

#### Source

client/client.ts:63

***

### getBalance()

> **getBalance**(`locks`): `Promise`\<`bigint`\>

#### Parameters

• **locks**: `ScriptLike`[]

#### Returns

`Promise`\<`bigint`\>

#### Source

client/client.ts:124

***

### getBalanceSingle()

> **getBalanceSingle**(`lock`): `Promise`\<`bigint`\>

#### Parameters

• **lock**: `ScriptLike`

#### Returns

`Promise`\<`bigint`\>

#### Source

client/client.ts:112

***

### getCell()

> **getCell**(`outPoint`): `Promise`\<`null` \| `Cell`\>

#### Parameters

• **outPoint**: `OutPointLike`

#### Returns

`Promise`\<`null` \| `Cell`\>

#### Source

client/client.ts:44

***

### getCellsCapacity()

> `abstract` **getCellsCapacity**(`key`): `Promise`\<`bigint`\>

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

#### Returns

`Promise`\<`bigint`\>

#### Source

client/client.ts:110

***

### getKnownScript()

> `abstract` **getKnownScript**(`script`): `Promise`\<`Pick`\<`Script`, `"codeHash"` \| `"hashType"`\>\>

#### Parameters

• **script**: `KnownScript`

#### Returns

`Promise`\<`Pick`\<`Script`, `"codeHash"` \| `"hashType"`\>\>

#### Source

client/client.ts:32

***

### getTransaction()

> `abstract` **getTransaction**(`txHash`): `Promise`\<`null` \| `ClientTransactionResponse`\>

#### Parameters

• **txHash**: `BytesLike`

#### Returns

`Promise`\<`null` \| `ClientTransactionResponse`\>

#### Source

client/client.ts:40

***

### sendTransaction()

> `abstract` **sendTransaction**(`transaction`, `validator`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **transaction**: `TransactionLike`

• **validator?**: `OutputsValidator`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

client/client.ts:36
