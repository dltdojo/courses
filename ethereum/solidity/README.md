* https://ethereum.github.io/browser-solidity/
* fivedogit/solidity-baby-steps https://github.com/fivedogit/solidity-baby-steps/tree/master/contracts

### Example T01 Storage

* http://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html
* set() gas
* keyword public
* Application Binary Interface Specification http://solidity.readthedocs.io/en/develop/abi-spec.html

```
pragma solidity ^0.4.14;
import "github.com/dltdojo/courses/solidity/T01_Storage.sol";

contract MyFoo is FooPublic {
  function pow3() returns (uint res){
    res = storedData **3 ;
  }
}

contract NMyFooGet is FooPublic {
  function get() constant returns (uint) {
    return storedData +1;
  }
}
```

### Example T02 Library

* contract FooLibCall

```
pragma solidity ^0.4.14;
import "github.com/dltdojo/courses/solidity/T02_Library.sol";
```