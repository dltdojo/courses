pragma solidity ^0.4.15;

contract Foo { uint foo = 5;}
contract FooPublic { uint public foo = 5;}
contract FooGet {uint foo = 5;  function get() constant returns (uint) {return foo;}}
contract FooGetAdd {uint foo = 5;  function get() constant returns (uint) {return foo+5;}}
contract FooGetParamMul {function get(uint a) constant returns (uint) {return a*5;}}
contract FooGet2Functions {
    function getMul(uint a) constant returns (uint) {return a*5;}
    function getAdd(uint a) constant returns (uint) {return a+5;}
}