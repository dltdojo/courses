pragma solidity ^0.4.14;
// Application Binary Interface Specification
// http://solidity.readthedocs.io/en/develop/abi-spec.html#application-binary-interface-specification


contract Foo {
  function hello() returns (bool r){return true;}
  function baz(uint32 x, bool y) returns (bool r) { return x > 32; }
  function bar(bytes3[2] xy) {}
  function sam(bytes name, bool z, uint[] data) {}
  function () payable {}
}

contract FooAbi {
   
   Foo foo = new Foo();
   
   function testHello() returns (bool r){
         return foo.call(bytes4(keccak256("hello()")));
   }
   
   function testFallback() returns (uint fooBalance){
       bytes4 methodId = bytes4(keccak256("helloFallback()"));
       foo.call.value(1.2345 ether)(methodId);
       return foo.balance;
   }
   
   function testBazMethodId() returns (bytes4 MethodId){
       // baz(uint32,bool)
       // 0xcdcd77c0: the Method ID. This is derived as the first 4 bytes of the Keccak hash of the ASCII 
       // form of the signature baz(uint32,bool).
       bytes32 hash = keccak256('baz(uint32,bool)');
       bytes4 methodId = bytes4(hash);
       require(methodId == 0xcdcd77c0);
       return methodId;
   }
   
    function testBazMethod(uint32 x) returns (bool r){
       bytes4 methodId = bytes4(keccak256('baz(uint32,bool)'));
       // contract development - What does Solidity's "call" function mean? - Ethereum Stack Exchange  https://ethereum.stackexchange.com/questions/8270/what-does-soliditys-call-function-mean
       // TODO
       return foo.call(methodId, x, false);
    }
   
   function () payable {}
}