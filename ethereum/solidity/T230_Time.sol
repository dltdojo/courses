pragma solidity ^0.4.14;
// 
// Time Units  http://solidity.readthedocs.io/en/develop/units-and-global-variables.html#time-units
// seconds, minutes, hours, days, weeks and years
// 1 == 1 seconds 
// 1 minutes == 60 seconds
// 1 hours == 60 minutes
// 1 days == 24 hours
// 1 weeks == 7 days
// 1 years == 365 days
// Take care if you perform calendar calculations using these units, because not every year equals 365 days and not even every day has 24 hours 
// because of leap seconds. Due to the fact that leap seconds cannot be predicted, an exact calendar library has to be updated by an external oracle.
contract FooTime {
    
    uint public fooInt;
    uint createdTime;
    
    function FooTime(){
        createdTime = now;
    }

    // rinkeby/kovan/GethDevNode test
    function timeInfo() constant returns(uint _blockNumber, uint _blockTimestamp, uint _now) {
        // Block and Transaction Properties
        // now (uint): current block timestamp (alias for block.timestamp)
        _blockNumber = block.number;
        _blockTimestamp = block.timestamp;
        _now = now;
        // The timestamps are saved into the blockheader. 
        // They don't get updated but they are part of the consensus and can't get altered after mined. 
        // https://ethereum.stackexchange.com/questions/9564/how-does-ethereum-avoid-inaccurate-timestamps-in-blocks
    }
    
    function setFooInt(uint x){
        fooInt = x;
    }
    
    function after20Seconds() constant returns(uint){
        require(now > createdTime + 20 seconds);
        return fooInt;
    }

    // constant
    function after10Seconds() returns(uint){
        require(now > createdTime + 10 seconds);
        return fooInt;
    }
    
}
