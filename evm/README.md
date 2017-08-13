* https://ethereum.github.io/browser-solidity/

### T01_StateVariable

```
pragma solidity ^0.4.15;
// https://github.com/dltdojo/courses/tree/master/evm
import "github.com/dltdojo/courses/evm/T01_StateVariable.sol";
```

### T02_Function

```
pragma solidity ^0.4.15;
// https://github.com/dltdojo/courses/tree/master/evm
import "github.com/dltdojo/courses/evm/T01_StateVariable.sol";
```

### ethereumjs-vm

```
$ node js/tx-sample.js
PUSH1
PUSH1
MSTORE
CALLVALUE
ISZERO
PUSH2
JUMPI
JUMPDEST
JUMPDEST
PUSH1
DUP1
PUSH2
PUSH1
CODECOPY
PUSH1
RETURN
returned: 60606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634322b73b1460475780635f2f83ba14607b575b600080fd5b3415605157600080fd5b6065600480803590602001909190505060af565b6040518082815260200191505060405180910390f35b3415608557600080fd5b6099600480803590602001909190505060bd565b6040518082815260200191505060405180910390f35b60006005820190505b919050565b60006005820290505b9190505600a165627a7a723058206073e465a929edca5074df569bd4b8cf65bb7848de2e09751481f0e9bb70d2150029
gasUsed: 95
null

```