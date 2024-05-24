[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [signer/btc/signerBtc](signer.btc.signerBtc.md) / SignerBtc

# Class: `abstract` SignerBtc

An abstract class extending the Signer class for Bitcoin-like signing operations.
This class provides methods to get Bitcoin account, public key, and internal address,
as well as signing transactions.

## Extends

- [`Signer`](signer.signer.Class.Signer.md)

## Extended by

- [`SignerBtcPublicKeyReadonly`](signer.btc.signerBtcPublicKeyReadonly.Class.SignerBtcPublicKeyReadonly.md)

## Constructors

### new SignerBtc()

> **new SignerBtc**(`client`): [`SignerBtc`](signer.btc.signerBtc.Class.SignerBtc.md)

#### Parameters

• **client**: [`Client`](client.client.Interface.Client.md)

#### Returns

[`SignerBtc`](signer.btc.signerBtc.Class.SignerBtc.md)

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`constructor`](signer.signer.Class.Signer.md#constructors)

#### Source

[signer/signer.ts:12](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L12)

## Properties

### client

> `readonly` **client**: [`Client`](client.client.Interface.Client.md)

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`client`](signer.signer.Class.Signer.md#client)

#### Source

[signer/signer.ts:12](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L12)

## Methods

### connect()

> `abstract` **connect**(): `Promise`\<`void`\>

Connects to the client.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`connect`](signer.signer.Class.Signer.md#connect)

#### Source

[signer/signer.ts:19](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L19)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](address.Class.Address.md)[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<[`Address`](address.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Overrides

[`Signer`](signer.signer.Class.Signer.md).[`getAddressObjs`](signer.signer.Class.Signer.md#getaddressobjs)

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

[`Signer`](signer.signer.Class.Signer.md).[`getAddresses`](signer.signer.Class.Signer.md#getaddresses)

#### Source

[signer/signer.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L60)

***

### getBtcAccount()

> `abstract` **getBtcAccount**(): `Promise`\<`string`\>

Gets the Bitcoin account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the Bitcoin account.

#### Source

[signer/btc/signerBtc.ts:23](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L23)

***

### getBtcPublicKey()

> `abstract` **getBtcPublicKey**(): `Promise`\<[`BytesLike`](bytes.Type.BytesLike.md)\>

Gets the Bitcoin public key associated with the signer.

#### Returns

`Promise`\<[`BytesLike`](bytes.Type.BytesLike.md)\>

A promise that resolves to a HexLike value representing the Bitcoin public key.

#### Source

[signer/btc/signerBtc.ts:30](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L30)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the Bitcoin account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Overrides

[`Signer`](signer.signer.Class.Signer.md).[`getInternalAddress`](signer.signer.Class.Signer.md#getinternaladdress)

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

[`Signer`](signer.signer.Class.Signer.md).[`getRecommendedAddress`](signer.signer.Class.Signer.md#getrecommendedaddress)

#### Source

[signer/signer.ts:51](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L51)

***

### getRecommendedAddressObj()

> **getRecommendedAddressObj**(`_preference`?): `Promise`\<[`Address`](address.Class.Address.md)\>

Gets the recommended Address object for the signer.

#### Parameters

• **\_preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<[`Address`](address.Class.Address.md)\>

A promise that resolves to the recommended Address object.

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`getRecommendedAddressObj`](signer.signer.Class.Signer.md#getrecommendedaddressobj)

#### Source

[signer/signer.ts:41](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L41)

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<\`0x$\{string\}\`\>

Sends a transaction after signing it.

#### Parameters

• **tx**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

The transaction to send, represented as a TransactionLike object.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash as a Hex string.

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`sendTransaction`](signer.signer.Class.Signer.md#sendtransaction)

#### Source

[signer/signer.ts:83](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L83)

***

### signMessage()

> **signMessage**(`_`): `Promise`\<`string`\>

Signs a message. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`BytesLike`](bytes.Type.BytesLike.md)

The message to sign, as a string or BytesLike object.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed message as a string.

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`signMessage`](signer.signer.Class.Signer.md#signmessage)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer.ts:73](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L73)

***

### signOnlyTransaction()

> **signOnlyTransaction**(`txLike`): `Promise`\<[`Transaction`](ckb.transaction.Class.Transaction.md)\>

Signs a transaction without modifying it.

#### Parameters

• **txLike**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ckb.transaction.Class.Transaction.md)\>

A promise that resolves to a signed Transaction object.

#### Overrides

[`Signer`](signer.signer.Class.Signer.md).[`signOnlyTransaction`](signer.signer.Class.Signer.md#signonlytransaction)

#### Source

[signer/btc/signerBtc.ts:65](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/btc/signerBtc.ts#L65)

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<[`Transaction`](ckb.transaction.Class.Transaction.md)\>

Signs a transaction.

#### Parameters

• **tx**: [`TransactionLike`](ckb.transaction.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ckb.transaction.Class.Transaction.md)\>

A promise that resolves to the signed Transaction object.

#### Inherited from

[`Signer`](signer.signer.Class.Signer.md).[`signTransaction`](signer.signer.Class.Signer.md#signtransaction)

#### Source

[signer/signer.ts:93](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L93)
