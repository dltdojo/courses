## Hyperledger Fabric CA

* https://github.com/hyperledger/fabric-ca/blob/master/docs/source/users-guide.rst


### 註冊員admin註冊新使用者alice

```
$ docker-compose up -d admin
$ docker-compose exec admin fabric-ca-client register --id.name alice --id.type user --id.affiliation org1.department1 --id.attrs 'hf.Revoker=true,foo=bar'
2017/07/14 02:34:38 [INFO] User provided config file: /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml
2017/07/14 02:34:38 [INFO] Configuration file location: /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml

Password: QJdmOcacGDoJ

```

### 啟動使用者alice節點，取得密碼申請ECert

```
$ docker-compose up -d alice
$ docker-compose exec alice fabric-ca-client enroll -u http://alice:QJdmOcacGDoJ@ca:7054

2017/07/14 05:04:58 [INFO] User provided config file: /etc/hyperledger/clients/alice/fabric-ca-client-config.yaml
2017/07/14 05:04:58 [INFO] Created a default configuration file at /etc/hyperledger/clients/alice/fabric-ca-client-config.yaml
2017/07/14 05:04:58 [INFO] generating key: &{A:ecdsa S:256}
2017/07/14 05:04:58 [INFO] encoded CSR
2017/07/14 05:04:59 [INFO] Stored client certificate at /etc/hyperledger/clients/alice/msp/signcerts/cert.pem
2017/07/14 05:04:59 [INFO] Stored CA certificate chain at /etc/hyperledger/clients/alice/msp/cacerts/ca-7054.pem

$ docker-compose exec ddj tree /data
/data
├── admin
│   └── clients
│       └── admin
│           ├── fabric-ca-client-config.yaml
│           └── msp
│               ├── cacerts
│               │   └── ca-7054.pem
│               ├── keystore
│               │   └── 68f0ca86ab7bbdeec000a7c7b1ccb7f99efa389410fe2ee1ce61c1e35665d3fc_sk
│               └── signcerts
│                   └── cert.pem
├── alice
│   └── clients
│       └── alice
│           ├── fabric-ca-client-config.yaml
│           └── msp
│               ├── cacerts
│               │   └── ca-7054.pem
│               ├── keystore
│               │   └── 54defdfadaa372323320d3d34b4318186c10069a3459ffee7382bf466dc16e94_sk
│               └── signcerts
│                   └── cert.pem
└── ca
    └── fabric-ca-server
        ├── ca-cert.pem
        ├── ca-key.pem
        ├── fabric-ca-server-config.yaml
        ├── fabric-ca-server.db
        ├── key.pem
        └── msp
            └── keystore
                └── da4101aff705c908940c092b051badfddc13f33dc8f97c9d154eb3e66ab82c17_sk

18 directories, 14 files

```

### 檢視alice的ECert，確認CN欄位。

```
$ docker-compose exec ddj openssl x509 -in /data/alice/clients/alice/msp/signcerts/cert.pem -text

Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            55:1c:08:29:4a:77:fa:76:1b:66:61:d1:de:34:64:84:73:d5:83:4f
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=TW, ST=TAIWAN, L=TAICHUNG, O=DLTDOJO, OU=ca.dltdojo.org, CN=ca.dltdojo.org
        Validity
            Not Before: Aug 20 14:46:00 2017 GMT
            Not After : Aug 20 14:46:00 2018 GMT
        Subject: C=US, ST=North Carolina, O=Hyperledger, OU=Fabric, CN=alice
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:1f:d7:1c:7f:24:08:a6:39:e3:5d:46:62:59:21:
                    06:c6:73:6e:34:d2:d7:cb:c4:3b:03:64:65:aa:eb:
                    62:e2:9e:fb:96:eb:9f:33:0c:f4:41:4d:d8:96:cc:
                    4b:fd:50:a2:91:1d:b3:9d:59:4a:c0:80:25:22:96:
                    87:23:fd:68:ca
                ASN1 OID: prime256v1
                NIST CURVE: P-256
        X509v3 extensions:
            X509v3 Key Usage: critical
                Digital Signature
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Subject Key Identifier:
                EF:BE:BC:69:04:53:28:F3:76:17:1D:3D:4A:53:4E:0A:3E:A0:17:89
            X509v3 Authority Key Identifier:
                keyid:DD:BB:AA:A5:50:C0:53:32:CC:98:A6:D3:71:E9:35:97:78:F1:77:C7

            X509v3 Subject Alternative Name:
                DNS:2c891b1605a0
    Signature Algorithm: ecdsa-with-SHA256
         30:44:02:20:23:e8:01:47:7e:70:19:05:8f:48:62:08:3c:40:
         7c:d0:3c:2b:8d:0b:1f:0c:b9:42:a4:2f:c9:48:12:d3:df:ea:
         02:20:57:17:34:0a:02:e8:5d:e1:c3:0a:6f:f5:0d:fe:01:79:
         f2:e6:ab:41:d1:7a:84:0f:43:8b:e1:e8:58:40:b2:e4
-----BEGIN CERTIFICATE-----
MIICTDCCAfOgAwIBAgIUVRwIKUp3+nYbZmHR3jRkhHPVg08wCgYIKoZIzj0EAwIw
dTELMAkGA1UEBhMCVFcxDzANBgNVBAgMBlRBSVdBTjERMA8GA1UEBwwIVEFJQ0hV
TkcxEDAOBgNVBAoMB0RMVERPSk8xFzAVBgNVBAsMDmNhLmRsdGRvam8ub3JnMRcw
FQYDVQQDDA5jYS5kbHRkb2pvLm9yZzAeFw0xNzA4MjAxNDQ2MDBaFw0xODA4MjAx
NDQ2MDBaMF0xCzAJBgNVBAYTAlVTMRcwFQYDVQQIEw5Ob3J0aCBDYXJvbGluYTEU
MBIGA1UEChMLSHlwZXJsZWRnZXIxDzANBgNVBAsTBkZhYnJpYzEOMAwGA1UEAxMF
YWxpY2UwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQf1xx/JAimOeNdRmJZIQbG
c2400tfLxDsDZGWq62LinvuW658zDPRBTdiWzEv9UKKRHbOdWUrAgCUilocj/WjK
o3kwdzAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQU7768
aQRTKPN2Fx09SlNOCj6gF4kwHwYDVR0jBBgwFoAU3buqpVDAUzLMmKbTcek1l3jx
d8cwFwYDVR0RBBAwDoIMMmM4OTFiMTYwNWEwMAoGCCqGSM49BAMCA0cAMEQCICPo
AUd+cBkFj0hiCDxAfNA8K40LHwy5QqQvyUgS09/qAiBXFzQKAuhd4cMKb/UN/gF5
8uarQdF6hA9Di+HoWECy5A==
-----END CERTIFICATE-----


```

### 檢視alice的keystore與BCCSP設定

* BCCSP (BlockChain Crypto Service Provider) SW: https://github.com/hyperledger/fabric/tree/master/bccsp/sw
* Signature Algorithm: ecdsa-with-SHA256

```
$ docker-compose exec ddj cat /data/alice/clients/alice/msp/keystore/54defdfadaa372323320d3d34b4318186c10069a3459ffee7382bf466dc16e94_sk
-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg5ICEND7eC7YYmZMY
aP9zED6QFFMo8OMjzGL00ki5kDahRANCAAQf1xx/JAimOeNdRmJZIQbGc2400tfL
xDsDZGWq62LinvuW658zDPRBTdiWzEv9UKKRHbOdWUrAgCUilocj/WjK
-----END PRIVATE KEY-----

$ docker-compose exec ddj cat /data/alice/clients/alice/fabric-ca-client-config.yaml

#############################################################################
# BCCSP (BlockChain Crypto Service Provider) section allows to select which
# crypto implementation library to use
#############################################################################
bccsp:
    default: SW
    sw:
        hash: SHA2
        security: 256
        filekeystore:
            # The directory used for the software file-based keystore
            keystore: msp/keystore

```