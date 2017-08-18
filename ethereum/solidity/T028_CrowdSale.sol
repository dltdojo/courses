pragma solidity ^0.4.14;
// 
// CrowdSale v.s. CrowdFunding (T018) 
// Token v.s. Ether (balance)
// https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/crowdsale/Crowdsale.sol

import "github.com/OpenZeppelin/zeppelin-solidity/contracts/crowdsale/Crowdsale.sol";

contract TestCrowdsale {
    
    function testCrowdsale(){
        // Crowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
        uint256 startTime = now + 1 minute;
        Crowdsale cs = new Crowdsale();
    }
}


