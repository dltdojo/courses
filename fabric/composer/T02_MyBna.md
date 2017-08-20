## Hyperledger Composer(HC)


### 啟動 Playground 

使用本地端需要先啟動。

* https://hyperledger.github.io/composer/

```
$ ./composer.sh
```
### 下載basic-sample-network開發

* https://github.com/dltdojo/composer-sample-networks/tree/master/packages/basic-sample-network
* https://github.com/hyperledger/composer-sample-networks
* 下載composer-sample-networks
* VSCode開啟 \\DEVIP\smb\composer-sample-networks 編輯

```
$ cd /home/dltdojo/smb
$ git clone https://github.com/dltdojo/composer-sample-networks.git
$ cd composer-sample-networks
$ npm i
```

### 修改basic-sample-network網路後匯出bna

* https://github.com/dltdojo/composer-sample-networks/commit/721350f3cd1204c9276ab810a50b714744715e7e#diff-049d1933fd058354585438e6e56670b8
* lib/smaple.js 
* models/sample.cto
* permissions.acl
* test/sample.js
* dist/basic-sample-network.bna
* http://DEVIP:8080/

```
$ pwd
/home/dltdojo/smb/composer-sample-networks
$ cd packages/basic-sample-network/
$ npm run prepublish

> basic-sample-network@0.1.1 prepublish /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network
> mkdirp ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/basic-sample-network.bna


Creating Business Network Archive


Looking for package.json of Business Network Definition
        Input directory: /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network

Found:
        Description: The Hello World of Hyperledger Composer samples
        Name: basic-sample-network
        Identifier: basic-sample-network@0.1.1

Written Business Network Definition Archive file to
        Output file: ./dist/basic-sample-network.bna

Command succeeded
```

### 停止Fabric Composer測試網路

```
$ cd /home/dltdojo/smb/composer/
$ ./composer.sh stop
Stopping all Docker containers
Killing all running containers
```