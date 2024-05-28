[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerBtcPublicKeyReadonly

# Class: SignerBtcPublicKeyReadonly

A class extending SignerBtc that provides read-only access to a Bitcoin public key and account.
This class does not support signing operations.

## Extends

- [`SignerBtc`](ccc.Class.SignerBtc.md)

## Constructors

### new SignerBtcPublicKeyReadonly()

> **new SignerBtcPublicKeyReadonly**(`client`, `account`, `publicKey`): [`SignerBtcPublicKeyReadonly`](ccc.Class.SignerBtcPublicKeyReadonly.md)

Creates an instance of SignerBtcPublicKeyReadonly.

#### Parameters

• **client**: [`Client`](ccc.Interface.Client.md)

The client instance used for communication.

• **account**: `string`

The Bitcoin account associated with the signer.

• **publicKey**: [`BytesLike`](ccc.Type.BytesLike.md)

The public key associated with the signer.

#### Returns

[`SignerBtcPublicKeyReadonly`](ccc.Class.SignerBtcPublicKeyReadonly.md)

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`constructor`](ccc.Class.SignerBtc.md#constructors)

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L19)

## Properties

### account

> `private` `readonly` **account**: `string`

The Bitcoin account associated with the signer.

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:21](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L21)

***

### client

> `readonly` **client**: [`Client`](ccc.Interface.Client.md)

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`client`](ccc.Class.SignerBtc.md#client)

#### Source

[signer/signer.ts:12](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L12)

***

### publicKey

> `private` `readonly` **publicKey**: \`0x$\{string\}\`

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:10](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L10)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`connect`](ccc.Class.SignerBtc.md#connect)

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:34](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L34)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](ccc.Class.Address.md)[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getAddressObjs`](ccc.Class.SignerBtc.md#getaddressobjs)

#### Source

[signer/btc/signerBtc.ts:46](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L46)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getAddresses`](ccc.Class.SignerBtc.md#getaddresses)

#### Source

[signer/signer.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L60)

***

### getBtcAccount()

> **getBtcAccount**(): `Promise`\<`string`\>

Gets the Bitcoin account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the Bitcoin account.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getBtcAccount`](ccc.Class.SignerBtc.md#getbtcaccount)

#### Example

```typescript
const account = await signer.getBtcAccount(); // Outputs the Bitcoin account
```

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:46](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L46)

***

### getBtcPublicKey()

> **getBtcPublicKey**(): `Promise`\<\`0x$\{string\}\`\>

Gets the Bitcoin public key associated with the signer.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to a Hex string representing the Bitcoin public key.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getBtcPublicKey`](ccc.Class.SignerBtc.md#getbtcpublickey)

#### Example

```typescript
const publicKey = await signer.getBtcPublicKey(); // Outputs the Bitcoin public key
```

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L60)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the Bitcoin account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getInternalAddress`](ccc.Class.SignerBtc.md#getinternaladdress)

#### Source

[signer/btc/signerBtc.ts:37](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L37)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getRecommendedAddress`](ccc.Class.SignerBtc.md#getrecommendedaddress)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getRecommendedAddressObj`](ccc.Class.SignerBtc.md#getrecommendedaddressobj)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`sendTransaction`](ccc.Class.SignerBtc.md#sendtransaction)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signMessage`](ccc.Class.SignerBtc.md#signmessage)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer.ts:73](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L73)

***

### signOnlyTransaction()

> **signOnlyTransaction**(`txLike`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction without modifying it.

#### Parameters

• **txLike**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to a signed Transaction object.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signOnlyTransaction`](ccc.Class.SignerBtc.md#signonlytransaction)

#### Source

[signer/btc/signerBtc.ts:65](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L65)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signTransaction`](ccc.Class.SignerBtc.md#signtransaction)

#### Source

[signer/signer.ts:93](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L93)
