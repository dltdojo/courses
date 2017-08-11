// https://github.com/indutny/elliptic
const EC = require('elliptic').ec

const ethUtils = require('ethereumjs-util')
const secp256k1 = require('secp256k1')
// ethUtils https://github.com/ethereumjs/ethereumjs-util
// http://davidederosa.com/basic-blockchain-programming/elliptic-curve-keys/
// SafeCurves: Introduction https://safecurves.cr.yp.to/

// P256
// y^2 = x^3-3x+41058363725152142129326129780047268409114441015993725554835256314039467401291 
// 
// secp256k1
// y^2 = x^3+0x+7

// ECDSA-SHA256-secp256k1
// bitcoin
// ethereum 
// ripple https://github.com/ripple/rippled/tree/master/src/secp256k1
// zcash switch from ECDSA to Ed25519 https://github.com/zcash/zcash/issues/715
// hyperledger sawtooth https://github.com/hyperledger/sawtooth-core/blob/master/core/setup.cfg
function ellipticModuleSecp256k1() {
    // private Key 0x01
    // public keys are 64 bytes (uncompressed form) or 32 bytes (compressed form) long plus a 1-byte prefix.
    // public key in a compressed format
    // secp256k1 elliptic curve y*y == x*x*x + 7
    // https://github.com/cryptocoinjs/secp256k1-node/blob/master/lib/js/ecpoint.js#L46
    var ec256k1 = new EC('secp256k1')
    var eckeys = ec256k1.keyFromPrivate('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
    var pubKey = eckeys.getPublic()
    return {
        privateKey: eckeys.getPrivate().toString('hex'),
        publicKey: { x: pubKey.x, y: pubKey.y }
    }
}

// Hyperledger Fabric P256
// ECDSA-SHA256-P256 https://github.com/hyperledger/fabric/search?utf8=%E2%9C%93&q=ECDSA+elliptic&type=Code
function ellipticModuleP256() {
    var ecP256 = new EC('p256')
    // private Key 0x01
    var keys = ecP256.keyFromPrivate('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
    var pubKey = keys.getPublic()
    return {
        privateKey: keys.getPrivate().toString('hex'),
        publicKey: { x: pubKey.x, y: pubKey.y }
    }
}

// ed25519
// EdDSA-SHA512-Ed25519 
// chain core https://github.com/chain/chain/tree/main/crypto/ed25519
// monero https://github.com/monero-project/monero/blob/master/src/crypto/crypto_ops_builder/crypto_sign.h
// corda https://github.com/corda/corda/search?utf8=%E2%9C%93&q=EdDSA
// ripple https://github.com/ripple/rippled/tree/master/src/ed25519-donna
// Curves with a Twist | Ripple https://ripple.com/dev-blog/curves-with-a-twist/
// Hyperledger iroha https://github.com/hyperledger/iroha-android/blob/master/iroha-android/src/main/java/io/soramitsu/irohaandroid/security/KeyGenerator.java
function ed25519() {

}

function secp256k1Module() {
    // private Key 0x01
    var privKey = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex')
    var pubKey = secp256k1.publicKeyCreate(privKey)
    var uncompressedPubKey = secp256k1.publicKeyConvert(pubKey, false)
    return {
        privateKey: privKey.toString('hex'),
        publicKey: pubKey.toString('hex'),
        uncompressedPublicKey: uncompressedPubKey.toString('hex')
    }
}

var result = {
    curveSecp256k1: "y*y == x*x*x + 7",
    moduleSecp256k1: secp256k1Module(),
    moduleEllipticSecp256k1: ellipticModuleSecp256k1(),
    p256: ellipticModuleP256(),
}

console.log(JSON.stringify(result, null, 2))