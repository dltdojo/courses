pragma solidity ^0.4.15;

pragma solidity ^0.4.15;
contract Foo{}
contract Bar{}
contract FooState { uint foo; address bar;}
contract FooInitialUint { uint foo = 5;}
contract FooInitialUint2 { uint foo = 5; uint bar = 36;}
contract FooInitialIntUint { uint foo = 5 ; int bar = -5;}
contract FooInitialInt8 { uint foo = 5 ; uint8 bar = 36;}
contract FooInitialUintString { uint foo = 5; string name="foo";}
contract FooInitialUintHex { uint foo = 5; string name=hex"666F6F";}
contract FooInitialUintAdd { uint foo = 5; uint foo2 = foo+9;}
contract FooInitialUintAddress { uint foo = 5; address bar = 0xdeed;}
contract FooInitialUintMapping { uint foo = 5; mapping (address => uint) balances;}
contract FooInitalEnum { uint foo = 5; enum Action {Left, Right}}
contract FooInitalEnumValue { uint foo = 5; 
  enum Action {Left, Right} 
  Action choice=Action.Left;
}
contract FooInitialStructValue { uint foo = 5; 
   struct Funder { address addr; uint amount;}
   Funder funder= Funder({addr: 0xdeed, amount: 8});
}