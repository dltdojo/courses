## Hyperledger Fabric CA

* https://github.com/hyperledger/fabric-ca/blob/master/docs/source/users-guide.rst

### 確認CA預設admin註冊員受理權限

* identity name : admin
* identity pass : adminPass
* hf.Registrar.DelegateRoles: "client,user,validator,auditor"

```
$ docker-compose exec ddj grep -A 5 -B 15 "hf.Registrar.Roles:" /data/ca/fabric-ca-server/fabric-ca-server-config.yaml

#     which means this "registry" section is ignored.
#############################################################################
registry:
  # Maximum number of times a password/secret can be reused for enrollment
  # (default: -1, which means there is no limit)
  maxenrollments: -1

  # Contains identity information which is used when LDAP is disabled
  identities:
     - name: admin
       pass: adminPass
       type: client
       affiliation: ""
       maxenrollments: -1
       attrs:
          hf.Registrar.Roles: "client,user,peer,validator,auditor"
          hf.Registrar.DelegateRoles: "client,user,validator,auditor"
          hf.Revoker: true
          hf.IntermediateCA: true

#############################################################################
```

### 確認可註冊隸屬關係Affiliation

```
$ docker-compose exec ddj grep -B 5 -A 10 "Affiliation" /ddj/ca/fabric-ca-server/fabric-ca-server-config.yaml

#############################################################################
#  Affiliation section
#############################################################################
affiliations:
   org1:
      - department1
      - department2
   org2:
      - department1

```

### 註冊員申請登記憑證 Enrollment Certificate (ECert)

```
$ docker-compose up -d admin
$ docker-compose exec admin fabric-ca-client enroll -u http://admin:adminPass@ca:7054
$ docker-compose exec ddj tree /data
$ docker-compose exec ddj openssl x509 -in /data/admin/clients/admin/msp/signcerts/cert.pem -text
```

log details

```
dltdojo:fabric-ca$ docker-compose up -d admin
Creating fabricca_admin_1
dltdojo:fabric-ca$ docker-compose exec admin fabric-ca-client enroll -u http://admin:adminPass@ca:7054
2017/08/14 15:19:39 [INFO] User provided config file: /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml
2017/08/14 15:19:39 [INFO] Created a default configuration file at /etc/hyperledger/clients/admin/fabric-ca-client-config.yaml
2017/08/14 15:19:39 [INFO] generating key: &{A:ecdsa S:256}
2017/08/14 15:19:39 [INFO] encoded CSR
2017/08/14 15:19:39 [INFO] Stored client certificate at /etc/hyperledger/clients/admin/msp/signcerts/cert.pem
2017/08/14 15:19:39 [INFO] Stored CA root certificate at /etc/hyperledger/clients/admin/msp/cacerts/ca-7054.pem
dltdojo:fabric-ca$ docker-compose exec ddj tree /data
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

11 directories, 10 files
dltdojo:fabric-ca$ docker-compose exec ddj openssl x509 -in /data/admin/clients/admin/msp/signcerts/cert.pem -text
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            54:b6:9e:d7:ce:a3:28:d1:46:e8:af:22:04:70:e8:ef:d7:95:f2:d5
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=TW, ST=TAIWAN, L=TAICHUNG, O=DLTDOJO, OU=ca.dltdojo.org, CN=ca.dltdojo.org
        Validity
            Not Before: Aug 14 15:15:00 2017 GMT
            Not After : Aug 14 15:15:00 2018 GMT
        Subject: C=US, ST=North Carolina, O=Hyperledger, OU=Fabric, CN=admin
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:0c:e8:76:a7:04:a5:93:28:da:30:95:ea:89:29:
                    65:d7:a6:80:d8:49:d3:3e:a2:64:5b:57:16:fb:18:
                    1d:79:c5:86:bc:ce:6b:ec:63:d5:1e:93:7c:61:04:
                    54:b3:23:ec:e2:14:6a:21:ba:15:3e:c1:c2:df:a7:
                    91:ea:a3:ab:98
                ASN1 OID: prime256v1
                NIST CURVE: P-256
        X509v3 extensions:
            X509v3 Key Usage: critical
                Digital Signature
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Subject Key Identifier:
                C6:08:FE:6F:A6:66:EA:B1:CA:DF:B6:D0:83:27:07:54:59:E6:4E:CA
            X509v3 Authority Key Identifier:
                keyid:DD:BB:AA:A5:50:C0:53:32:CC:98:A6:D3:71:E9:35:97:78:F1:77:C7

            X509v3 Subject Alternative Name:
                DNS:ba7837ebdfee
    Signature Algorithm: ecdsa-with-SHA256
         30:44:02:20:46:d5:b9:a7:f3:93:b7:3f:fa:b9:37:18:04:33:
         0a:dc:03:0c:ad:3e:0c:2f:88:d0:61:6a:44:f3:60:35:3d:29:
         02:20:6a:3b:00:07:d0:18:1a:29:e2:4b:c2:ea:0f:39:2a:95:
         a9:13:7d:b0:65:5b:5d:33:25:73:d0:e7:47:a2:b8:f5
-----BEGIN CERTIFICATE-----
MIICTDCCAfOgAwIBAgIUVLae186jKNFG6K8iBHDo79eV8tUwCgYIKoZIzj0EAwIw
dTELMAkGA1UEBhMCVFcxDzANBgNVBAgMBlRBSVdBTjERMA8GA1UEBwwIVEFJQ0hV
TkcxEDAOBgNVBAoMB0RMVERPSk8xFzAVBgNVBAsMDmNhLmRsdGRvam8ub3JnMRcw
FQYDVQQDDA5jYS5kbHRkb2pvLm9yZzAeFw0xNzA4MTQxNTE1MDBaFw0xODA4MTQx
NTE1MDBaMF0xCzAJBgNVBAYTAlVTMRcwFQYDVQQIEw5Ob3J0aCBDYXJvbGluYTEU
MBIGA1UEChMLSHlwZXJsZWRnZXIxDzANBgNVBAsTBkZhYnJpYzEOMAwGA1UEAxMF
YWRtaW4wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQM6HanBKWTKNowleqJKWXX
poDYSdM+omRbVxb7GB15xYa8zmvsY9Uek3xhBFSzI+ziFGohuhU+wcLfp5Hqo6uY
o3kwdzAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUxgj+
b6Zm6rHK37bQgycHVFnmTsowHwYDVR0jBBgwFoAU3buqpVDAUzLMmKbTcek1l3jx
d8cwFwYDVR0RBBAwDoIMYmE3ODM3ZWJkZmVlMAoGCCqGSM49BAMCA0cAMEQCIEbV
uafzk7c/+rk3GAQzCtwDDK0+DC+I0GFqRPNgNT0pAiBqOwAH0BgaKeJLwuoPOSqV
qRN9sGVbXTMlc9DnR6K49Q==
-----END CERTIFICATE-----

```