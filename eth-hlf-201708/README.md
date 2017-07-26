## Ethereum and HyperLedger Fabric Coding Workshop

### 1. Setting up the development environment

* Visual Studio Code https://code.visualstudio.com/download
* VirtualBox https://www.virtualbox.org/
* VitrualBox Virtual Device (README.VM.md)
* putty http://www.putty.org/
* Google Chrome Browser https://www.google.com.tw/chrome/browser/desktop/index.html

### Create a index page

每個參與節點啟動8080http服務後，搜尋兩個對手測試方來列入mydata.json裡面ipTest欄位。

```
$ docker-compose up -d httpd
$ namp -p 8080 --open 192.168.2.* 
```

### Create a key pair

* https://github.com/dltdojo/container/tree/master/dltdojo/ethnode

```
$ docker-compose up -d ddjethnode
$ docker-compose exec ddjethnode bash
bash-4.3# cd app/
bash-4.3# ../subapp/eckey.sh

// ===========================
$ openssl version
OpenSSL 1.0.2k  26 Jan 2017

// ===========================
$ openssl ecparam -list_curves
  secp112r1 : SECG/WTLS curve over a 112 bit prime field
  secp112r2 : SECG curve over a 112 bit prime field
  secp128r1 : SECG curve over a 128 bit prime field
  secp128r2 : SECG curve over a 128 bit prime field
  secp160k1 : SECG curve over a 160 bit prime field
  secp160r1 : SECG curve over a 160 bit prime field
  secp160r2 : SECG/WTLS curve over a 160 bit prime field
  secp192k1 : SECG curve over a 192 bit prime field
  secp224k1 : SECG curve over a 224 bit prime field
  secp224r1 : NIST/SECG curve over a 224 bit prime field
  secp256k1 : SECG curve over a 256 bit prime field
  secp384r1 : NIST/SECG curve over a 384 bit prime field
  secp521r1 : NIST/SECG curve over a 521 bit prime field
  prime192v1: NIST/X9.62/SECG curve over a 192 bit prime field
  prime192v2: X9.62 curve over a 192 bit prime field
  prime192v3: X9.62 curve over a 192 bit prime field
  prime239v1: X9.62 curve over a 239 bit prime field
  prime239v2: X9.62 curve over a 239 bit prime field
  prime239v3: X9.62 curve over a 239 bit prime field
  prime256v1: X9.62/SECG curve over a 256 bit prime field
  sect113r1 : SECG curve over a 113 bit binary field
  sect113r2 : SECG curve over a 113 bit binary field
  sect131r1 : SECG/WTLS curve over a 131 bit binary field
  sect131r2 : SECG curve over a 131 bit binary field
  sect163k1 : NIST/SECG/WTLS curve over a 163 bit binary field
  sect163r1 : SECG curve over a 163 bit binary field
  sect163r2 : NIST/SECG curve over a 163 bit binary field
  sect193r1 : SECG curve over a 193 bit binary field
  sect193r2 : SECG curve over a 193 bit binary field
  sect233k1 : NIST/SECG/WTLS curve over a 233 bit binary field
  sect233r1 : NIST/SECG/WTLS curve over a 233 bit binary field
  sect239k1 : SECG curve over a 239 bit binary field
  sect283k1 : NIST/SECG curve over a 283 bit binary field
  sect283r1 : NIST/SECG curve over a 283 bit binary field
  sect409k1 : NIST/SECG curve over a 409 bit binary field
  sect409r1 : NIST/SECG curve over a 409 bit binary field
  sect571k1 : NIST/SECG curve over a 571 bit binary field
  sect571r1 : NIST/SECG curve over a 571 bit binary field
  c2pnb163v1: X9.62 curve over a 163 bit binary field
  c2pnb163v2: X9.62 curve over a 163 bit binary field
  c2pnb163v3: X9.62 curve over a 163 bit binary field
  c2pnb176v1: X9.62 curve over a 176 bit binary field
  c2tnb191v1: X9.62 curve over a 191 bit binary field
  c2tnb191v2: X9.62 curve over a 191 bit binary field
  c2tnb191v3: X9.62 curve over a 191 bit binary field
  c2pnb208w1: X9.62 curve over a 208 bit binary field
  c2tnb239v1: X9.62 curve over a 239 bit binary field
  c2tnb239v2: X9.62 curve over a 239 bit binary field
  c2tnb239v3: X9.62 curve over a 239 bit binary field
  c2pnb272w1: X9.62 curve over a 272 bit binary field
  c2pnb304w1: X9.62 curve over a 304 bit binary field
  c2tnb359v1: X9.62 curve over a 359 bit binary field
  c2pnb368w1: X9.62 curve over a 368 bit binary field
  c2tnb431r1: X9.62 curve over a 431 bit binary field
  wap-wsg-idm-ecid-wtls1: WTLS curve over a 113 bit binary field
  wap-wsg-idm-ecid-wtls3: NIST/SECG/WTLS curve over a 163 bit binary field
  wap-wsg-idm-ecid-wtls4: SECG curve over a 113 bit binary field
  wap-wsg-idm-ecid-wtls5: X9.62 curve over a 163 bit binary field
  wap-wsg-idm-ecid-wtls6: SECG/WTLS curve over a 112 bit prime field
  wap-wsg-idm-ecid-wtls7: SECG/WTLS curve over a 160 bit prime field
  wap-wsg-idm-ecid-wtls8: WTLS curve over a 112 bit prime field
  wap-wsg-idm-ecid-wtls9: WTLS curve over a 160 bit prime field
  wap-wsg-idm-ecid-wtls10: NIST/SECG/WTLS curve over a 233 bit binary field
  wap-wsg-idm-ecid-wtls11: NIST/SECG/WTLS curve over a 233 bit binary field
  wap-wsg-idm-ecid-wtls12: WTLS curvs over a 224 bit prime field
  Oakley-EC2N-3:
        IPSec/IKE/Oakley curve #3 over a 155 bit binary field.
        Not suitable for ECDSA.
        Questionable extension field!
  Oakley-EC2N-4:
        IPSec/IKE/Oakley curve #4 over a 185 bit binary field.
        Not suitable for ECDSA.
        Questionable extension field!
  brainpoolP160r1: RFC 5639 curve over a 160 bit prime field
  brainpoolP160t1: RFC 5639 curve over a 160 bit prime field
  brainpoolP192r1: RFC 5639 curve over a 192 bit prime field
  brainpoolP192t1: RFC 5639 curve over a 192 bit prime field
  brainpoolP224r1: RFC 5639 curve over a 224 bit prime field
  brainpoolP224t1: RFC 5639 curve over a 224 bit prime field
  brainpoolP256r1: RFC 5639 curve over a 256 bit prime field
  brainpoolP256t1: RFC 5639 curve over a 256 bit prime field
  brainpoolP320r1: RFC 5639 curve over a 320 bit prime field
  brainpoolP320t1: RFC 5639 curve over a 320 bit prime field
  brainpoolP384r1: RFC 5639 curve over a 384 bit prime field
  brainpoolP384t1: RFC 5639 curve over a 384 bit prime field
  brainpoolP512r1: RFC 5639 curve over a 512 bit prime field
  brainpoolP512t1: RFC 5639 curve over a 512 bit prime field

// ===========================
$ openssl ecparam -name secp256k1 -genkey -out secp256k1.key.pem
$ openssl ec -text -in secp256k1.key.pem
read EC key
Private-Key: (256 bit)
priv:
    00:ae:95:07:0d:72:d7:db:3b:34:93:29:38:26:89:
    57:98:72:80:d4:d1:a3:d5:9e:b0:68:3b:3b:ef:7a:
    8a:6e:ad
pub:
    04:35:46:4b:e3:e2:5f:97:de:7c:a1:db:3c:4a:dd:
    65:3f:f4:3b:94:a6:6e:7a:a6:6f:46:7c:91:3d:17:
    67:38:d8:6d:c4:9c:29:22:3a:0b:48:3c:0b:03:b0:
    9b:cd:56:ea:50:80:9b:63:c8:d3:eb:58:9a:c3:ad:
    74:9c:c8:b2:99
ASN1 OID: secp256k1
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIK6VBw1y19s7NJMpOCaJV5hygNTRo9WesGg7O+96im6toAcGBSuBBAAK
oUQDQgAENUZL4+Jfl958ods8St1lP/Q7lKZueqZvRnyRPRdnONhtxJwpIjoLSDwL
A7CbzVbqUICbY8jT61iaw610nMiymQ==
-----END EC PRIVATE KEY-----

// ===========================
$ openssl ecparam -name prime256v1 -genkey -out prime256v1.key.pem
$ openssl ec -text -in prime256v1.key.pem
read EC key
Private-Key: (256 bit)
priv:
    40:58:27:b0:15:e9:67:5a:07:91:13:fd:fc:14:70:
    b9:b9:cd:4f:dc:7c:5c:79:b6:d9:fb:19:df:05:8b:
    bb:a3
pub:
    04:0d:e0:bc:2f:a6:1a:97:b4:9d:7a:5f:65:17:92:
    1f:aa:a0:e4:da:36:24:6e:78:c4:a5:b4:c3:bf:7b:
    e3:b3:b5:c3:05:f5:a5:12:d2:75:d2:03:e9:1e:22:
    7a:97:83:fd:aa:f1:42:61:7f:a9:ae:d1:24:e2:1f:
    98:92:34:db:f3
ASN1 OID: prime256v1
NIST CURVE: P-256
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIEBYJ7AV6WdaB5ET/fwUcLm5zU/cfFx5ttn7Gd8Fi7ujoAoGCCqGSM49
AwEHoUQDQgAEDeC8L6Yal7Sdel9lF5IfqqDk2jYkbnjEpbTDv3vjs7XDBfWlEtJ1
0gPpHiJ6l4P9qvFCYX+prtEk4h+YkjTb8w==
-----END EC PRIVATE KEY-----

// ===========================
read EC key
read EC key
{
  "pem": "secp256k1.key.pem",
  "pubkey": "35464be3e25f97de7ca1db3c4add653ff43b94a66e7aa66f467c913d176738d86dc49c29223a0b483c0b03b09bcd56ea50809b63c8d3eb589ac3ad749cc8b299",
  "privkey": "ae95070d72d7db3b34932938268957987280d4d1a3d59eb0683b3bef7a8a6ead"
}

```

### copy pem

```
bash-4.3# pwd
/opt/ddj/app
bash-4.3# tree .
.
├── key2address.js
├── prime256v1.key.pem
├── secp256k1.key.pem
└── secp256k1.key.pem.json

0 directories, 4 files

bash-4.3# node key2address.js > mykey.json
bash-4.3# exit
exit
```

### import private key

```
$ geth account import priv
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 
Repeat passphrase: 
Address: {0bed7abd61247635c1973eb38474a2516ed1d884}
```

* 為何需要自行編譯 ethnode docker image
* Create full Ethereum wallet, keypair and address https://kobl.one/blog/create-full-ethereum-keypair-and-address/
* ethereumjs/keythereum: Create, import and export Ethereum keys https://github.com/ethereumjs/keythereum
* ethereumjs/ethereumjs-util: A collection of utility functions for Ethereum https://github.com/ethereumjs/ethereumjs-util
* Mastering Bitcoin http://chimera.labs.oreilly.com/books/1234000001802/ch04.html#pubkey
* The Math Behind Bitcoin - CoinDesk https://www.coindesk.com/math-behind-bitcoin/
* What is Elliptic Curve Cryptography? | CryptoCompare.com https://www.cryptocompare.com/wallets/guides/what-is-elliptic-curve-cryptography/
* Networkscanning with Nmap https://zero-day.io/nmap/
* BIP39 - Mnemonic Code https://iancoleman.github.io/bip39/