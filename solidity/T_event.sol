pragma solidity ^0.4.14;

// https://ethereum.stackexchange.com/questions/1891/whats-the-difference-between-msg-sender-and-tx-origin
contract Foo {
  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function pow2(unit x) return (uint){
      return x**2;
  }
}