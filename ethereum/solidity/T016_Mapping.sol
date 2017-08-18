pragma solidity ^0.4.14;

contract Foo {

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;
}