[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerCkbScriptReadonly

# Class: SignerCkbScriptReadonly

A class extending Signer that provides read-only access to a CKB script.
This class does not support signing operations.

## Extends

- [`Signer`](ccc.Class.Signer.md)

## Constructors

### new SignerCkbScriptReadonly()

> **new SignerCkbScriptReadonly**(`client`, `script`): [`SignerCkbScriptReadonly`](ccc.Class.SignerCkbScriptReadonly.md)

Creates an instance of SignerCkbScriptReadonly.

#### Parameters

• **client**: [`Client`](ccc.Interface.Client.md)

The client instance used for communication.

• **script**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the signer.

#### Returns

[`SignerCkbScriptReadonly`](ccc.Class.SignerCkbScriptReadonly.md)

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`constructor`](ccc.Class.Signer.md#constructors)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L19)

## Properties

### client

> `readonly` **client**: [`Client`](ccc.Interface.Client.md)

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`client`](ccc.Class.Signer.md#client)

#### Source

[signer/signer.ts:12](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L12)

***

### script

> `private` `readonly` **script**: [`Script`](ccc.Class.Script.md)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:11](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L11)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`connect`](ccc.Class.Signer.md#connect)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:30](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L30)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](ccc.Class.Address.md)[]\>

Gets an array of Address objects representing the script address.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`getAddressObjs`](ccc.Class.Signer.md#getaddressobjs)

#### Example

```typescript
const addressObjs = await signer.getAddressObjs(); // Outputs the array of Address objects
```

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:57](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L57)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`getAddresses`](ccc.Class.Signer.md#getaddresses)

#### Source

[signer/signer.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L60)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address for the script.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`getInternalAddress`](ccc.Class.Signer.md#getinternaladdress)

#### Example

```typescript
const internalAddress = await signer.getInternalAddress(); // Outputs the internal address
```

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:42](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L42)

***

### getRecommendedAddress()

> **getRecommendedAddress**(`preference`?): `Promise`\<`string`\>

Gets the recommended address for the signer as a string.

#### Parameters

• **preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the recommended address as a string.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`getRecommendedAddress`](ccc.Class.Signer.md#getrecommendedaddress)

#### Source

[signer/signer.ts:51](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L51)

***

### getRecommendedAddressObj()

> **getRecommendedAddressObj**(`_preference`?): `Promise`\<[`Address`](ccc.Class.Address.md)\>

Gets the recommended Address object for the signer.

#### Parameters

• **\_preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

A promise that resolves to the recommended Address object.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`getRecommendedAddressObj`](ccc.Class.Signer.md#getrecommendedaddressobj)

#### Source

[signer/signer.ts:41](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L41)

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<\`0x$\{string\}\`\>

Sends a transaction after signing it.

#### Parameters

• **tx**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to send, represented as a TransactionLike object.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash as a Hex string.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`sendTransaction`](ccc.Class.Signer.md#sendtransaction)

#### Source

[signer/signer.ts:83](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L83)

***

### signMessage()

> **signMessage**(`_`): `Promise`\<`string`\>

Signs a message. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`BytesLike`](ccc.Type.BytesLike.md)

The message to sign, as a string or BytesLike object.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed message as a string.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`signMessage`](ccc.Class.Signer.md#signmessage)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer.ts:73](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L73)

***

### signOnlyTransaction()

> **signOnlyTransaction**(`_`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction without sending it. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the signed Transaction object.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`signOnlyTransaction`](ccc.Class.Signer.md#signonlytransaction)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer.ts:104](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L104)

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction.

#### Parameters

• **tx**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the signed Transaction object.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`signTransaction`](ccc.Class.Signer.md#signtransaction)

#### Source

[signer/signer.ts:93](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L93)
