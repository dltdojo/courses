* Hello World, Meet Seth (Sawtooth Ethereum) – Hyperledger  https://www.hyperledger.org/blog/2017/08/22/hello-world-meet-seth-sawtooth-ethereum
* Create new seth CLI tool · hyperledger/sawtooth-core@93ca105  https://github.com/hyperledger/sawtooth-core/commit/93ca10585d9b665e18b5e43dd783813d9360df24

```
$ git clone https://github.com/hyperledger/sawtooth-core.git
$ cd sawtooth-core
$ ./bin/build_all -l go -l python
$ docker-compose -f docker/compose/sawtooth-seth.yaml up
Starting compose_validator_1 ...
Starting compose_validator_1 ... done
Starting compose_seth-tp_1 ...
Starting compose_rest-api_1 ...
Starting compose_seth-tp_1
Starting compose_rest-api_1 ... done
Starting seth-client ...
Starting seth-client ... done
Attaching to compose_validator_1, compose_seth-tp_1, compose_rest-api_1, seth-client
validator_1    | file exists: /project/sawtooth-core/sawtooth.priv
validator_1    | file exists: /project/sawtooth-core/sawtooth.pub
validator_1    | Error: files exist, rerun with --force to overwrite existing files
seth-tp_1      | 2017/08/23 05:04:09.938785 connection.go:80: [INFO] Connecting to tcp://validator:4004
seth-tp_1      | 2017/08/23 05:04:09.939019 connection.go:80: [INFO] Connecting to inproc://workers
seth-tp_1      | 2017/08/23 05:04:09.941140 connection.go:80: [INFO] Connecting to inproc://workers
seth-tp_1      | 2017/08/23 05:04:09.941265 connection.go:80: [INFO] Connecting to inproc://workers
compose_validator_1 exited with code 1
seth-client    | Initializing seth to communicate with http://rest-api:8080
rest-api_1     | [2017-08-23 05:04:11.322 INFO     messaging] Connecting to tcp://validator:4004
rest-api_1     | [2017-08-23 05:04:11.323 INFO     rest_api] Creating handlers for validator at tcp://validator:4004
rest-api_1     | [2017-08-23 05:04:11.324 INFO     rest_api] Starting REST API on rest-api:8080

```

### seth test

contract

```
pragma solidity ^0.4.0;
// http://remix.ethereum.org/
contract Foo {
    uint public a = 987;
}
```

bytecode 

```
60606040526103db6000553415601457600080fd5b5b6095806100236000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630dbe671f14603d575b600080fd5b3415604757600080fd5b604d6063565b6040518082815260200191505060405180910390f35b600054815600a165627a7a72305820d5fc76814ce10d817caf718af72cdfbf72f694cae938c5a2a013177a8a6061110029
```

abi 

```
[{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]
```

Functions
```
0dbe671f a()
```

Seth Transaction Family Specification https://github.com/hyperledger/sawtooth-core/blob/master/docs/source/transaction_family_specifications/sawtooth_burrow_evm_family.rst

```
$  docker exec -it seth-client bash
# seth account import sawtooth.priv alice
Key at sawtooth.priv imported with alias alice

# seth account list
alice: b4d849f4050b9bad30da43a8a4c129304a23c3ec

# seth contract create alice 60606040526103db6000553415601457600080fd5b5b6095806100236000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630dbe671f14603d575b600080fd5b3415604757600080fd5b604d6063565b6040518082815260200191505060405180910390f35b600054815600a165627a7a72305820d5fc76814ce10d817caf718af72cdfbf72f694cae938c5a2a013177a8a6061110029
Transaction submitted to create contract at b4d849f4050b9bad30da43a8a4c129304a23c3ec

# seth contract call alice b4d849f4050b9bad30da43a8a4c129304a23c3ec 0dbe671f
Transaction submitted to call contract at b4d849f4050b9bad30da43a8a4c129304a23c3ec

// Seth Transaction Family Specification 3.iv
// The resulting output from the EVM shall be discarded because a mechanism for returning data to the client does not exist yet.
```