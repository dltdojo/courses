* JSON RPC · ethereum/wiki Wiki https://github.com/ethereum/wiki/wiki/JSON-RPC
* JSON-RPC - Bitcoin Wiki https://en.bitcoin.it/wiki/API_reference_(JSON-RPC)
* Original Bitcoin client/API calls list - Bitcoin Wiki https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list

### ethereum geth jsonrpc

```
$ docker-compose up -d

$ curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":"Geth/v1.6.7-stable/linux-amd64/go1.9beta2"}

$ curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:18545
{"id":67,"jsonrpc":"2.0","result":"EthereumJS TestRPC/v1.0.1/ethereum-js"}

// $ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x364d385977b17b26fce6d245329c7ab992f557eb","mypasswd",300],"id":67}' http://localhost:8545
// $ curl -X POST --data '{"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}' localhost:8545
```

### bitcoind jsonrpc

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

bash-4.3# su-exec bitcoin bitcoin-cli sendtoaddress "mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG" 0.1
1c87c7c61ef70250d945089ca8116303565009d8ebccbffff0042b2b386bd34e

bash-4.3# curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG", 0.1] }' http://localhost:18332/
Enter host password for user 'user':
{"result":"051d529b62b3731b90637b25a0e51a51b34be198c9d8e14c5704921636049634","error":null,"id":"curltest"}

```