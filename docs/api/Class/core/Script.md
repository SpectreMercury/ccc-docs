**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Script

# Class: Script

## Constructors

### new Script()

> **new Script**(`codeHash`, `hashType`, `args`): `Script`

Creates an instance of Script.

#### Parameters

• **codeHash**: \`0x$\{string\}\`

The code hash of the script.

• **hashType**: `HashType`

The hash type of the script.

• **args**: \`0x$\{string\}\`

The arguments for the script.

#### Returns

`Script`

#### Source

ckb/script.ts:97

## Properties

### args

> **args**: \`0x$\{string\}\`

The arguments for the script.

#### Source

ckb/script.ts:100

***

### codeHash

> **codeHash**: \`0x$\{string\}\`

The code hash of the script.

#### Source

ckb/script.ts:98

***

### hashType

> **hashType**: `HashType`

The hash type of the script.

#### Source

ckb/script.ts:99

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the Script instance to molecule data format.

#### Returns

`object`

An object representing the script in molecule data format.

##### args

> **args**: `Uint8Array`

##### codeHash

> **codeHash**: `Uint8Array`

##### hashType

> **hashType**: `Uint8Array`

#### Source

ckb/script.ts:137

***

### eq()

> **eq**(`val`): `boolean`

Compares the current Script instance with another ScriptLike object for equality.

#### Parameters

• **val**: `ScriptLike`

The ScriptLike object to compare with.

#### Returns

`boolean`

True if the scripts are equal, otherwise false.

#### Example

```typescript
const isEqual = script.eq(anotherScript);
```

#### Source

ckb/script.ts:195

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the Script instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the script bytes.

#### Example

```typescript
const scriptBytes = script.toBytes();
```

#### Source

ckb/script.ts:156

***

### from()

> `static` **from**(`script`): `Script`

Creates a Script instance from a ScriptLike object.

#### Parameters

• **script**: `ScriptLike`

A ScriptLike object or an instance of Script.

#### Returns

`Script`

A Script instance.

#### Example

```typescript
const script = Script.from({
  codeHash: "0x1234...",
  hashType: "type",
  args: "0xabcd..."
});
```

#### Source

ckb/script.ts:119

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Script`

Creates a Script instance from a byte-like value or molecule Script.

#### Parameters

• **bytes**: `BytesLike` \| `Script`

The byte-like value or molecule Script to convert.

#### Returns

`Script`

A Script instance.

#### Example

```typescript
const script = Script.fromBytes(new Uint8Array([/* script bytes */]));
```

#### Source

ckb/script.ts:172
