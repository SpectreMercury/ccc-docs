[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / ClientPublicTestnet

# Class: ClientPublicTestnet

## Extends

- `ClientJsonRpc`

## Constructors

### new ClientPublicTestnet()

> **new ClientPublicTestnet**(`timeout`?): [`ClientPublicTestnet`](ccc.Class.ClientPublicTestnet.md)

#### Parameters

• **timeout?**: `number`

#### Returns

[`ClientPublicTestnet`](ccc.Class.ClientPublicTestnet.md)

#### Overrides

`ClientJsonRpc.constructor`

#### Source

[client/clientPublicTestnet.ts:7](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicTestnet.ts#L7)

## Methods

### buildSender()

> **buildSender**(`__namedParameters`): (...`req`) => `Promise`\<`unknown`\>

Builds a sender function for a JSON-RPC method.

#### Parameters

• **\_\_namedParameters**: `JsonRpcMethod`

#### Returns

`Function`

A function that sends a JSON-RPC request with the given method and transformed parameters.

##### Parameters

• ...**req**: `unknown`[]

##### Returns

`Promise`\<`unknown`\>

#### Inherited from

`ClientJsonRpc.buildSender`

#### Source

[client/jsonRpc/index.ts:76](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L76)

***

### getAddressPrefix()

> **getAddressPrefix**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[client/clientPublicTestnet.ts:11](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicTestnet.ts#L11)

***

### getKnownScript()

> **getKnownScript**(`script`): `Promise`\<`Omit`\<[`ScriptLike`](ccc.Type.ScriptLike.md), `"args"`\>\>

#### Parameters

• **script**: [`KnownScript`](ccc.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Omit`\<[`ScriptLike`](ccc.Type.ScriptLike.md), `"args"`\>\>

#### Source

[client/clientPublicTestnet.ts:15](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/clientPublicTestnet.ts#L15)

***

### getUrl()

> **getUrl**(): `string`

Returns the URL of the JSON-RPC server.

#### Returns

`string`

The URL of the JSON-RPC server.

#### Inherited from

`ClientJsonRpc.getUrl`

#### Source

[client/jsonRpc/index.ts:63](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L63)

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

`ClientJsonRpc.send`

#### Throws

Will throw an error if the response ID does not match the request ID, or if the response contains an error.

#### Source

[client/jsonRpc/index.ts:96](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L96)

***

### sendTransaction()

> **sendTransaction**(`transaction`, `validator`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **transaction**: [`TransactionLike`](ccc.Type.TransactionLike.md)

• **validator?**: [`OutputsValidator`](ccc.Type.OutputsValidator.md)

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`ClientJsonRpc.sendTransaction`

#### Source

[client/client.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L19)

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

`ClientJsonRpc.buildPayload`

#### Source

[client/jsonRpc/index.ts:132](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/index.ts#L132)
