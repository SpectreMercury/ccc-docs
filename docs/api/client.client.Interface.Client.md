[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [client/client](client.client.md) / Client

# Interface: Client

## Methods

### getAddressPrefix()

> **getAddressPrefix**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[client/client.ts:16](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L16)

***

### getKnownScript()

> **getKnownScript**(`script`): `Promise`\<`Omit`\<[`ScriptLike`](ckb.script.Type.ScriptLike.md), `"args"`\>\>

#### Parameters

• **script**: [`KnownScript`](client.client.Enumeration.KnownScript.md)

#### Returns

`Promise`\<`Omit`\<[`ScriptLike`](ckb.script.Type.ScriptLike.md), `"args"`\>\>

#### Source

[client/client.ts:17](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L17)

***

### getUrl()

> **getUrl**(): `string`

#### Returns

`string`

#### Source

[client/client.ts:14](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L14)

***

### sendTransaction()

> **sendTransaction**(`transaction`, `validator`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **transaction**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

• **validator?**: [`OutputsValidator`](client.clientTypes.Type.OutputsValidator.md)

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

[client/client.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/client/client.ts#L19)
