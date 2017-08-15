* https://ethereum.github.io/browser-solidity/

## multi-sig wallet

* https://github.com/ethereum/dapp-bin/blob/master/wallet/wallet.sol
* Display account and contract balances · Issue #202 · ethereum/remix https://github.com/ethereum/remix/issues/202
* Show the balance of all deployed contracts · Issue #596 · ethereum/browser-solidity https://github.com/ethereum/browser-solidity/issues/596
* "Error encoding arguments: Error: Assertion failed" on valid transaction call · Issue #621 · ethereum/browser-solidity https://github.com/ethereum/browser-solidity/issues/621
* Ethereum Unit Converter https://converter.murkin.me/

### Steps

* download wallet.sol
* add getBalance() function to Wallet
* create a new Wallet contract()
* fallback with value "100 ether"
* getBalance()
* transferWei() 1 ether : "0xD584F0e22b77cE2333AB2D3c994AffAFd8C03167","1000000000000000000"
* execute() 1 ether with confirmationNeeded: "0xD584F0e22b77cE2333AB2D3c994AffAFd8C03167","1000000000000000000","0x00"

```
ConfirmationNeeded[
  "0x5e5e225138b33820a8895b4882c06ccf9f6b7f546777465263510c44adc7dca9",
  "0xca35b7d915458ef540ade6068dfe2f44e8fa733c",
  "100000000000000000",
  "0xd584f0e22b77ce2333ab2d3c994affafd8c03167",
  "0x30783030"
]
```

* confirm() : "0x5e5e225138b33820a8895b4882c06ccf9f6b7f546777465263510c44adc7dca9"
* setDailyLimit() 2 ether : "2000000000000000000"
* execute() 1 ether without confirmationNeeded: "0xD584F0e22b77cE2333AB2D3c994AffAFd8C03167","1000000000000000000","0x00"

```
// taddr1 key 0xe5353ab4bb7c930c6bbc6b8931eeeab45ae98dc2d5c18d6b4f97fececc96e3b6
address taddr1 = 0x5578fa413D68BEb2eb7063E1DE125A8bB0b47f25;
// taddr2 key 0x5c36c57b33b5dfe04a376cc987cf096cc05ff0349031df04818f5dbba93a8613
address taddr2 = 0xD584F0e22b77cE2333AB2D3c994AffAFd8C03167;
    
function xtransferWei(address addr, uint value){
    addr.transfer(value);
}
    
function xgetAccountBalance(address addr) constant returns(uint){
    return addr.balance;
}
    
function xgetBalance() constant returns (uint){
    return this.balance;
}
function xPendingIndexLength() constant returns (uint) {
       return m_pendingIndex.length;
}
```