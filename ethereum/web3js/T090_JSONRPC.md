* JSON-RPC 2.0 Specification http://www.jsonrpc.org/specification
* JSON RPC · ethereum/wiki Wiki https://github.com/ethereum/wiki/wiki/JSON-RPC
* JSON-RPC - Bitcoin Wiki https://en.bitcoin.it/wiki/API_reference_(JSON-RPC)
* Original Bitcoin client/API calls list - Bitcoin Wiki https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list

### JSONRPC 2.0 example

rpc call with positional parameters:

```
--> {"jsonrpc": "2.0", "method": "subtract", "params": [42, 23], "id": 1}
<-- {"jsonrpc": "2.0", "result": 19, "id": 1}

--> {"jsonrpc": "2.0", "method": "subtract", "params": [23, 42], "id": 2}
<-- {"jsonrpc": "2.0", "result": -19, "id": 2}
```

rpc call with named parameters:

```
--> {"jsonrpc": "2.0", "method": "subtract", "params": {"subtrahend": 23, "minuend": 42}, "id": 3}
<-- {"jsonrpc": "2.0", "result": 19, "id": 3}

--> {"jsonrpc": "2.0", "method": "subtract", "params": {"minuend": 42, "subtrahend": 23}, "id": 4}
<-- {"jsonrpc": "2.0", "result": 19, "id": 4}
```

rpc call of non-existent method:

```
--> {"jsonrpc": "2.0", "method": "foobar", "id": "1"}
<-- {"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"}
```

rpc call with invalid JSON:

```
--> {"jsonrpc": "2.0", "method": "foobar, "params": "bar", "baz]
<-- {"jsonrpc": "2.0", "error": {"code": -32700, "message": "Parse error"}, "id": null}
```

rpc call with invalid Request object:

```
--> {"jsonrpc": "2.0", "method": 1, "params": "bar"}
<-- {"jsonrpc": "2.0", "error": {"code": -32600, "message": "Invalid Request"}, "id": null}
```


### ethereum geth jsonrpc 2.0

```
$ docker-compose up -d

$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:8545

{"jsonrpc":"2.0","id":67,"result":"Geth/v1.6.7-stable/linux-amd64/go1.9beta2"}

$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"foobar","params":[],"id":69}' http://localhost:18545 | jq .
{
  "id": 69,
  "jsonrpc": "2.0",
  "error": {
    "message": "Error: Method foobar not supported.\n    at GethApiDouble.handleRequest (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:101870:16)\n    at next (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:52856:18)\n    at VmSubprovider.handleRequest (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:59803:12)\n    at next (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:52856:18)\n    at GethDefaults.handleRequest (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:101787:12)\n    at next (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:52856:18)\n    at FilterSubprovider.handleRequest (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:59362:7)\n    at next (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:52856:18)\n    at DelayedBlockFilter.handleRequest (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:101615:3)\n    at next (/usr/local/lib/node_modules/ethereumjs-testrpc/build/cli.node.js:52856:18)",
    "code": -32000
  }
}

$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":67}' http://localhost:8545 | jq .
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x94006a47d576074d1ed4004379e294783c09095d"
}

$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":67}' http://localhost:8545 | jq .
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": [
    "0x94006a47d576074d1ed4004379e294783c09095d",
    "0x9a39a815b632b954c22b9ce53837a45a091cf259",
    "0x48042635ba3766cb13f846e584e74d982e8103c9",
    "0x830fb53eb8323c104f5359cb19ae335f95e42926",
    "0x5b932babca02649b929aafb547a923abb3ee98b1",
    "0x51e69ab25e9d9508f26c4b2be1a9f0d68a77a7a8"
  ]
}

// https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x94006a47d576074d1ed4004379e294783c09095d"],"id":67}' http://localhost:8545 | jq .

{
  "jsonrpc": "2.0",
  "id": 67,
  "error": {
    "code": -32602,
    "message": "missing value for required argument 1"
  }
}


$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x94006a47d576074d1ed4004379e294783c09095d","latest"],"id":67}' http://localhost:8545 | jq .
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0xb1cf24ddd0b1400000"
}


$ curl -s -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:18545 | jq .

{
  "id": 67,
  "jsonrpc": "2.0",
  "result": "EthereumJS TestRPC/v1.0.1/ethereum-js"
}


// {"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x364d385977b17b26fce6d245329c7ab992f557eb","mypasswd",300],"id":67}
// {"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}

```

### bitcoind jsonrpc 1.0

```
$ docker-compose exec bitcoind bash

# su-exec bitcoin bitcoin-cli getbalance
191.49990960

# cat /home/bitcoin/.bitcoin/bitcoin.conf
rpcuser=user
rpcpassword=pass
regtest=1
rpcport=18332
port=18333
txindex=1

$ curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["", 6] }' -H 'content-type: text/plain;' http://localhost:18332/

Enter host password for user 'user': pass

{"result":174.49972880,"error":null,"id":"curltest"}

# su-exec bitcoin bitcoin-cli sendtoaddress "mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG" 0.1

1c87c7c61ef70250d945089ca8116303565009d8ebccbffff0042b2b386bd34e

# curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG", 0.1] }' http://localhost:18332/
Enter host password for user 'user':

{"result":"051d529b62b3731b90637b25a0e51a51b34be198c9d8e14c5704921636049634","error":null,"id":"curltest"}

```