## Ethereum and HyperLedger Fabric Coding Workshop

### 1. Setting up the development environment

* Visual Studio Code https://code.visualstudio.com/download
* VirtualBox https://www.virtualbox.org/
* VitrualBox Virtual Device (README.VM.md)
* putty http://www.putty.org/
* Google Chrome Browser https://www.google.com.tw/chrome/browser/desktop/index.html

### Create a key 

```
$ docker-compose up -d httpd
$ docker-compose up -d ddjnode
$ souce alias.sh
$ ddjnode openssl version
OpenSSL 1.0.2k  26 Jan 2017
$ ddj bash
# cd /opt/ddjnode
# openssl ecparam -list_curves

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


# openssl ecparam -name secp256k1 -genkey -out secp256k1.key.pem
# openssl ecparam -name prime256v1 -genkey -out prime256v1.key.pem
# openssl ec -text -in secp256k1.key.pem 
read EC key
Private-Key: (256 bit)
priv:
    57:41:f0:59:66:18:12:10:36:a2:b3:75:9b:93:1d:
    00:1c:8c:60:94:15:8e:55:dd:f4:70:84:1f:25:ca:
    47:d6
pub:
    04:51:db:b7:a6:10:ef:43:a5:e9:6c:3f:22:80:a5:
    e9:c6:e0:d5:9b:89:82:bc:fa:35:1b:0c:7d:44:92:
    f5:42:62:bd:79:0f:ff:8f:84:36:bc:62:3f:f2:05:
    52:0e:4d:75:11:a0:36:1a:3a:a7:5b:77:4c:fb:73:
    a0:1a:98:b3:a4
ASN1 OID: secp256k1
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIFdB8FlmGBIQNqKzdZuTHQAcjGCUFY5V3fRwhB8lykfWoAcGBSuBBAAK
oUQDQgAEUdu3phDvQ6XpbD8igKXpxuDVm4mCvPo1Gwx9RJL1QmK9eQ//j4Q2vGI/
8gVSDk11EaA2GjqnW3dM+3OgGpizpA==
-----END EC PRIVATE KEY-----

# openssl ec -text -in prime256v1.key.pem
read EC key
Private-Key: (256 bit)
priv:
    00:e5:35:92:bd:d0:f6:31:ea:ee:ac:e5:07:8a:cb:
    13:c7:51:0d:a0:ab:d3:32:d3:fb:97:21:ae:94:22:
    a7:bc:9c
pub:
    04:c5:0a:ec:e0:aa:4e:eb:e9:57:d5:aa:fb:8d:f0:
    45:c4:09:6b:cf:ed:e7:36:67:41:d0:a7:92:63:96:
    ea:f2:ce:c4:95:ad:40:37:c8:36:4d:2e:77:52:07:
    68:3c:bf:0e:cb:56:8e:bc:d2:91:b1:e6:c5:fa:58:
    cb:2e:f5:49:92
ASN1 OID: prime256v1
NIST CURVE: P-256
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIOU1kr3Q9jHq7qzlB4rLE8dRDaCr0zLT+5chrpQip7ycoAoGCCqGSM49
AwEHoUQDQgAExQrs4KpO6+lX1ar7jfBFxAlrz+3nNmdB0KeSY5bq8s7Ela1AN8g2
TS53UgdoPL8Oy1aOvNKRsebF+ljLLvVJkg==
-----END EC PRIVATE KEY-----

# ./pem2json.sh secp256k1.key.pem
# cat pub | keccak-256sum -x -l | tr -d ' -' | tail -c 41 > address
# geth account import priv
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 
Repeat passphrase: 
Address: {0bed7abd61247635c1973eb38474a2516ed1d884}

# keyethereum keyfile

$ namp -p 8080 --open 192.168.2.* 
```

* Create full Ethereum wallet, keypair and address https://kobl.one/blog/create-full-ethereum-keypair-and-address/
* ethereumjs/keythereum: Create, import and export Ethereum keys https://github.com/ethereumjs/keythereum
* ethereumjs/ethereumjs-util: A collection of utility functions for Ethereum https://github.com/ethereumjs/ethereumjs-util
* Mastering Bitcoin http://chimera.labs.oreilly.com/books/1234000001802/ch04.html#pubkey
* The Math Behind Bitcoin - CoinDesk https://www.coindesk.com/math-behind-bitcoin/
* What is Elliptic Curve Cryptography? | CryptoCompare.com https://www.cryptocompare.com/wallets/guides/what-is-elliptic-curve-cryptography/
* Networkscanning with Nmap https://zero-day.io/nmap/
* BIP39 - Mnemonic Code https://iancoleman.github.io/bip39/