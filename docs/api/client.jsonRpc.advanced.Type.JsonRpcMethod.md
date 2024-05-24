[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [client/jsonRpc/advanced](client.jsonRpc.advanced.md) / JsonRpcMethod

# Type alias: JsonRpcMethod

> **JsonRpcMethod**: `object`

## Type declaration

### inTransformers

> **inTransformers**: ((`_`) => `unknown` \| `undefined`)[]

### method

> **method**: keyof [`Client`](client.client.Interface.Client.md)

### outTransformer()?

> `optional` **outTransformer**: (`_`) => `unknown`

#### Parameters

• **\_**: `any`

#### Returns

`unknown`

### rpcMethod

> **rpcMethod**: `string`

## Source

[client/jsonRpc/advanced.ts:23](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/jsonRpc/advanced.ts#L23)
