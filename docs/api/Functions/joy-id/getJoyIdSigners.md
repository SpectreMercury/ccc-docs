[**@ckb-ccc/joy-id**](README.md) • **Docs**

***

[@ckb-ccc/joy-id](README.md) / [JoyId](Namespace.JoyId.md) / getJoyIdSigners

# Function: getJoyIdSigners()

> **getJoyIdSigners**(`client`, `name`, `icon`): `ccc.SignerInfo`[]

Gets the JoyID signers based on the client, name, and icon.
If the browser is standalone or a webview, returns SignerAlwaysError instances.
Otherwise, returns instances of CkbSigner, BitcoinSigner, and EvmSigner.

## Parameters

• **client**: `Client`

The client instance.

• **name**: `string`

The name of the signer.

• **icon**: `string`

The icon URL of the signer.

## Returns

`ccc.SignerInfo`[]

An array of signer information objects.

## Source

[joy-id/src/signerFactory/index.ts:16](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/joy-id/src/signerFactory/index.ts#L16)
