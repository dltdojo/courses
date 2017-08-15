pragma solidity ^0.4.14;

// Contracts — Solidity 0.4.15 documentation http://solidity.readthedocs.io/en/develop/contracts.html
// Visibility and Getters
// message call v.s. external call 
// Functions can be specified as being external, public, internal or private, 
// where the default is public. For state variables, external is not possible and the default is internal.
contract Foo {
  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function pow2(unit x) return (uint){
      return x**2;
  }
}