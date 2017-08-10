pragma solidity ^0.4.14;

contract Foo {
  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function pow2(unit x) return (uint){
      return x**2;
  }
}