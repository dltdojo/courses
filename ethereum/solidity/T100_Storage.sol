pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/

contract Foo {
  uint storedData;
  function set(uint x) {
    storedData = x;
  }
}