## Hyperledger Fabric CA

* https://github.com/hyperledger/fabric-ca/blob/master/docs/source/users-guide.rst

### 使用客製CA憑證啟動CA服務
```
$ docker-compose up -d ca
$ docker-compose logs ca
$ docker-compose exec ddj tree /data
```

log details

```
dltdojo:fabric-ca$ docker-compose up -d ca
Creating fabricca_ca_1
dltdojo:fabric-ca$ docker-compose logs ca
Attaching to fabricca_ca_1
ca_1     | 2017/08/14 14:54:56 [INFO] Created default configuration file at /etc/hyperledger/fabric-ca-server/fabric-ca-server-config.yaml
ca_1     | 2017/08/14 14:54:56 [INFO] Starting server in home directory: /etc/hyperledger/fabric-ca-server
ca_1     | 2017/08/14 14:54:56 [INFO] The CA key and certificate files already exist
ca_1     | 2017/08/14 14:54:56 [INFO] Key file location: /etc/hyperledger/fabric-ca-server/ca-key.pem
ca_1     | 2017/08/14 14:54:56 [INFO] Certificate file location: /etc/hyperledger/fabric-ca-server/ca-cert.pem
ca_1     | 2017/08/14 14:54:56 [INFO] Initialized sqlite3 database at /etc/hyperledger/fabric-ca-server/fabric-ca-server.db
ca_1     | 2017/08/14 14:54:56 [INFO] Home directory for default CA: /etc/hyperledger/fabric-ca-server
ca_1     | 2017/08/14 14:54:56 [INFO] Listening on %!s(int=7054)%!(EXTRA string=http://0.0.0.0:7054)

dltdojo:fabric-ca$ docker-compose exec ddj tree /data
/data
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

4 directories, 6 files

```