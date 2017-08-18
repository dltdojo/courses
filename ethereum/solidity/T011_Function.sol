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
The keyword public automatically generates a function that allows you to 
access the current value of the state variable.
*/
contract FooPublic {
  uint public fooInt;
  // function fooInt() returns (uint) { return fooInt; }
  function set(uint x) {
    fooInt = x;
  }
}

contract FooPublicPow2 is FooPublic {
  
  function pow2() constant returns (uint){
    return fooInt **2 ;
  }
  
}

// kovan/rinkeby test
contract FooPublicPow2Save is FooPublic {
    
  function pow2Constant() constant returns (uint){
    uint res = fooInt **2 ;
    fooInt = res;
    return res;
  }
  
  function pow2() returns (uint){
    uint res = fooInt **2 ;
    fooInt = res;
    return res;
  }
}