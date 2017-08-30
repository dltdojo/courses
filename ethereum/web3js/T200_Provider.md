* ethereum/web3.js: Ethereum JavaScript API https://github.com/ethereum/web3.js/
* https://github.com/dltdojo/container/tree/master/dltdojo/ethnode
* https://github.com/dltdojo/container/tree/master/dltdojo/geth

```
$ docker-compose up -d
```
## T110 web3 1.0.beta in browser 

* Can't connect to remote node when using WebSockets with Javascript in v1.0.0-beta.13 (o is not a constructor) · Issue #960 · ethereum/web3.js https://github.com/ethereum/web3.js/issues/960
* Google chrome http://DEVIP:8080/mount/

T110.html

## web3 in Geth JavaScript console

```
$ docker-compose exec gethdev bash

bash-4.3# geth attach /root/.ethereum/geth.ipc

Welcome to the Geth JavaScript console!

instance: Geth/v1.6.7-stable/linux-amd64/go1.9beta2
coinbase: 0x22820c1b56c3cc63293fcbf485f23f8b01b8d951
at block: 450 (Sun, 20 Aug 2017 05:10:54 UTC)
 datadir: /root/.ethereum
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
bash-4.3# exit
exit
```