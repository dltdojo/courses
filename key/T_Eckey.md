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
  "moduleEllipticSecp256k1": {
    "privateKey": "1",
    "publicKey": {
      "x": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "y": "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
    }
  },
  "p256": {
    "privateKey": "1",
    "publicKey": {
      "x": "8905f76b53755c669fb732b7762251075ba95fc4fedb60179e730d418a9143c1",
      "y": "571ff18a5885d8552e88688dd21f3258b4ab8e43a19e45cddf25357ce95560a8"
    }
  }
}

```