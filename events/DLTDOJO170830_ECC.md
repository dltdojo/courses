DLTDOJO聊加密貨幣那條線 - 橢圓曲線

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