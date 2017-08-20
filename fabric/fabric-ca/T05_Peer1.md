## Hyperledger Fabric CA

* https://github.com/hyperledger/fabric-ca/blob/master/docs/source/users-guide.rst


### 註冊員admin註冊新節點peer1

```
$ docker-compose exec admin fabric-ca-client register --id.name peer1 --id.type peer --id.affiliation org2.department1 --id.secret peer1pw
2017/07/14 05:06:51 [INFO] User provided config file: /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml
2017/07/14 05:06:51 [INFO] Configuration file location: /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml
Password: peer1pw
```

### 啟動節點peer1申請ECert

```
$ docker-compose up -d peer1
$ docker-compose exec peer1 fabric-ca-client enroll -u http://peer1:peer1pw@ca:7054

2017/08/20 15:01:17 [INFO] User provided config file: /etc/hyperledger/clients/peer1/fabric-ca-client-config.yaml
2017/08/20 15:01:17 [INFO] Created a default configuration file at /etc/hyperledger/clients/peer1/fabric-ca-client-config.yaml
2017/08/20 15:01:17 [INFO] generating key: &{A:ecdsa S:256}
2017/08/20 15:01:17 [INFO] encoded CSR
2017/08/20 15:01:17 [INFO] Stored client certificate at /etc/hyperledger/clients/peer1/msp/signcerts/cert.pem
2017/08/20 15:01:17 [INFO] Stored CA root certificate at /etc/hyperledger/clients/peer1/msp/cacerts/ca-7054.pem

$ docker-compose exec ddj tree /data/
/data/
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
├── ca
│   └── fabric-ca-server
│       ├── ca-cert.pem
│       ├── ca-key.pem
│       ├── fabric-ca-server-config.yaml
│       ├── fabric-ca-server.db
│       ├── key.pem
│       └── msp
│           └── keystore
│               └── da4101aff705c908940c092b051badfddc13f33dc8f97c9d154eb3e66ab82c17_sk
└── peer1
    └── clients
        └── peer1
            ├── fabric-ca-client-config.yaml
            └── msp
                ├── cacerts
                │   └── ca-7054.pem
                ├── keystore
                │   └── 4955202af1ad327a036ffb99ae2d6d7ad5c41ad7f2ea09b96acb7c6d05ca5306_sk
                └── signcerts
                    └── cert.pem

25 directories, 18 files


$ docker-compose exec ddj openssl x509 -in /data/peer1/clients/peer1/msp/signcerts/cert.pem -text

Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            1a:f7:cb:1d:92:5a:5e:37:8d:37:0b:b0:9a:1e:3e:18:3b:07:b1:5f
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=TW, ST=TAIWAN, L=TAICHUNG, O=DLTDOJO, OU=ca.dltdojo.org, CN=ca.dltdojo.org
        Validity
            Not Before: Aug 20 14:56:00 2017 GMT
            Not After : Aug 20 14:56:00 2018 GMT
        Subject: C=US, ST=North Carolina, O=Hyperledger, OU=Fabric, CN=peer1
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:c7:8d:cc:30:77:65:57:c4:7f:a6:9c:2a:27:fb:
                    c3:19:3d:48:88:8f:3d:3b:03:7a:37:8b:82:38:c5:
                    78:16:b5:6e:69:9d:5a:bc:b2:9c:c1:ca:33:c0:e3:
                    90:1e:d6:19:f2:9f:da:9f:9f:3a:b0:69:4e:b3:67:
                    5b:5b:3d:29:20
                ASN1 OID: prime256v1
                NIST CURVE: P-256
        X509v3 extensions:
            X509v3 Key Usage: critical
                Digital Signature
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Subject Key Identifier:
                AD:1F:7A:26:55:BF:D5:55:3F:39:54:69:FB:C7:E1:F2:86:D8:96:22
            X509v3 Authority Key Identifier:
                keyid:DD:BB:AA:A5:50:C0:53:32:CC:98:A6:D3:71:E9:35:97:78:F1:77:C7

            X509v3 Subject Alternative Name:
                DNS:885025c7b0f7
    Signature Algorithm: ecdsa-with-SHA256
         30:44:02:20:41:35:5e:81:7f:24:1e:29:63:0f:24:c2:e0:28:
         62:af:fe:cc:d0:c6:48:9b:90:65:80:25:75:53:8c:b3:0e:b7:
         02:20:09:ad:0f:37:5b:15:18:e7:38:3d:ec:f4:64:95:12:2c:
         4a:41:12:54:c7:1b:3c:aa:69:41:85:a7:9e:6c:93:6a
-----BEGIN CERTIFICATE-----
MIICTDCCAfOgAwIBAgIUGvfLHZJaXjeNNwuwmh4+GDsHsV8wCgYIKoZIzj0EAwIw
dTELMAkGA1UEBhMCVFcxDzANBgNVBAgMBlRBSVdBTjERMA8GA1UEBwwIVEFJQ0hV
TkcxEDAOBgNVBAoMB0RMVERPSk8xFzAVBgNVBAsMDmNhLmRsdGRvam8ub3JnMRcw
FQYDVQQDDA5jYS5kbHRkb2pvLm9yZzAeFw0xNzA4MjAxNDU2MDBaFw0xODA4MjAx
NDU2MDBaMF0xCzAJBgNVBAYTAlVTMRcwFQYDVQQIEw5Ob3J0aCBDYXJvbGluYTEU
MBIGA1UEChMLSHlwZXJsZWRnZXIxDzANBgNVBAsTBkZhYnJpYzEOMAwGA1UEAxMF
cGVlcjEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAATHjcwwd2VXxH+mnCon+8MZ
PUiIjz07A3o3i4I4xXgWtW5pnVq8spzByjPA45Ae1hnyn9qfnzqwaU6zZ1tbPSkg
o3kwdzAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUrR96
JlW/1VU/OVRp+8fh8obYliIwHwYDVR0jBBgwFoAU3buqpVDAUzLMmKbTcek1l3jx
d8cwFwYDVR0RBBAwDoIMODg1MDI1YzdiMGY3MAoGCCqGSM49BAMCA0cAMEQCIEE1
XoF/JB4pYw8kwuAoYq/+zNDGSJuQZYAldVOMsw63AiAJrQ83WxUY5zg97PRklRIs
SkESVMcbPKppQYWnnmyTag==
-----END CERTIFICATE-----

```

### 停止容器並清除共用volume
```
$ docker-compose stop && docker-compose rm -f
```