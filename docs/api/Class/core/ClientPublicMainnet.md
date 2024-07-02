[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / ClientPublicMainnet

# Class: ClientPublicMainnet

An abstract class implementing JSON-RPC client functionality for a specific URL and timeout.
Provides methods for sending transactions and building JSON-RPC payloads.

## Extends

- [`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md)

## Constructors

### new ClientPublicMainnet()

> **new ClientPublicMainnet**(`url`, `timeout`?): [`ClientPublicMainnet`](ccc.Class.ClientPublicMainnet.md)

#### Parameters

• **url**: `string`= `"https://mainnet.ckbapp.dev/"`

• **timeout?**: `number`

#### Returns

[`ClientPublicMainnet`](ccc.Class.ClientPublicMainnet.md)

#### Overrides

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`constructor`](ccc.Class.ClientJsonRpc.md#constructors)

#### Source

[client/clientPublicMainnet.ts:7](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientPublicMainnet.ts#L7)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`findCellsPaged`](ccc.Class.ClientJsonRpc.md#findcellspaged)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getCellsCapacity`](ccc.Class.ClientJsonRpc.md#getcellscapacity)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getTransaction`](ccc.Class.ClientJsonRpc.md#gettransaction)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`sendTransaction`](ccc.Class.ClientJsonRpc.md#sendtransaction)

#### Source

[client/jsonRpc/index.ts:76](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L76)

## Accessors

### addressPrefix

> `get` **addressPrefix**(): `string`

#### Returns

`string`

#### Source

[client/clientPublicMainnet.ts:11](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientPublicMainnet.ts#L11)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`buildSender`](ccc.Class.ClientJsonRpc.md#buildsender)

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

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`findCells`](ccc.Class.ClientJsonRpc.md#findcells)

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

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`findCellsByLockAndType`](ccc.Class.ClientJsonRpc.md#findcellsbylockandtype)

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

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getBalance`](ccc.Class.ClientJsonRpc.md#getbalance)

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

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getBalanceSingle`](ccc.Class.ClientJsonRpc.md#getbalancesingle)

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

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getCell`](ccc.Class.ClientJsonRpc.md#getcell)

#### Source

[client/client.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/client.ts#L44)

***

### getKnownScript()

> **getKnownScript**(`script`): `Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Parameters

• **script**: [`KnownScript`](ccc.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Pick`\<[`Script`](ccc.Class.Script.md), `"codeHash"` \| `"hashType"`\>\>

#### Overrides

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`getKnownScript`](ccc.Class.ClientJsonRpc.md#getknownscript)

#### Source

[client/clientPublicMainnet.ts:15](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientPublicMainnet.ts#L15)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`send`](ccc.Class.ClientJsonRpc.md#send)

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

#### Inherited from

[`ClientJsonRpc`](ccc.Class.ClientJsonRpc.md).[`buildPayload`](ccc.Class.ClientJsonRpc.md#buildpayload)

#### Source

[client/jsonRpc/index.ts:213](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/jsonRpc/index.ts#L213)
