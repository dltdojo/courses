* https://wiki.openssl.org/index.php/Command_Line_Utilities
* https://kobl.one/blog/create-full-ethereum-keypair-and-address/
* Switch to libsecp256k1-based ECDSA validation by sipa · Pull Request #6954 · bitcoin/bitcoin https://github.com/bitcoin/bitcoin/pull/6954
* go-ethereum/crypto/secp256k1/libsecp256k1 at master · ethereum/go-ethereum  https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1/libsecp256k1

```
$ cd openssl/
$ ./eckey.sh

// ===========================
$ openssl version
OpenSSL 1.0.2g  1 Mar 2016

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
    00:9c:9b:f4:c7:69:56:c6:15:1a:40:e5:c5:22:69:
    f7:56:9e:a1:0f:bb:d7:37:32:cd:d4:dc:ec:b5:26:
    f2:64:04
pub:
    04:0c:a7:90:6e:91:eb:2a:87:ae:71:eb:f6:f8:1f:
    97:e7:96:ff:c2:e4:b3:c5:ea:46:b7:c2:cc:64:5f:
    21:c8:7e:23:b6:4c:df:66:2a:ae:a4:84:88:07:ce:
    8b:7e:8f:51:6b:38:f0:62:2f:c7:15:82:38:4a:e8:
    d7:4b:8e:98:d5
ASN1 OID: secp256k1
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIJyb9MdpVsYVGkDlxSJp91aeoQ+71zcyzdTc7LUm8mQEoAcGBSuBBAAK
oUQDQgAEDKeQbpHrKoeucev2+B+X55b/wuSzxepGt8LMZF8hyH4jtkzfZiqupISI
B86Lfo9RazjwYi/HFYI4SujXS46Y1Q==
-----END EC PRIVATE KEY-----

// ===========================
$ openssl ecparam -name prime256v1 -genkey -out prime256v1.key.pem
$ openssl ec -text -in prime256v1.key.pem
read EC key
Private-Key: (256 bit)
priv:
    27:1f:5a:85:18:c4:a5:ae:32:e2:5c:d8:89:09:ed:
    67:c6:ee:41:70:a0:33:80:0a:42:1b:4d:3e:81:7c:
    63:5f
pub:
    04:f3:b8:27:2f:84:e9:4d:40:dc:5b:3a:b4:98:da:
    75:a1:e9:9e:af:5a:61:30:32:36:d4:f7:cd:0f:cd:
    6f:a3:b0:72:d2:f2:7a:bd:f0:b9:da:12:c4:eb:14:
    71:b6:2b:32:69:87:0c:c8:b3:0a:82:e1:98:df:1d:
    31:f9:81:83:9a
ASN1 OID: prime256v1
NIST CURVE: P-256
writing EC key
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEICcfWoUYxKWuMuJc2IkJ7WfG7kFwoDOACkIbTT6BfGNfoAoGCCqGSM49
AwEHoUQDQgAE87gnL4TpTUDcWzq0mNp1oemer1phMDI21PfND81vo7By0vJ6vfC5
2hLE6xRxtisyaYcMyLMKguGY3x0x+YGDmg==
-----END EC PRIVATE KEY-----

// ===========================
read EC key
read EC key
{
  "pem": "secp256k1.key.pem",
  "pubkey": "0ca7906e91eb2a87ae71ebf6f81f97e796ffc2e4b3c5ea46b7c2cc645f21c87e23b64cdf662aaea4848807ce8b7e8f516b38f0622fc71582384ae8d74b8e98d5",
  "privkey": "9c9bf4c76956c6151a40e5c52269f7569ea10fbbd73732cdd4dcecb526f26404"
}

```

### run eckey.sh in ethnode image

```
$ docker run -it --rm dltdojo/ethnode:6.a.2 subapp/eckey.sh
```