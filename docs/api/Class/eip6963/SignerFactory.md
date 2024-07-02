**@ckb-ccc/eip6963** • **Docs**

***

@ckb-ccc/eip6963 / Eip6963 / SignerFactory

# Class: SignerFactory

Class representing a factory for creating and managing Signer instances.

## Constructors

### new SignerFactory()

> **new SignerFactory**(`client`): `SignerFactory`

Creates an instance of SignerFactory.

#### Parameters

• **client**: `Client`

The client instance.

#### Returns

`SignerFactory`

#### Source

eip6963/src/signersFactory.ts:16

## Properties

### client

> `private` `readonly` **client**: `Client`

The client instance.

#### Source

eip6963/src/signersFactory.ts:16

***

### existedUuids

> `private` `readonly` **existedUuids**: `string`[] = `[]`

#### Source

eip6963/src/signersFactory.ts:10

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

eip6963/src/signersFactory.ts:23
