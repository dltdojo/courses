## Elliptic curve cryptography (ECC)

Tasks

* trapdoor函數
* 繪出各種EC y^2 = x^3 + ax + b (ℝ)
* P=Q
* 繪出 y^2 = x^3 + ax + b (𝔽ₚ)
* ECC sG=P 公鑰 P

### Shared Key (ECDH) 

* BOB: PubBob = PrivBob * G
* ALCIE: R = random * G
* ALICE: SharedSecret S = random * PubBob
* BOB: PrivBob * R = PrivBob * random * G = random * PrivBob * G = random * PubBob = S 
* Diffie–Hellman key exchange - Wikipedia  https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange
* ECDH Elliptic curve Diffie–Hellman - Wikipedia https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman

### TODO

Elliptic Curve scalar multiplication (𝔽ₚ)  https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/modk-mul.html

* y^2 = x^3 + x + 7 (𝔽ₚ)
* 選一個三位數質數p
* 選一數字當成 base point G 
* 選一數字當成私鑰s
* 公鑰sG=P
* 同一曲線做出BOB金鑰對
* ALICE隨機選一數字做出分享金鑰並用BOB私鑰比對。

### References

* Elliptic curve cryptography - Wikipedia https://en.wikipedia.org/wiki/
* 澎湖石滬 - 維基百科 https://zh.wikipedia.org/wiki/%E6%BE%8E%E6%B9%96%E7%9F%B3%E6%BB%AC
* 質數列表 - 維基百科 https://zh.wikipedia.org/wiki/%E8%B3%AA%E6%95%B8%E5%88%97%E8%A1%A8
* Elliptic Curve Cryptography: a gentle introduction - Andrea Corbellini http://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/
* Elliptic Curve scalar multiplication (ℝ) https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/reals-add.html
* Elliptic Curve scalar multiplication (𝔽ₚ) https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/modk-mul.html
* Secp256k1 - Bitcoin Wiki https://en.bitcoin.it/wiki/Secp256k1
* Elliptic Curve Cryptography Overview - YouTube https://www.youtube.com/watch?v=dCvB-mhkT0w

### Test

```
$ node js/eckey.js
{
  "curveSecp256k1": "y*y mod p== (x*x*x + 7) mod p",
  "curve256k1": {
    "gx": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    "gy": "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "yymodp": "4866d6a5ab41ab2c6bcc57ccd3735da5f16f80a548e5e20a44e4e9b8118c26f2",
    "xxx7modp": "4866d6a5ab41ab2c6bcc57ccd3735da5f16f80a548e5e20a44e4e9b8118c26f2",
    "p": "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
  },
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
    "verifiec": true,
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
    "verified": true,
    "publicKey": {
      "hex": "046b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2964fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5",
      "x": "8905f76b53755c669fb732b7762251075ba95fc4fedb60179e730d418a9143c1",
      "y": "571ff18a5885d8552e88688dd21f3258b4ab8e43a19e45cddf25357ce95560a8"
    }
  },
  "bitcoinMessage": {
    "publicKey": "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "address": "1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm",
    "verified": true,
    "signature": "HDOAEygwU8+uTWbMDcKxGrMWYVlP53fUxHBxmUdnBwXxGqP2kRTGlwkzEAIxJtHRrXPZlfYuoCMWUSAsp+i2LR8=",
    "signature2": "HP1EM50kmd4NdV1tMsMAjdbx0JuPNBnq1wVjLKyg1EehNSQEn6f5iHp3EmK710hrkwddM49goC0BCxkz6NdcIOM="
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