
### FooEvent.testEvent() on rinkeby chain

* https://rinkeby.etherscan.io/address/0x0c45dc711d35db7d8e09ec74fcd756502f733592
* https://rinkeby.etherscan.io/tx/0xf0442dfe26efe54a96123ba16123628d6afed2cf16ce8a2319b485c2819dc882
* Etherscan EventLogs[2] - Matches Topics[1] - search address
* logs - How does Ethereum make use of bloom filters? - Ethereum Stack Exchange  https://ethereum.stackexchange.com/questions/3418/how-does-ethereum-make-use-of-bloom-filters

```
Result: {
  "blockHash": "0x2d7ad814a5a133af7f03c83abec45b26f4ee3b624562aaad05060451332b92ad",
  "blockNumber": 741726,
  "contractAddress": null,
  "cumulativeGasUsed": 25217,
  "from": "0x7f36a05a8c81d6a89b282b333696e9274b3f43f0",
  "gasUsed": 25217,
  "logs": [
    {
      "address": "0x0c45dc711d35db7d8e09ec74fcd756502f733592",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ],
      "data": "0x00000000000000000000000000000000000000000000000000b1a2bc2ec50000",
      "blockNumber": 741726,
      "transactionHash": "0xf0442dfe26efe54a96123ba16123628d6afed2cf16ce8a2319b485c2819dc882",
      "transactionIndex": 0,
      "blockHash": "0x2d7ad814a5a133af7f03c83abec45b26f4ee3b624562aaad05060451332b92ad",
      "logIndex": 0,
      "removed": false
    },
    {
      "address": "0x0c45dc711d35db7d8e09ec74fcd756502f733592",
      "topics": [
        "0x7a2c2ad471d70e0a88640e6c3f4f5e975bcbccea7740c25631d0b74bb2c1cef4"
      ],
      "data": "0x0000000000000000000000000c45dc711d35db7d8e09ec74fcd756502f73359200000000000000000000000000000000000000000000000000b1a2bc2ec50000",
      "blockNumber": 741726,
      "transactionHash": "0xf0442dfe26efe54a96123ba16123628d6afed2cf16ce8a2319b485c2819dc882",
      "transactionIndex": 0,
      "blockHash": "0x2d7ad814a5a133af7f03c83abec45b26f4ee3b624562aaad05060451332b92ad",
      "logIndex": 1,
      "removed": false
    },
    {
      "address": "0x0c45dc711d35db7d8e09ec74fcd756502f733592",
      "topics": [
        "0x7f32d075ae25f22fef851731f202dc59873b7f08b4c98e8772ebde6051e3fb33",
        "0x0000000000000000000000000c45dc711d35db7d8e09ec74fcd756502f733592"
      ],
      "data": "0x00000000000000000000000000000000000000000000000000b1a2bc2ec50000",
      "blockNumber": 741726,
      "transactionHash": "0xf0442dfe26efe54a96123ba16123628d6afed2cf16ce8a2319b485c2819dc882",
      "transactionIndex": 0,
      "blockHash": "0x2d7ad814a5a133af7f03c83abec45b26f4ee3b624562aaad05060451332b92ad",
      "logIndex": 2,
      "removed": false
    }
  ],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000008000000000000000000041000000010008000000000000000000000000000000000000000000002000000000000200000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000400000000000020000000400000000000000000000000000000",
  "root": "0xd328acc24adc8d33a0417ffb6dbd47eefab3f48c38ed5f7a6283322d85c453f4",
  "to": "0x0c45dc711d35db7d8e09ec74fcd756502f733592",
  "transactionHash": "0xf0442dfe26efe54a96123ba16123628d6afed2cf16ce8a2319b485c2819dc882",
  "transactionIndex": 0
}
```

### read log event with web3.js 

* MetaMask on Rinkeby Test Network
* Console - Developer Tools - Google Chrome

read log without ABI

```
contractAddress = "0x0c45dc711d35db7d8e09ec74fcd756502f733592"
web3.eth.filter({ address: contractAddress, fromBlock: 741700, toBlock: 'latest'}).get(function (err, result) {
   console.log(err, result);
})
```

read log's data with ABI (copy from remix interface)

```
var MyContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"testEvent","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"}],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event2","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event3","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}]);

var myContractInstance = MyContract.at("0x0c45dc711d35db7d8e09ec74fcd756502f733592");

// watch for an event with {some: 'args'}
var events = myContractInstance.allEvents({fromBlock: 741700, toBlock: 'latest'});

// would get all past logs again.
events.get(function(error, logs){
    logs.forEach((log)=>{
        console.log(log);
        console.log('value:' + log.args._value.toNumber());
    })
});

```

console log details

* ethereumProvider API · Issue #16 · ethereum/interfaces https://github.com/ethereum/interfaces/issues/16

```
inpage.js:36 MetaMask - injected web3
inpage.js:85 MetaMask: web3 will be deprecated in the near future in favor of the ethereumProvider 

web3.currentProvider
inpage.js:85 MetaMask: web3 will be deprecated in the near future in favor of the ethereumProvider 

MetamaskInpageProvider {multiStream: DestroyableTransform, publicConfigStore: ObservableStore, asyncProvider: StreamProvider, idMap: {…}, sendAsync: ƒ}

contractAddress = "0x0c45dc711d35db7d8e09ec74fcd756502f733592"
"0x0c45dc711d35db7d8e09ec74fcd756502f733592"

web3.eth.filter({ address: contractAddress, fromBlock: 741700, toBlock: 'latest'}).get(function (err, result) {
   console.log(err, result);
})


var MyContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"testEvent","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"}],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_address","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event2","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_address","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Event3","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Deposit","type":"event"}]);

var myContractInstance = MyContract.at("0x0c45dc711d35db7d8e09ec74fcd756502f733592");

var events = myContractInstance.allEvents({fromBlock: 741700, toBlock: 'latest'});

events.get(function(error, logs){
    logs.forEach((log)=>{
        console.log(log);
        console.log('value:' + log.args._value.toNumber());
    })
});

```