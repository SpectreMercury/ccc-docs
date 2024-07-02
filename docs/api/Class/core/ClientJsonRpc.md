**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / ClientJsonRpc

# Class: `abstract` ClientJsonRpc

An abstract class implementing JSON-RPC client functionality for a specific URL and timeout.
Provides methods for sending transactions and building JSON-RPC payloads.

## Extends

- `Client`

## Extended by

- `ClientPublicMainnet`
- `ClientPublicTestnet`

## Constructors

### new ClientJsonRpc()

> **new ClientJsonRpc**(`url_`, `timeout`): `ClientJsonRpc`

Creates an instance of ClientJsonRpc.

#### Parameters

• **url\_**: `string`

• **timeout**: `number`= `30000`

The timeout for requests in milliseconds, default is 30000.

#### Returns

`ClientJsonRpc`

#### Overrides

`Client`.`constructor`

#### Source

client/jsonRpc/index.ts:51

## Properties

### findCellsPaged()

> **findCellsPaged**: (`key`, `order`?, `limit`?, `after`?) => `Promise`\<`ClientFindCellsResponse`\>

find cells from node.

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

The search key of cells.

• **order?**: `"asc"` \| `"desc"`

The order of cells.

• **limit?**: `NumLike`

The max return size of cells.

• **after?**: `string`

Pagination parameter.

#### Returns

`Promise`\<`ClientFindCellsResponse`\>

#### Overrides

`Client`.`findCellsPaged`

#### Source

client/jsonRpc/index.ts:108

***

### getCellsCapacity()

> **getCellsCapacity**: (`key`) => `Promise`\<`bigint`\>

get cells capacity from node.

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

The search key of cells.

#### Returns

`Promise`\<`bigint`\>

#### Overrides

`Client`.`getCellsCapacity`

#### Source

client/jsonRpc/index.ts:130

***

### getTransaction()

> **getTransaction**: (`txHash`) => `Promise`\<`ClientTransactionResponse`\>

Get a transaction from node.

#### Parameters

• **txHash**: `BytesLike`

The hash of the transaction.

#### Returns

`Promise`\<`ClientTransactionResponse`\>

#### Overrides

`Client`.`getTransaction`

#### Source

client/jsonRpc/index.ts:92

***

### sendTransaction()

> **sendTransaction**: (`transaction`, `validator`?) => `Promise`\<\`0x$\{string\}\`\>

Send a transaction to node.

#### Parameters

• **transaction**: `TransactionLike`

The transaction to send.

• **validator?**: `OutputsValidator`

"passthrough": Disable validation. "well_known_scripts_only": Only accept well known scripts in the transaction.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

`Client`.`sendTransaction`

#### Source

client/jsonRpc/index.ts:76

***

### timeout

> `private` `readonly` **timeout**: `number` = `30000`

The timeout for requests in milliseconds, default is 30000.

#### Source

client/jsonRpc/index.ts:53

***

### url\_

> `private` `readonly` **url\_**: `string`

#### Source

client/jsonRpc/index.ts:52

## Accessors

### addressPrefix

> `get` `abstract` **addressPrefix**(): `string`

#### Returns

`string`

#### Source

client/client.ts:30

***

### url

> `get` **url**(): `string`

Returns the URL of the JSON-RPC server.

#### Returns

`string`

The URL of the JSON-RPC server.

#### Source

client/jsonRpc/index.ts:64

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

client/jsonRpc/index.ts:145

***

### findCells()

> **findCells**(`key`, `order`?, `limit`?): `AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Parameters

• **key**: `ClientIndexerSearchKeyLike`

• **order?**: `"asc"` \| `"desc"`

• **limit?**: `number`= `10`

#### Returns

`AsyncGenerator`\<`Cell`, `any`, `unknown`\>

#### Inherited from

`Client`.`findCells`

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

#### Inherited from

`Client`.`findCellsByLockAndType`

#### Source

client/client.ts:94

***

### getBalance()

> **getBalance**(`locks`): `Promise`\<`bigint`\>

#### Parameters

• **locks**: `ScriptLike`[]

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

`Client`.`getBalance`

#### Source

client/client.ts:124

***

### getBalanceSingle()

> **getBalanceSingle**(`lock`): `Promise`\<`bigint`\>

#### Parameters

• **lock**: `ScriptLike`

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

`Client`.`getBalanceSingle`

#### Source

client/client.ts:112

***

### getCell()

> **getCell**(`outPoint`): `Promise`\<`null` \| `Cell`\>

#### Parameters

• **outPoint**: `OutPointLike`

#### Returns

`Promise`\<`null` \| `Cell`\>

#### Inherited from

`Client`.`getCell`

#### Source

client/client.ts:44

***

### getKnownScript()

> `abstract` **getKnownScript**(`script`): `Promise`\<`Pick`\<`Script`, `"codeHash"` \| `"hashType"`\>\>

#### Parameters

• **script**: `KnownScript`

#### Returns

`Promise`\<`Pick`\<`Script`, `"codeHash"` \| `"hashType"`\>\>

#### Inherited from

`Client`.`getKnownScript`

#### Source

client/client.ts:32

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

client/jsonRpc/index.ts:177

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

client/jsonRpc/index.ts:213
