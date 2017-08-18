pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/
// this, selfdestruct http://solidity.readthedocs.io/en/develop/units-and-global-variables.html?#contract-related
// fallback http://solidity.readthedocs.io/en/develop/contracts.html#fallback-function
// event http://solidity.readthedocs.io/en/develop/contracts.html#events

contract Foo {
  
  event Log(address from, uint balance);
    
  uint storedData;
  
  // the current contract, explicitly convertible to Address
  address public thisContractDeployAddress = this;
  
  function set(uint x) {
    storedData = x;
  }
  
  //function Foo() payable {
      // Log(msg.sender, this.balance);
  //}
  
  function() payable {
      // this is Foo Contract
      Log(msg.sender, this.balance);
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