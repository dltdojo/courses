* ethereum/web3.js: Ethereum JavaScript API https://github.com/ethereum/web3.js/
* https://github.com/dltdojo/container/tree/master/dltdojo/ethnode
* https://github.com/dltdojo/container/tree/master/dltdojo/geth

## web3 1.0 beta in node

* http://web3js.readthedocs.io/en/1.0/web3-eth.html#providers
* http provider 
* websocket provider
* ipc provider
* The HTTP provider is deprecated. http://web3js.readthedocs.io/en/1.0/web3-eth.html#providers

```
$ docker-compose up -d ethnode2
$ docker-compose exec ethnode2 bash
bash-4.3# node

> var Web3 = require('web3');
> var web3 = new Web3('http://localhost:8545'));
> web3.version
'1.0.0-beta.15'
> web3.currentProvider
HttpProvider { host: 'http://localhost:8545', timeout: 0, connected: false }
> web3.eth.getAccounts(console.log)
Promise {
  _bitField: 0,
  _fulfillmentHandler0: undefined,
  _rejectionHandler0: undefined,
  _promise0: undefined,
  _receiver0: undefined }
> null [ '0xb612C5dD3FaA246946aB11D6EB04bA162025BE6B' ]
> web3.eth.getBalance('0xb612C5dD3FaA246946aB11D6EB04bA162025BE6B').then(console.log)
Promise {
  _bitField: 0,
  _fulfillmentHandler0: undefined,
  _rejectionHandler0: undefined,
  _promise0: undefined,
  _receiver0: undefined }
> 1705000000000000000000

> web3.setProvider('ws://localhost:8546');
true
> web3.currentProvider
WebsocketProvider {
  responseCallbacks: {},
...

> web3.eth.getBalance('0xb612C5dD3FaA246946aB11D6EB04bA162025BE6B').then(console.log)
Promise {
  _bitField: 0,
  _fulfillmentHandler0: undefined,
  _rejectionHandler0: undefined,
  _promise0: undefined,
  _receiver0: undefined }
> 2140000000000000000000

> var net = require('net');
> web3.setProvider('/root/.ethereum/geth.ipc', net);
true
> web3.currentProvider
IpcProvider {
  responseCallbacks: {},
  notificationCallbacks: [ [Function: requestManagerNotification] ],
  path: '/root/.ethereum/geth.ipc',
...

> web3.eth.getBalance('0xb612C5dD3FaA246946aB11D6EB04bA162025BE6B').then(console.log)
Promise {
  _bitField: 0,
  _fulfillmentHandler0: undefined,
  _rejectionHandler0: undefined,
  _promise0: undefined,
  _receiver0: undefined }
> 3340000000000000000000

> web3.eth.accounts
Accounts {
  currentProvider: [Getter/Setter],
  _requestManager:
   RequestManager {

```

## web3 1.0.beta15 in browser

* Can't connect to remote node when using WebSockets with Javascript in v1.0.0-beta.13 (o is not a constructor) · Issue #960 · ethereum/web3.js https://github.com/ethereum/web3.js/issues/960

* Google chrome http://DEVIP:8080/

```
$ docker-compose up -d
```

Chrome Browser Developer Tools Console

T01.html : web3.js 0.20.1

```
> web3.version
Object {api: "0.20.1", getNode: function, getNetwork: function…}
> 
> web3.eth.blockNumber
1525

> web3.eth.accounts
["0x152ee5f4c1d24ce68a42f6796368117e36b4b64d"]
```

T01.beta.html

```
> web3.version
"1.0.0-beta.15"

> web3.providers
Object {WebsocketProvider: function, HttpProvider: function, IpcProvider: function}

> web3.currentProvider
o {host: "http://192.168.2.106:8545", timeout: 0, connected: true}
> web3.eth.accounts
b {_requestManager: e, givenProvider: null, providers: Object, _provider: o…}currentProvider: (...)
> web3.eth.getAccounts(console.log)
r {_bitField: 0, _fulfillmentHandler0: undefined, _rejectionHandler0: undefined, _promise0: undefined, _receiver0: undefined…}
```

stop all container

```
$ docker-compose stop
```

## web3 in Geth JavaScript console

```
$ docker run -it --rm ethereum/client-go --dev console

WARN [08-04|04:03:23] No etherbase set and no accounts found as default
INFO [08-04|04:03:23] Starting peer-to-peer node               instance=Geth/v1.7.0-unstable/linux-amd64/go1.7.3
INFO [08-04|04:03:23] Allocated cache and file handles         database=/tmp/ethereum_dev_mode/geth/chaindata cache=128 handles=1024
INFO [08-04|04:03:23] Writing custom genesis block
INFO [08-04|04:03:23] Initialised chain configuration          config="{ChainID: 1337 Homestead: 0 DAO: <nil> DAOSupport: false EIP150: 0 EIP155: 0 EIP158: 0 Metropolis: 9223372036854775807 Engine: ethash}"
WARN [08-04|04:03:23] Ethash used in test mode
WARN [08-04|04:03:23] Upgrading db log bloom bins
INFO [08-04|04:03:23] Bloom-bin upgrade completed              elapsed=59.573µs
INFO [08-04|04:03:23] Initialising Ethereum protocol           versions="[63 62]" network=1
INFO [08-04|04:03:23] Loaded most recent local header          number=0 hash=e5be92…38f3bc td=131072
INFO [08-04|04:03:23] Loaded most recent local full block      number=0 hash=e5be92…38f3bc td=131072
INFO [08-04|04:03:23] Loaded most recent local fast block      number=0 hash=e5be92…38f3bc td=131072
INFO [08-04|04:03:23] Starting P2P networking
INFO [08-04|04:03:23] started whisper v.5.0
INFO [08-04|04:03:23] RLPx listener up                         self="enode://1ca7f366c90435ddb1036b294fa3b1c2913e7ea1976e048f57b98ad8d8c1fba2c05ba76c5687aae615521df286cf6c0054f4c436de05cd75282a2aa3d69804c5@[::]:43134?discport=0"
INFO [08-04|04:03:23] IPC endpoint opened: /tmp/ethereum_dev_mode/geth.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.7.0-unstable/linux-amd64/go1.7.3
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

> web3.version
{
  api: "0.18.1",
  ethereum: "0x3f",
  network: "1",
  node: "Geth/v1.7.0-unstable/linux-amd64/go1.7.3",
  whisper: "5.0",
  getEthereum: function(callback),
  getNetwork: function(callback),
  getNode: function(callback),
  getWhisper: function(callback)
}
> web3.eth
{
  accounts: [],
  blockNumber: 0,
  coinbase: undefined,
  compile: {
    lll: function(),
    serpent: function(),
    solidity: function()
  },
  defaultAccount: undefined,
  defaultBlock: "latest",
  gasPrice: 0,
  hashrate: 0,
  mining: false,
  pendingTransactions: [],
  protocolVersion: "0x3f",
  syncing: false,
  call: function(),
  contract: function(abi),
  estimateGas: function(),
  filter: function(fil, callback),
  getAccounts: function(callback),
  getBalance: function(),
  getBlock: function(),
  getBlockNumber: function(callback),
  getBlockTransactionCount: function(),
  getBlockUncleCount: function(),
  getCode: function(),
  getCoinbase: function(callback),
  getCompilers: function(),
  getGasPrice: function(callback),
  getHashrate: function(callback),
  getMining: function(callback),
  getPendingTransactions: function(callback),
  getProtocolVersion: function(callback),
  getRawTransaction: function(),
  getRawTransactionFromBlock: function(),
  getStorageAt: function(),
  getSyncing: function(callback),
  getTransaction: function(),
  getTransactionCount: function(),
  getTransactionFromBlock: function(),
  getTransactionReceipt: function(),
  getUncle: function(),
  getWork: function(),
  iban: function(iban),
  icapNamereg: function(),
  isSyncing: function(callback),
  namereg: function(),
  resend: function(),
  sendIBANTransaction: function(),
  sendRawTransaction: function(),
  sendTransaction: function(),
  sign: function(),
  signTransaction: function(),
  submitTransaction: function(),
  submitWork: function()
}
> web3.providers
{
  HttpProvider: function(host, timeout),
  IpcProvider: function(path, net)
}
> web3.currentProvider
{
  newAccount: function(),
  send: function github.com/ethereum/go-ethereum/console.(*bridge).Send-fm(),
  sendAsync: function github.com/ethereum/go-ethereum/console.(*bridge).Send-fm(),
  sign: function(),
  unlockAccount: function()
}
> exit
INFO [08-04|04:05:56] IPC endpoint closed: /tmp/ethereum_dev_mode/geth.ipc
INFO [08-04|04:05:56] Blockchain manager stopped
INFO [08-04|04:05:56] Stopping Ethereum protocol
INFO [08-04|04:05:56] Ethereum protocol stopped
INFO [08-04|04:05:56] Transaction pool stopped
INFO [08-04|04:05:56] Database closed                          database=/tmp/ethereum_dev_mode/geth/chaindata
INFO [08-04|04:05:56] whisper stopped
```