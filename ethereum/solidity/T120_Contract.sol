pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/
// this, selfdestruct http://solidity.readthedocs.io/en/develop/units-and-global-variables.html?#contract-related
// fallback http://solidity.readthedocs.io/en/develop/contracts.html#fallback-function
// event http://solidity.readthedocs.io/en/develop/contracts.html#events

contract Foo {
  
  event Log(address from, uint value, uint balance);
    
  uint storedData;
  
  // the current contract, explicitly convertible to Address
  address public thisContractDeployAddress = this;
  
  function set(uint x) {
    storedData = x;
  }
  
  //function Foo() payable {
      // Log(msg.sender, msg.value, this.balance);
  //}
  
  function() payable {
      // this is Foo Contract
      Log(msg.sender, msg.value, this.balance);
  }
  
  // destroy the current contract, sending its funds to the given Address
  // Renaming SUICIDE opcode https://github.com/ethereum/EIPs/blob/master/EIPS/eip-6.md
  // selfdestruct - Why are suicides used in contract programming? - Ethereum Stack Exchange
  // https://ethereum.stackexchange.com/questions/315/why-are-suicides-used-in-contract-programming
  function kill(){
      selfdestruct(msg.sender);
      // Log(msg.sender, this.balance);
  }
}

// solidity - send VS call - differences and when to use and when not to use - Ethereum Stack Exchange 
// https://ethereum.stackexchange.com/questions/6470/send-vs-call-differences-and-when-to-use-and-when-not-to-use
contract FooFallbackGas {
    uint public bar;
    
    function add() payable {
        bar += 1;
    }
    
    function () payable {
        add();
    }
}

contract FooTester {
    // fallback 100 ether
    function () payable {}
    // FooTransfer instance at this address.
    FooFallbackGas public foo = new FooFallbackGas();
    
    function testAdd(){
        // add functioin
        foo.add.value(1 ether)();
    }
    
    function testCallAdd(){
        // fallback function
        foo.call.value(1 ether)();
    }
    
    function testTransferGasIssue(){
        foo.transfer(1 ether);
        // x.transfer(amount) = x.call.gas(0).value(amount)();
        // solidity - send VS call - differences and when to use and when not to use - Ethereum Stack Exchange 
        // https://ethereum.stackexchange.com/questions/6470/send-vs-call-differences-and-when-to-use-and-when-not-to-use
    }
}