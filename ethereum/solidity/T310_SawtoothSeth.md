* Hello World, Meet Seth (Sawtooth Ethereum) – Hyperledger  https://www.hyperledger.org/blog/2017/08/22/hello-world-meet-seth-sawtooth-ethereum
* courses/README.seth.md at master · dltdojo/courses  https://github.com/dltdojo/courses/blob/master/sawtooth/README.seth.md
* Create new seth CLI tool · hyperledger/sawtooth-core@93ca105  https://github.com/hyperledger/sawtooth-core/commit/93ca10585d9b665e18b5e43dd783813d9360df24

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

seth contract create && call

```
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

### Topics

* ownable in contract. https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol
* permission in transaction. sawtooth-core/test_permission.py at master · hyperledger/sawtooth-core 
 https://github.com/hyperledger/sawtooth-core/blob/master/integration/sawtooth_integration/tests/test_permission.py