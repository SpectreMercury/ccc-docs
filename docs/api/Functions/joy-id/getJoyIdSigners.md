**@ckb-ccc/joy-id** • **Docs**

***

@ckb-ccc/joy-id / JoyId / getJoyIdSigners

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

joy-id/src/signerFactory/index.ts:16
