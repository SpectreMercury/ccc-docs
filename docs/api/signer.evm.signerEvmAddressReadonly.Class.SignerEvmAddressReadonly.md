[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [signer/evm/signerEvmAddressReadonly](signer.evm.signerEvmAddressReadonly.md) / SignerEvmAddressReadonly

# Class: `abstract` SignerEvmAddressReadonly

A class extending SignerEvm that provides read-only access to an EVM address.
This class does not support signing operations.

## Extends

- [`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md)

## Constructors

### new SignerEvmAddressReadonly()

> **new SignerEvmAddressReadonly**(`client`, `address`): [`SignerEvmAddressReadonly`](signer.evm.signerEvmAddressReadonly.Class.SignerEvmAddressReadonly.md)

Creates an instance of SignerEvmAddressReadonly.

#### Parameters

• **client**: [`Client`](client.client.Interface.Client.md)

The client instance used for communication.

• **address**: [`BytesLike`](bytes.Type.BytesLike.md)

The EVM address associated with the signer.

#### Returns

[`SignerEvmAddressReadonly`](signer.evm.signerEvmAddressReadonly.Class.SignerEvmAddressReadonly.md)

#### Overrides

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`constructor`](signer.evm.signerEvm.Class.SignerEvm.md#constructors)

#### Source

[signer/evm/signerEvmAddressReadonly.ts:18](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L18)

## Properties

### client

> `readonly` **client**: [`Client`](client.client.Interface.Client.md)

#### Inherited from

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`client`](signer.evm.signerEvm.Class.SignerEvm.md#client)

#### Source

[signer/signer.ts:12](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L12)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`connect`](signer.evm.signerEvm.Class.SignerEvm.md#connect)

#### Example

* ```typescript
  * await signer.connect();
  * ```

#### Source

[signer/evm/signerEvmAddressReadonly.ts:35](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L35)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](address.Class.Address.md)[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<[`Address`](address.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getAddressObjs`](signer.evm.signerEvm.Class.SignerEvm.md#getaddressobjs)

#### Source

[signer/evm/signerEvm.ts:36](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvm.ts#L36)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getAddresses`](signer.evm.signerEvm.Class.SignerEvm.md#getaddresses)

#### Source

[signer/signer.ts:60](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L60)

***

### getEvmAccount()

> **getEvmAccount**(): `Promise`\<`string`\>

Gets the EVM account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the EVM account.

#### Overrides

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getEvmAccount`](signer.evm.signerEvm.Class.SignerEvm.md#getevmaccount)

#### Example

```typescript
const account = await signer.getEvmAccount(); // Outputs the EVM account
```

#### Source

[signer/evm/signerEvmAddressReadonly.ts:47](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L47)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the EVM account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getInternalAddress`](signer.evm.signerEvm.Class.SignerEvm.md#getinternaladdress)

#### Source

[signer/evm/signerEvm.ts:27](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvm.ts#L27)

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

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getRecommendedAddress`](signer.evm.signerEvm.Class.SignerEvm.md#getrecommendedaddress)

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

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`getRecommendedAddressObj`](signer.evm.signerEvm.Class.SignerEvm.md#getrecommendedaddressobj)

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

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`sendTransaction`](signer.evm.signerEvm.Class.SignerEvm.md#sendtransaction)

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

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`signMessage`](signer.evm.signerEvm.Class.SignerEvm.md#signmessage)

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

#### Inherited from

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`signOnlyTransaction`](signer.evm.signerEvm.Class.SignerEvm.md#signonlytransaction)

#### Source

[signer/evm/signerEvm.ts:53](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/evm/signerEvm.ts#L53)

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

[`SignerEvm`](signer.evm.signerEvm.Class.SignerEvm.md).[`signTransaction`](signer.evm.signerEvm.Class.SignerEvm.md#signtransaction)

#### Source

[signer/signer.ts:93](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/signer.ts#L93)
