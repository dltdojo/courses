pragma solidity ^0.4.15;
// 
// https://ethereum.github.io/browser-solidity/
// https://github.com/ethereum/dapp-bin/blob/master/wallet/wallet.sol
//
import "github.com/ethereum/dapp-bin/wallet/wallet.sol";

contract TestWallet{
    
    uint public walletBalance;
    Wallet w;
    
    function initWallet1of2(){
        address[] memory owners = new address[](1);
        owners[0]=msg.sender;
        uint required = 1;
        uint daylimit = 10 ether;
        w = new Wallet(owners, required, daylimit);
        w.transfer(100 ether);
        require(w.balance==100 ether);
        require(w.isOwner(msg.sender));
        require(w.isOwner(this));
        require(!w.isOwner(0xdeed));
    }
    
    function initWallet2of2(){
        address[] memory owners = new address[](1);
        owners[0]=msg.sender;
        uint required = 2;
        uint daylimit = 10 ether;
        w = new Wallet(owners, required, daylimit);
        w.transfer(100 ether);
        require(w.balance==100 ether);
        require(w.isOwner(msg.sender));
    }
    
    function testSign10f2() {
        initWallet1of2();
        bytes memory data = "foo";
        w.execute(0xdeed, 10 ether, data);
        walletBalance = w.balance;
        require(w.balance == 90 ether);
    }
    
    function testSign20f2() {
        initWallet2of2();
        bytes memory data = "foo";
        w.execute(0xdeed, 10 ether, data);
        // invaild code here
        walletBalance = w.balance;
        require(w.balance == 90 ether);
        require(w.m_spentToday() == 10 ether);
        w.execute(0xdeed, 10 ether, data);
        // invalid opcode her
    }
    
    
    function getBalance() returns (uint) {
        return this.balance;
    }
    
    function () payable {}

}