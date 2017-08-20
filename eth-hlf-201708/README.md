## Ethereum and HyperLedger Fabric Coding Workshop

* 1 開發環境與Ethereum介紹練習
  * Docker, VirtualBox
  * 區塊鏈源起
  * Ethereum
  * 收發乙太幣資產 MyEtherWallet/MetaMask
  * 建立與執行智能合約
* 2 加密貨幣與區塊鏈基礎
  * hash
    * sha256
    * ripemd160
    * keccak
    * sha3
    * hash256
    * hash160
  * key
    * openssl
    * secp256k1
    * prime256v1
    * signature
* 3 Solidity智能合約實作
  * Smart Contract
  * ERC20 Contract
  * Multisig Contract
* 4 Ethereum開發
  * EVM
  * web3
  * Truffle
  * Ethereum Name Service
  * explorer
  * Private PoA chain
* 5 hyperledger fabric介紹
  * 架構介紹
  * 收發資產
  * Composer playground
* 6 Hyperledger Fabric 開發
  * Fabric CA
  * Kafka
  * Hyperledger composer
* 7 Hyperledger Composer Business Network實作
  * basic-sample-network
  * animaltracking-network
  * carauction-network
  * trade-network
  * vehicle-lifecycle-network


### 區塊鏈源起

* Bitcoin - Open source P2P money https://bitcoin.org/zh_TW/
* https://github.com/dltdojo/courses/tree/master/blockchain
* https://github.com/dltdojo/courses/tree/master/blockchain/trustnetwork/net201707/backend

```
$ cd /home/dltdojo/smb
$ git clone git@github.com:dltdojo/courses.git
$ cd courses/blockchain/trustnetwork/net201707/backend
$ docker-compose up -d
$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
backend_backend_   docker-php-        Up                 0.0.0.0:8081->80
1                  entrypoint apac                       /tcp
                   ...
backend_db_1       docker-            Up                 3306/tcp
                   entrypoint.sh
                   mysqld
backend_phpmyadm   /run.sh            Up                 0.0.0.0:8088->80
in_1               phpmyadmin                            /tcp

```

#### phpmyadmin

* phpmyadmin http://DEVIP:8088/
* username: root
* password: root

#### 新增資料庫mydb並修改帳戶餘額

* 伺服器: db - SQL - 在伺服器 "db" 執行 SQL 查詢: 

```
CREATE DATABASE mydb;
use mydb;
CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
SELECT * FROM mytable;
```

#### 啟動後端開發PHP容器

* http://DEVIP:8081/

#### 關閉容器服務

```
$ docker-compose stop
$ docker-compose rm
$ docker-compose ps
```

## Ethereum 介紹 

* http://truffleframework.com/tutorials/ethereum-overview

## 收發乙太幣資產 MyEtherWallet/MetaMask

* https://faucet.rinkeby.io/
* https://github.com/kovan-testnet/faucet
* https://www.myetherwallet.com/
* https://metamask.io/

Rinkeby Testnet 

* PrivateKey  208065a247edbe5df4d86fbdc0171303f23a76961be9f6013850dd2bdc759bbb 
* address  https://rinkeby.etherscan.io/address/0x0BED7ABd61247635c1973eB38474A2516eD1D884

## 建立與執行智能合約

* coin.sol
* https://remix.ethereum.org
* JavaScript VM

