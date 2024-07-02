[**@ckb-ccc/eip6963**](README.md) • **Docs**

***

[@ckb-ccc/eip6963](README.md) / [Eip6963](Namespace.Eip6963.md) / SignerFactory

# Class: SignerFactory

Class representing a factory for creating and managing Signer instances.

## Constructors

### new SignerFactory()

> **new SignerFactory**(`client`): [`SignerFactory`](Eip6963.Class.SignerFactory.md)

Creates an instance of SignerFactory.

#### Parameters

• **client**: `Client`

The client instance.

#### Returns

[`SignerFactory`](Eip6963.Class.SignerFactory.md)

#### Source

[eip6963/src/signersFactory.ts:16](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/eip6963/src/signersFactory.ts#L16)

## Properties

### client

> `private` `readonly` **client**: `Client`

The client instance.

#### Source

[eip6963/src/signersFactory.ts:16](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/eip6963/src/signersFactory.ts#L16)

***

### existedUuids

> `private` `readonly` **existedUuids**: `string`[] = `[]`

#### Source

[eip6963/src/signersFactory.ts:10](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/eip6963/src/signersFactory.ts#L10)

## Methods

### subscribeSigners()

> **subscribeSigners**(`callback`): () => `void`

Subscribes to new signers and triggers a callback when a new signer is available.

#### Parameters

• **callback**

The callback to trigger with the new signer.

#### Returns

`Function`

A function to unsubscribe from the signer events.

##### Returns

`void`

#### Source

[eip6963/src/signersFactory.ts:23](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/eip6963/src/signersFactory.ts#L23)
