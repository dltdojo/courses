pragma solidity ^0.4.14;

library FooLib{
  function pow2(uint x) returns (uint){
      return x**2;
  }
}

// internal visibility 
library FooLibIn{
  function pow2(uint x) internal returns (uint){
      return x**2;
  }
}

// Restrictions for libraries in comparison to contracts:
// * No state variables
// * Cannot inherit nor be inherited
// * Cannot receive Ether

contract Foo {
  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function pow2(uint x) returns (uint){
      return x**2;
  }
  function mulpow2(uint x) returns (uint){
      return x**2 * storedData;
  }
}

// solc will insert the library addresses to the placeholder __browser/Foo.sol:FooLib__
// https://ethereum.stackexchange.com/questions/6927/what-are-the-steps-to-compile-and-deploy-a-library-in-solidity
contract FooLibCall {
  function cpow2(uint x) returns (uint){
      return FooLib.pow2(x);
  }
}

// remix - How does solidity online compiler link libraries? - Ethereum Stack Exchange 
// https://ethereum.stackexchange.com/questions/12299/how-does-solidity-online-compiler-link-libraries
contract FooLibCallIn {
  function cpow2(uint x) returns (uint){
      return FooLibIn.pow2(x);
  }
}

contract FooContractCall {
  Foo foo;
  function FooContractCall(address fooAddr){
     foo = Foo(fooAddr);
  }
  function cpow2(uint x) returns (uint){
      return foo.pow2(x);
  }
  
  function cmulpow2(uint x) returns (uint){
      return foo.mulpow2(x);
  }
}

contract FooContractCallFly {
  function cpow2(address fooAddr, uint x) returns (uint){
      Foo foo = Foo(fooAddr);
      return foo.pow2(x);
  }
  
  function cmulpow2(address fooAddr, uint x) returns (uint){
      Foo foo = Foo(fooAddr);
      return foo.mulpow2(x);
  }
}