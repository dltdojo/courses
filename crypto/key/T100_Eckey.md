## Elliptic curve cryptography (ECC)

* 橢圓曲線密碼學 - 維基百科 https://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6
* Elliptic Curve Cryptography: a gentle introduction - Andrea Corbellini http://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/
* Elliptic Curve point addition (ℝ) https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/reals-add.html
* Elliptic Curve scalar multiplication (𝔽ₚ)  https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/modk-mul.html

### 橢圓曲線方程式

y^2=x^3+ax+b where 4a^3+27b^2≠0

### 無窮遠點 point at infinity 0

* 無窮遠點 - 維基百科 https://zh.wikipedia.org/wiki/%E6%97%A0%E7%A9%B7%E8%BF%9C%E7%82%B9
* 無窮遠就如在眼前  http://episte.math.ntu.edu.tw/articles/sm/sm_17_06_4/index.html

### 群公理 group law

* 群 - 維基百科，自由的百科全書  https://zh.wikipedia.org/wiki/%E7%BE%A4
* 橢圓曲線點為群元素
* 單位元素 identity element只有一個是無窮遠點0
* 反元素對稱於x軸
* 一直線三個與曲線三個交點加法和為0，P+Q+R=0

### 幾何加法 Geometric addition

* P+Q+R=0, P+Q=-R
* P=Q, 2P=-R

### Elliptic curves in Fp

* 有限體最常見的例子是當 p 為質數時，整數對 p 取模。
* 有限體 - 維基百科 https://zh.wikipedia.org/wiki/%E6%9C%89%E9%99%90%E5%9F%9F
* 離散對數 - 維基百科，自由的百科全書  https://zh.wikipedia.org/wiki/%E7%A6%BB%E6%95%A3%E5%AF%B9%E6%95%B0
* 離散對數問題 discrete logarithm problem 
* if we know a and b, what's k such that b=a^k mod p?
* nP = P+P+...+P
* Q=nP, nP容易算，用Q與P找n很難。

### 橢圓曲線密碼學  Elliptic Curve Cryptography

* Secp256k1 - Bitcoin Wiki https://en.bitcoin.it/wiki/Secp256k1
* n = FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141
* G = 04 79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798 483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8
* 私鑰為隨機整數範圍是{1,…,n−1}
* 公鑰由H=dG算出

### ECDH

* Elliptic curve Diffie–Hellman - Wikipedia https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman
* Alice Ha=da*G
* Bob Hb=db*G
* S = da * Hb = da * (db * G) = db * (da * G) = db * Ha 

### ECDSA

* Elliptic Curve Digital Signature Algorithm - Wikipedia https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm
* Elliptic Curve Cryptography: ECDH and ECDSA - Andrea Corbellini http://andrea.corbellini.name/2015/05/30/elliptic-curve-cryptography-ecdh-and-ecdsa/
* hash(message)取範圍在 {1,…,n−1}的z值
* 選擇隨機整數值 k 範圍在 {1,…,n−1}，跟ECC私鑰一樣
* P=k*G，與ECC公鑰一樣
* r=xp mod n (xp為P點的x座標值)
* 如r=0重新取隨機值K重算
* 計算 s=k^−1*(z+r*dA) mod n
* 如s=0重算

### z,r,s,PublicKey

* pizza Bitcoin Transaction https://blockchain.info/tx/cca7507897abc89628f450e8b1e0c6fca4ec3f7b34cccf55f3f531c659ff4d79

Input Scripts (unlock) Signature PublicKey

```
ScriptSig: PUSHDATA(72)[30450221009908144ca6539e09512b9295c8a27050d478fbb96f8addbc3d075544dc41328702201aa528be2b907d316d2da068dd9eb1e23243d97e444d59290d2fddf25269ee0e01] PUSHDATA(65)[042e930f39ba62c6534ee98ed20ca98959d34aa9e057cda01cfd422c6bab3667b76426529382c23f42b9b08d7832d4fee1d6b437a8526e59667ce9c4e9dcebcabb]
```

Output Scripts (lock) https://blockchain.info/tx-index/79731/0

```
DUP HASH160 PUSHDATA(20)[46af3fb481837fadbb421727f9959c2d32a36829] EQUALVERIFY CHECKSIG
```

* https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1&apikey=YourApiKeyToken

```
{
    "jsonrpc": "2.0",
    "result": {
        "blockHash": "0xf64a12502afc36db3d29931a2148e5d6ddaa883a2a3c968ca2fb293fa9258c68",
        "blockNumber": "0x70839",
        "condition": null,
        "creates": null,
        "from": "0xc80fb22930b303b55df9b89901889126400add38",
        "gas": "0x30d40",
        "gasPrice": "0xba43b7400",
        "hash": "0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1",
        "input": "0xfc36e15b0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000a4861636b65726e65777300000000000000000000000000000000000000000000",
        "networkId": null,
        "nonce": "0xa7",
        "publicKey": "0xd6fa924758c881a8f5e97c34780cad4f0f0fc27def3a46b3363bc35d6c0414b2707be2b7ebfabf10d6051239614cbed99cff8863cca610c8245801583db1fb39",
        "r": "0xe7ccdba116aa95ae8d9bdd02f619a0cdfc1f60c5740b3899865822a80cd70218",
        "raw": "0xf8cb81a7850ba43b740083030d409403fca6077d38dd99d0ce14ba32078bd2cda72d7480b864fc36e15b0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000a4861636b65726e657773000000000000000000000000000000000000000000001ca0e7ccdba116aa95ae8d9bdd02f619a0cdfc1f60c5740b3899865822a80cd70218a0f200df1921ea988d16280a0873b69cb782a54e8a596d15e700710c820c8d2a9e",
        "s": "0xf200df1921ea988d16280a0873b69cb782a54e8a596d15e700710c820c8d2a9e",
        "standardV": "0x1",
        "to": "0x03fca6077d38dd99d0ce14ba32078bd2cda72d74",
        "transactionIndex": "0x0",
        "v": "0x1c",
        "value": "0x0"
    },
    "id": 1
}
```

### Shared Key (ECDH) 

* BOB: PubBob = PrivBob * G
* ALCIE: R = random * G
* ALICE: SharedSecret S = random * PubBob
* BOB: PrivBob * R = PrivBob * random * G = random * PrivBob * G = random * PubBob = S 
* Diffie–Hellman key exchange - Wikipedia  https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange
* ECDH Elliptic curve Diffie–Hellman - Wikipedia https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman

### TODO

Elliptic Curve scalar multiplication (𝔽ₚ)  https://cdn.rawgit.com/andreacorbellini/ecc/920b29a/interactive/modk-mul.html

* 256k1 y^2 = x^3 + x + 7 (𝔽ₚ)
* 選一個三位數質數p
* 選一數字當成 base point G 
* 選一數字當成私鑰s
* 公鑰sG=P
* 同一曲線做出BOB金鑰對
* ALICE隨機選一數字做出分享金鑰並用BOB私鑰比對。

### References

* Elliptic curve cryptography - Wikipedia https://en.wikipedia.org/wiki/
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