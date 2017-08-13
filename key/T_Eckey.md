* Elliptic curve cryptography - Wikipedia https://en.wikipedia.org/wiki/Elliptic_curve_cryptography

```
$ node js/eckey.js

{
  "curveSecp256k1": "y*y == x*x*x + 7",
  "moduleSecp256k1": {
    "privateKey": "0000000000000000000000000000000000000000000000000000000000000001",
    "publicKey": "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    "uncompressedPublicKey": "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
  },
  "secp256k1": {
    "msgHash": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    "privateKey": "1",
    "signature": {
      "r": "75601b1385909ea698e3fd6e26e5fa5105127bd2299d3ab0b9d9f93df5b8b99c",
      "s": "28ae7cc8f969e6b6fb1feac477818a75a46e8c364e88dfdc9880e1a5175c4bd1",
      "recoveryParam": 1
    },
    "signature2": {
      "r": "75601b1385909ea698e3fd6e26e5fa5105127bd2299d3ab0b9d9f93df5b8b99c",
      "s": "28ae7cc8f969e6b6fb1feac477818a75a46e8c364e88dfdc9880e1a5175c4bd1",
      "recoveryParam": 1
    },
    "publicKey": {
      "hex": "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      "x": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "y": "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
    }
  },
  "p256": {
    "msgHash": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    "privateKey": "1",
    "signature": {
      "r": "deeb0097a6b273eda8182351e37e192a89fe85295b46293c7f2ece0bf368964f",
      "s": "7f800c6926419d244ce222f3129825d4eb190f2dcda7c5221a34da3cfe22a16e",
      "recoveryParam": 1
    },
    "publicKey": {
      "hex": "046b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2964fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5",
      "x": "8905f76b53755c669fb732b7762251075ba95fc4fedb60179e730d418a9143c1",
      "y": "571ff18a5885d8552e88688dd21f3258b4ab8e43a19e45cddf25357ce95560a8"
    }
  },
  "bitcoinMessage": {
    "publicKey": "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "signature": "G5SjuVXZCDG25X/zSJz01iikLZ+Cc8bA0bRqZO0NYXPpJW7uE7f/OTINzVfux3zTSHC3JWoLJZotwD17BMcwJwE=",
    "signature2": "HEKrrJQPAP+FlsavmKEaUqHAaFEqWlYo7KSNPvKzxjLtNatCga0T4VSYiXoHQLkjYn3opdYWmdUfp2bsKHZxZPc="
  },
  "ethsign": {
    "msgHash": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
    "publickey": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "r": "75601b1385909ea698e3fd6e26e5fa5105127bd2299d3ab0b9d9f93df5b8b99c",
    "s": "28ae7cc8f969e6b6fb1feac477818a75a46e8c364e88dfdc9880e1a5175c4bd1",
    "r2": "75601b1385909ea698e3fd6e26e5fa5105127bd2299d3ab0b9d9f93df5b8b99c",
    "s2": "28ae7cc8f969e6b6fb1feac477818a75a46e8c364e88dfdc9880e1a5175c4bd1",
    "v": 28
  },
  "ethEcrecover": {
    "msgHash": "e28f5ff58ff3f1b24d6ba6e3b3e95e49589e8dd59b91296e76189d6ad2857b22",
    "r": "7a372803f2dfa525db1ddc36ac796eaa01ca902e3469cc424616eefd14712df3",
    "s": "7a9920703c6b1ffdd75b274a30ad6c6b0992060df3822ebaa7d4619050c0710e",
    "v": 27,
    "publickey": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "recoverPublicKey": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
  }
}

```