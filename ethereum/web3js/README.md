### web3js

* ethereum/web3.js: Ethereum JavaScript API https://github.com/ethereum/web3.js/
* web3.js 1.0 http://web3js.readthedocs.io/en/1.0/
* web3.js 0.20 https://github.com/ethereum/wiki/wiki/JavaScript-API

### Local Lite-Server Mode

install and start lite-server

```
$ npm install -g lite-server
$ lite-server
```

stop lite-server

```
Ctrl+C
```

### Local Docker Dev Mode

* Remix Solidity IDE http://<VMIP>:8080/
* web3js example http://<VMIP>:8080/mount/
* Bitcoin core 0.14.2 http://<VMIP>:12750/

json rpc

* geth dev mode (accounts unlocked) http://<VMIP>:8545/
* ethereumjs/testrpc (accounts unlocked) http://<VMIP>:18545/

start all containers

```
$ docker-compose up -d remix
$ docker-compose up -d gethdev
$ docker-compose up -d testrpc
$ docker-compose up -d bitcoind
// docker-compose up -d
```

stop all containers

```
$ docker-compose stop
Stopping web3js_gethdev_1 ...
Stopping web3js_testrpc_1 ...
Stopping web3js_bitcoind_1 ...
Stopping web3js_remix_1 ... done
```