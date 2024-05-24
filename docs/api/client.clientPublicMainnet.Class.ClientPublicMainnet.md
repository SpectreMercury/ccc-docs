[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [client/clientPublicMainnet](client.clientPublicMainnet.md) / ClientPublicMainnet

# Class: ClientPublicMainnet

An abstract class implementing JSON-RPC client functionality for a specific URL and timeout.
Provides methods for sending transactions and building JSON-RPC payloads.

## Extends

- [`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md)

## Constructors

### new ClientPublicMainnet()

> **new ClientPublicMainnet**(`timeout`?): [`ClientPublicMainnet`](client.clientPublicMainnet.Class.ClientPublicMainnet.md)

#### Parameters

• **timeout?**: `number`

#### Returns

[`ClientPublicMainnet`](client.clientPublicMainnet.Class.ClientPublicMainnet.md)

#### Overrides

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`constructor`](client.jsonRpc.Class.ClientJsonRpc.md#constructors)

#### Source

[client/clientPublicMainnet.ts:7](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicMainnet.ts#L7)

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

#### Inherited from

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`buildSender`](client.jsonRpc.Class.ClientJsonRpc.md#buildsender)

#### Source

[client/jsonRpc/index.ts:76](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L76)

***

### getAddressPrefix()

> **getAddressPrefix**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[client/clientPublicMainnet.ts:11](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicMainnet.ts#L11)

***

### getKnownScript()

> **getKnownScript**(`script`): `Promise`\<`Omit`\<[`ScriptLike`](ckb.script.Type.ScriptLike.md), `"args"`\>\>

#### Parameters

• **script**: [`KnownScript`](client.client.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Omit`\<[`ScriptLike`](ckb.script.Type.ScriptLike.md), `"args"`\>\>

#### Source

[client/clientPublicMainnet.ts:15](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicMainnet.ts#L15)

***

### getUrl()

> **getUrl**(): `string`

Returns the URL of the JSON-RPC server.

#### Returns

`string`

The URL of the JSON-RPC server.

#### Inherited from

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`getUrl`](client.jsonRpc.Class.ClientJsonRpc.md#geturl)

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

#### Inherited from

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`send`](client.jsonRpc.Class.ClientJsonRpc.md#send)

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

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`sendTransaction`](client.jsonRpc.Class.ClientJsonRpc.md#sendtransaction)

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

#### Inherited from

[`ClientJsonRpc`](client.jsonRpc.Class.ClientJsonRpc.md).[`buildPayload`](client.jsonRpc.Class.ClientJsonRpc.md#buildpayload)

#### Source

[client/jsonRpc/index.ts:132](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L132)
