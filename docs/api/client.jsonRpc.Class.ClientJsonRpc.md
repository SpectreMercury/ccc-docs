[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [client/jsonRpc](client.jsonRpc.md) / ClientJsonRpc

# Class: `abstract` ClientJsonRpc

An abstract class implementing JSON-RPC client functionality for a specific URL and timeout.
Provides methods for sending transactions and building JSON-RPC payloads.

## Extends

- `Pick`\<[`Client`](client.client.Interface.Client.md), `"sendTransaction"`\>

## Extended by

- [`ClientPublicMainnet`](client.clientPublicMainnet.Class.ClientPublicMainnet.md)
- [`ClientPublicTestnet`](client.clientPublicTestnet.Class.ClientPublicTestnet.md)

## Implements

- `Pick`\<[`Client`](client.client.Interface.Client.md), `"sendTransaction"`\>

## Constructors

### new ClientJsonRpc()

> **new ClientJsonRpc**(`url`, `timeout`): [`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md)

Creates an instance of ClientJsonRpc.

#### Parameters

• **url**: `string`

The URL of the JSON-RPC server.

• **timeout**: `number`= `30000`

The timeout for requests in milliseconds, default is 30000.

#### Returns

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md)

#### Inherited from

`Pick<Client, "sendTransaction">.constructor`

#### Source

[client/jsonRpc/index.ts:45](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L45)

## Methods

### buildSender()

> **buildSender**(`__namedParameters`): (...`req`) => `Promise`\<`unknown`\>

Builds a sender function for a JSON-RPC method.

#### Parameters

• **\_\_namedParameters**: [`JsonRpcMethod`](client.jsonRpc.advanced.Type.JsonRpcMethod.md)

#### Returns

`Function`

A function that sends a JSON-RPC request with the given method and transformed parameters.

##### Parameters

• ...**req**: `unknown`[]

##### Returns

`Promise`\<`unknown`\>

#### Source

[client/jsonRpc/index.ts:76](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L76)

***

### getUrl()

> **getUrl**(): `string`

Returns the URL of the JSON-RPC server.

#### Returns

`string`

The URL of the JSON-RPC server.

#### Source

[client/jsonRpc/index.ts:63](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L63)

***

### send()

> **send**(`payload`): `Promise`\<`unknown`\>

Sends a JSON-RPC request to the server.

#### Parameters

• **payload**: [`JsonRpcPayload`](client.jsonRpc.advanced.Type.JsonRpcPayload.md)

The JSON-RPC payload to send.

#### Returns

`Promise`\<`unknown`\>

The result of the JSON-RPC request.

#### Throws

Will throw an error if the response ID does not match the request ID, or if the response contains an error.

#### Source

[client/jsonRpc/index.ts:96](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L96)

***

### sendTransaction()

> **sendTransaction**(`transaction`, `validator`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **transaction**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

• **validator?**: [`OutputsValidator`](client.clientTypes.Type.OutputsValidator.md)

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`Pick.sendTransaction`

#### Source

[client/client.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L19)

***

### buildPayload()

> `static` **buildPayload**(`method`, `req`): [`JsonRpcPayload`](client.jsonRpc.advanced.Type.JsonRpcPayload.md)

Builds a JSON-RPC payload for the given method and parameters.

#### Parameters

• **method**: `string`

The JSON-RPC method name.

• **req**: `unknown`[]

The parameters for the JSON-RPC method.

#### Returns

[`JsonRpcPayload`](client.jsonRpc.advanced.Type.JsonRpcPayload.md)

The JSON-RPC payload.

#### Source

[client/jsonRpc/index.ts:132](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L132)
