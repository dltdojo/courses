pragma solidity ^0.4.14;

// http://solidity.readthedocs.io/en/develop/control-structures.html#creating-contracts-via-new
contract Foo {
  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function pow2(unit x) return (uint){
      return x**2;
  }
}