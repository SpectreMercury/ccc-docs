[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / ClientJsonRpc

# Class: `abstract` ClientJsonRpc

An abstract class implementing JSON-RPC client functionality for a specific URL and timeout.
Provides methods for sending transactions and building JSON-RPC payloads.

## Extends

- [`Client`](ccc.Class.Client.md)

## Extended by

- [`ClientPublicMainnet`](ccc.Class.ClientPublicMainnet.md)
- [`ClientPublicTestnet`](ccc.Class.ClientPublicTestnet.md)

## Constructors

### new ClientJsonRpc()

> **new ClientJsonRpc**(`url_`, `timeout`): [`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md)

Creates an instance of ClientJsonRpc.

#### Parameters

• **url\_**: `string`

• **timeout**: `number`= `30000`

The timeout for requests in milliseconds, default is 30000.

#### Returns

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md)

#### Overrides

[`Client`](ccc.Class.Client.md).[`constructor`](ccc.Class.Client.md#constructors)

#### Source

[client/jsonRpc/index.ts:51](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L51)

## Properties

### findCellsPaged()

> **findCellsPaged**: (`key`, `order`?, `limit`?, `after`?) => `Promise`\<[`ClientFindCellsResponse`](ccc.Type.ClientFindCellsResponse.md)\>

find cells from node.

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

The search key of cells.

• **order?**: `"asc"` \| `"desc"`

The order of cells.

• **limit?**: [`NumLike`](ccc.Type.NumLike.md)

The max return size of cells.

• **after?**: `string`

Pagination parameter.

#### Returns

`Promise`\<[`ClientFindCellsResponse`](ccc.Type.ClientFindCellsResponse.md)\>

#### Overrides

[`Client`](ccc.Class.Client.md).[`findCellsPaged`](ccc.Class.Client.md#findcellspaged)

#### Source

[client/jsonRpc/index.ts:108](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L108)

***

### getCellsCapacity()

> **getCellsCapacity**: (`key`) => `Promise`\<`bigint`\>

get cells capacity from node.

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

The search key of cells.

#### Returns

`Promise`\<`bigint`\>

#### Overrides

[`Client`](ccc.Class.Client.md).[`getCellsCapacity`](ccc.Class.Client.md#getcellscapacity)

#### Source

[client/jsonRpc/index.ts:130](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L130)

***

### getTransaction()

> **getTransaction**: (`txHash`) => `Promise`\<[`ClientTransactionResponse`](ccc.Type.ClientTransactionResponse.md)\>

Get a transaction from node.

#### Parameters

• **txHash**: [`BytesLike`](ccc.Type.BytesLike.md)

The hash of the transaction.

#### Returns

`Promise`\<[`ClientTransactionResponse`](ccc.Type.ClientTransactionResponse.md)\>

#### Overrides

[`Client`](ccc.Class.Client.md).[`getTransaction`](ccc.Class.Client.md#gettransaction)

#### Source

[client/jsonRpc/index.ts:92](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L92)

***

### sendTransaction()

> **sendTransaction**: (`transaction`, `validator`?) => `Promise`\<\`0x$\{string\}\`\>

Send a transaction to node.

#### Parameters

• **transaction**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to send.

• **validator?**: [`OutputsValidator`](ccc.Type.OutputsValidator.md)

"passthrough": Disable validation. "well_known_scripts_only": Only accept well known scripts in the transaction.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

[`Client`](ccc.Class.Client.md).[`sendTransaction`](ccc.Class.Client.md#sendtransaction)

#### Source

[client/jsonRpc/index.ts:76](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L76)

***

### timeout

> `private` `readonly` **timeout**: `number` = `30000`

The timeout for requests in milliseconds, default is 30000.

#### Source

[client/jsonRpc/index.ts:53](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L53)

***

### url\_

> `private` `readonly` **url\_**: `string`

#### Source

[client/jsonRpc/index.ts:52](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L52)

## Accessors

### addressPrefix

> `get` `abstract` **addressPrefix**(): `string`

#### Returns

`string`

#### Source

[client/client.ts:30](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L30)

***

### url

> `get` **url**(): `string`

Returns the URL of the JSON-RPC server.

#### Returns

`string`

The URL of the JSON-RPC server.

#### Source

[client/jsonRpc/index.ts:64](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L64)

## Methods

### buildSender()

> **buildSender**(`rpcMethod`, `inTransformers`, `outTransformer`?): (...`req`) => `Promise`\<`unknown`\>

Builds a sender function for a JSON-RPC method.

#### Parameters

• **rpcMethod**: `string`

The JSON-RPC method.

• **inTransformers**: (`undefined` \| (`_`) => `unknown`)[]

An array of input transformers.

• **outTransformer?**

An output transformer function.

#### Returns

`Function`

A function that sends a JSON-RPC request with the given method and transformed parameters.

##### Parameters

• ...**req**: `unknown`[]

##### Returns

`Promise`\<`unknown`\>

#### Source

[client/jsonRpc/index.ts:145](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L145)

***

### findCells()

> **findCells**(`key`, `order`?, `limit`?): `AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Parameters

• **key**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

• **order?**: `"asc"` \| `"desc"`

• **limit?**: `number`= `10`

#### Returns

`AsyncGenerator`\<[`Cell`](ccc.Class.Cell.md), `any`, `unknown`\>

#### Inherited from

[`Client`](ccc.Class.Client.md).[`findCells`](ccc.Class.Client.md#findcells)

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

#### Inherited from

[`Client`](ccc.Class.Client.md).[`findCellsByLockAndType`](ccc.Class.Client.md#findcellsbylockandtype)

#### Source

[client/client.ts:94](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L94)

***

### getBalance()

> **getBalance**(`locks`): `Promise`\<`bigint`\>

#### Parameters

• **locks**: [`ScriptLike`](ccc.Type.ScriptLike.md)[]

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

[`Client`](ccc.Class.Client.md).[`getBalance`](ccc.Class.Client.md#getbalance)

#### Source

[client/client.ts:124](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L124)

***

### getBalanceSingle()

> **getBalanceSingle**(`lock`): `Promise`\<`bigint`\>

#### Parameters

• **lock**: [`ScriptLike`](ccc.Type.ScriptLike.md)

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

[`Client`](ccc.Class.Client.md).[`getBalanceSingle`](ccc.Class.Client.md#getbalancesingle)

#### Source

[client/client.ts:112](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L112)

***

### getCell()

> **getCell**(`outPoint`): `Promise`\<`null` \| [`Cell`](ccc.Class.Cell.md)\>

#### Parameters

• **outPoint**: [`OutPointLike`](ccc.Type.OutPointLike.md)

#### Returns

`Promise`\<`null` \| [`Cell`](ccc.Class.Cell.md)\>

#### Inherited from

[`Client`](ccc.Class.Client.md).[`getCell`](ccc.Class.Client.md#getcell)

#### Source

[client/client.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L44)

***

### getKnownScript()

> `abstract` **getKnownScript**(`script`): `Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Parameters

• **script**: [`KnownScript`](ccc.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Inherited from

[`Client`](ccc.Class.Client.md).[`getKnownScript`](ccc.Class.Client.md#getknownscript)

#### Source

[client/client.ts:32](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L32)

***

### send()

> **send**(`payload`): `Promise`\<`unknown`\>

Sends a JSON-RPC request to the server.

#### Parameters

• **payload**: `JsonRpcPayload`

The JSON-RPC payload to send.

#### Returns

`Promise`\<`unknown`\>

The result of the JSON-RPC request.

#### Throws

Will throw an error if the response ID does not match the request ID, or if the response contains an error.

#### Source

[client/jsonRpc/index.ts:177](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L177)

***

### buildPayload()

> `static` **buildPayload**(`method`, `req`): `JsonRpcPayload`

Builds a JSON-RPC payload for the given method and parameters.

#### Parameters

• **method**: `string`

The JSON-RPC method name.

• **req**: `unknown`[]

The parameters for the JSON-RPC method.

#### Returns

`JsonRpcPayload`

The JSON-RPC payload.

#### Source

[client/jsonRpc/index.ts:213](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L213)
