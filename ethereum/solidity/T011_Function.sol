pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/

contract Foo {
  uint storedData;
  function set(uint x) {
    storedData = x;
  }
}

contract FooGet is Foo {
  function get() constant returns (uint) {
    return storedData;
  }
}

/*
The keyword public automatically generates a function that allows you to access the current value of the state variable.
*/
contract FooPublic is Foo {
  uint public storedData;
  // function storedData() returns (uint) { return storedData; }
}

contract FooPublicPow2 is FooPublic {
  function pow2() returns (uint res){
    res = storedData **2 ;
  }
}

contract FooPublicPow2Save is FooPublic {
  function pow2() returns (uint res){
    res = storedData **2 ;
    storedData = res;
  }
}