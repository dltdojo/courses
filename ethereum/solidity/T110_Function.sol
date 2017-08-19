pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/
contract Foo {
  uint storedData;
  function set(uint x) {
    storedData = x;
  }
}

// get() function
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

//
// constant keyword is to indicate that a function does not change the contract's state.

// contract design - What is the difference between a transaction and a call? - Ethereum Stack Exchange 
// https://ethereum.stackexchange.com/questions/765/what-is-the-difference-between-a-transaction-and-a-call

// kovan/rinkeby test
contract FooPublicPow2Save is FooPublic {
  // call 
  // read-only operation
  // not consume any Ether(gas)
  // synchronous
  // web3.js API is web3.eth.call and is what's used for Solidity constant functions.
  // JSON-RPC is eth_call
  function pow2Constant() constant returns (uint){
    uint res = fooInt **2 ;
    // check fooInt value
    fooInt = res;
    // It simulates what would happen in a transaction, but discards all the state changes when it is done.
    return res;
  }
  
  // transaction
  // broadcasted to the network 
  // processed by miners
  // write-operation that will affect other accounts
  // update the state of the blockchain
  // consume Ether
  // asynchronous
  // return value is the transaction's hash
  // get the "return value" of a transaction to a function, Events need to be used.
  // web3.js API is web3.eth.sendTransaction and is used if a Solidity function is not marked constant.
  // JSON-RPC is eth_sendTransaction
  
  function pow2() returns (uint){
    uint res = fooInt **2 ;
    fooInt = res;
    return res;
  }
}