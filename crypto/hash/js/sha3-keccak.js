const ethUtil = require('ethereumjs-util')
const sha3_256 = require('js-sha3').sha3_256
const rlp = require('rlp')
const msg = 'abc'

function calcKeccakEthAddress() {
    // accounts - How are ethereum addresses generated? - Ethereum Stack Exchange https://ethereum.stackexchange.com/questions/3542/how-are-ethereum-addresses-generated
    // Private Key: A randomly selected positive integer (represented as a byte array of length 32 in big-endian form) in the range [1, secp256k1n − 1].
    // Take the Keccak-256 hash of the public key.
    // Take the last 40 characters / 20 bytes of this public key (Keccak-256). 
    var privKey = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex')
    var pubKey = ethUtil.privateToPublic(privKey)
    var keccak256 = ethUtil.sha3(pubKey)
    var address = ethUtil.publicToAddress(pubKey)
    // Rename/alias sha3 to minimize confusion with SHA-3 standard · Issue #59 https://github.com/ethereum/EIPs/issues/59
    // capitals-based checksum
    // https://ethereum.stackexchange.com/questions/267/why-dont-ethereum-addresses-have-checksums
    // https://github.com/ethereumjs/ethereumjs-util/blob/master/index.js#L440
    return {
        privateKey: privKey.toString('hex'),
        publicKey: pubKey.toString('hex'),
        keccak256: keccak256.toString('hex'),
        address: address.toString('hex'),
        checksumAddress: ethUtil.toChecksumAddress(address.toString('hex'))
    }
}

// blockchain - Ethereum block architecture - Ethereum Stack Exchange https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture
// ethereum block rlp hash https://github.com/ethereumjs/ethereumjs-block/blob/master/header.js#L222
function calcRlpHash() {
    //  a sha3 of the rlp data
    // The list [ "cat", "dog" ] = [ 0xc8, 0x83, 'c', 'a', 't', 0x83, 'd', 'o', 'g' ]
    // c8 83 63 61 74 83 64 6f 67
    // c0+8 (list)
    // 80+3 (cat/dog)
    var msgArray = [ 'cat', 'dog']
    var encodedRlp = rlp.encode(msgArray)
    var rlphash = ethUtil.rlphash(encodedRlp)
    return {
        msg: msgArray, 
        encodedRlp: encodedRlp.toString('hex'),
        hash: rlphash.toString('hex')
    }

}

// Rename/alias sha3 to minimize confusion with SHA-3 standard · Issue #59 · ethereum/EIPs https://github.com/ethereum/EIPs/issues/59
// https://zh.wikipedia.org/wiki/SHA-3
// https://www.di-mgt.com.au/sha_testvectors.html
// SHA-256	ba7816bf 8f01cfea 414140de 5dae2223 b00361a3 96177a9c b410ff61 f20015ad
// SHA-3-256	3a985da74fe225b2 045c172d6bd390bd 855f086e3e9d525b 46bfe24511431532

var result = {
    keccak256: { msg: msg, hash: ethUtil.sha3(msg).toString('hex') },
    sha3_256: { msg: msg, hash: sha3_256(msg) },
    ethaddress: calcKeccakEthAddress(),
    rlphash: calcRlpHash()
}

console.log(JSON.stringify(result, null, 2))
