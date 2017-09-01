pragma solidity ^0.4.14;

// 
// Atomic cross-chain trading - Bitcoin Wiki https://en.bitcoin.it/wiki/Atomic_cross-chain_trading
// Hashed Timelock Contracts - Bitcoin Wiki https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts
// Atomic Swaps: How the Lightning Network Extends to Altcoins — Bitcoin Magazine 
// https://bitcoinmagazine.com/articles/atomic-swaps-how-the-lightning-network-extends-to-altcoins-1484157052/
// 

//
// Alice and Bob submit transactions to both blockchains: one on Bitcoin and one on Litecoin 
// The Bitcoin transaction sends 1 bitcoin from Bob to Alice
// The Litecoin transaction sends 200 litecoins from Alice to Bob 
// The same secret number on both chains
// Alice claims her bitcoin, she reveals her secret number on the Bitcoin blockchain 
// And with that same secret number, Bob can, in turn, claim his 200 litecoins
//
