pragma solidity ^0.4.11;
//
// https://ethereum.github.io/browser-solidity/
// import "github.com/dltdojo/courses/solidity/T01_Storage.sol"
// 
// http://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html
// 
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