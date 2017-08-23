// https://github.com/ethereumjs/ethereumjs-util
const ethUtil = require('ethereumjs-util')
// https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md
const bitcore = require('bitcore-lib')
const PrivateKey = bitcore.PrivateKey
const Base58 = bitcore.encoding.Base58
const BN = bitcore.crypto.BN
const Hash = bitcore.crypto.Hash
const msg = 'abc'

function calcHash256() {
    // OP_HASH256 https://en.bitcoin.it/wiki/Script
    // https://en.bitcoin.it/wiki/Genesis_block
    // https://bitcoin.stackexchange.com/questions/11076/test-cases-for-hash-algorithm-anywhere
    const GenesisBlockHeaderHex = '0100000000000000000000000000000000000000000000000000000000000000000000003BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A29AB5F49FFFF001D1DAC2B7C'
    // printed in little-endian
    // GetHash() = 0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
    // https://blockchain.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
    // ethereumjs-util
    //var hash256 = ethUtil.sha256(ethUtil.sha256(Buffer.from(GenesisBlockHeaderHex, 'hex')))
    var hash256 = Hash.sha256sha256(Buffer.from(GenesisBlockHeaderHex, 'hex'))
    return { msg: GenesisBlockHeaderHex, hash: hash256.toString('hex') }
}

function calcHash160() {
    // hash160(d) = RIPEMD-160(SHA-256(d)) Bytes and hashes http://davidederosa.com/basic-blockchain-programming/bytes-and-hashes/
    // OP_HASH160 Script - Bitcoin Wiki https://en.bitcoin.it/wiki/Script
    // LBC::Server https://lbc.cryptoguru.org/about
    // address = [Version Byte (1)][Hash 160 (20)][Checksum (4)] https://bitcoin.stackexchange.com/questions/50876/difference-between-public-bitcoin-address-and-hash-160-address
    // saracen/bitcoin-all-key-generator: directory.io without the latency https://github.com/saracen/bitcoin-all-key-generator
    // 0000000000000000000000000000000000000000000000000000000000000001 1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm 1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH
    // 0000000000000000000000000000000000000000000000000000000000000002 1LagHJk2FyCV2VzrNHVqg3gYG4TSYwDV4m  1cMh228HTCiwS8ZsaakH8A8wze1JR5ZsP
    // 0000000000000000000000000000000000000000000000000000000000000003 1NZUP3JAc9JkmbvmoTv7nVgZGtyJjirKV1 1CUNEBjYrCn2y1SdiUMohaKUi4wpP326Lb
    // Base58Check encoding - Bitcoin Wiki https://en.bitcoin.it/wiki/Base58Check_encoding
    // https://github.com/bitpay/bitcore-lib/blob/master/test/encoding/base58.js

    var ppk = new PrivateKey(new BN(1))
    var ppkpub = ppk.toPublicKey().toString()
    var address = ppk.toAddress().toString()
    var hash160 = ethUtil.ripemd160(ethUtil.sha256(Buffer.from(ppkpub, 'hex')))
    //var hash160 = Hash.sha256ripemd160(Buffer.from(ppkpub,'hex'))
    return {
        privateKey: ppk.toString(),
        publicKey: ppk.toPublicKey().toString(),
        hash: hash160.toString('hex'),
        address: address,
        base58decode: Base58.decode(address).toString('hex')
    }
}

// The RIPEMD-160 page http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// RIPMD160 	8eb208f7e05d987a9b044a8e98c6b087f15a0bfc



var result = {
    abc: {
        ripmd160 :  ethUtil.ripemd160(msg).toString('hex'),
        hash256 :  ethUtil.sha256(ethUtil.sha256(msg)).toString('hex'),
        hash160 :  ethUtil.ripemd160(ethUtil.sha256(msg)).toString('hex')
    }, 
    ripmd160: { msg: msg, hash: ethUtil.ripemd160(msg).toString('hex') },
    hash256: calcHash256(),
    hash160: calcHash160()
}
console.log(JSON.stringify(result, null, 2))