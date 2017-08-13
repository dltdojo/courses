// https://github.com/indutny/elliptic
const EC = require('elliptic').ec
// https://github.com/ethereumjs/ethereumjs-util
const ethUtil = require('ethereumjs-util')
const secp256k1 = require('secp256k1')
const KEY1 = '0000000000000000000000000000000000000000000000000000000000000001'
const bitcore = require('bitcore-lib');
const bmessage = require('bitcore-message');

// Elliptic Curve Digital Signature Algorithm - Wikipedia https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm
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
function calcSecp256k1(msg) {
    // private Key 0x01
    // public keys are 64 bytes (uncompressed form) or 32 bytes (compressed form) long plus a 1-byte prefix.
    // public key in a compressed format
    // secp256k1 elliptic curve y*y == x*x*x + 7
    const ec256k1 = new EC('secp256k1')
    var eckeys = ec256k1.keyFromPrivate(KEY1, 'hex');
    var pubKey = eckeys.getPublic()
    var msgHash = ethUtil.sha256(msg)
    var signature = eckeys.sign(msgHash)
    var signature2 = eckeys.sign(msgHash)
    return {
        msgHash: msgHash.toString('hex'),
        privateKey: eckeys.getPrivate().toString('hex'),
        signature: signature,
        signature2: signature2,
        publicKey: { hex: pubKey.encode('hex'), x: pubKey.x, y: pubKey.y }
    }
}

// Hyperledger Fabric P256
// ECDSA-SHA256-P256 https://github.com/hyperledger/fabric/search?utf8=%E2%9C%93&q=ECDSA+elliptic&type=Code
function calcP256(msg) {
    var ecP256 = new EC('p256')
    // private Key 0x01
    var keys = ecP256.keyFromPrivate(KEY1, 'hex');
    var pubKey = keys.getPublic()
    var msgHash = ethUtil.sha256(msg)
    var signature = keys.sign(msgHash)
    var signature2 = keys.sign(msgHash)
    return {
        msgHash: msgHash.toString('hex'),
        privateKey: keys.getPrivate().toString('hex'),
        signature: signature,
        publicKey: { hex: pubKey.encode('hex'), x: pubKey.x, y: pubKey.y }
    }
}

function secp256k1Module() {
    // private Key 0x01
    var privKey = Buffer.from(KEY1, 'hex')
    var pubKey = secp256k1.publicKeyCreate(privKey)
    var uncompressedPubKey = secp256k1.publicKeyConvert(pubKey, false)
    return {
        privateKey: privKey.toString('hex'),
        publicKey: pubKey.toString('hex'),
        uncompressedPublicKey: uncompressedPubKey.toString('hex')
    }
}

// ret.v = sig.recovery + 27
// https://github.com/ethereumjs/ethereumjs-util/blob/master/index.js#L334
// Low S values in signatures 
// https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#low-s-values-in-signatures
// low S values 
// https://github.com/ethereumjs/ethereumjs-util/blob/master/index.js#L522
// a.cmp(b) return 1 (a>b) https://github.com/indutny/bn.js/
// new BN(s).cmp(SECP256K1_N_DIV_2) === 1 
function ethSign(msg) {
    var ecprivkey = Buffer.from(KEY1, 'hex')
    var ecpubkey = ethUtil.privateToPublic(ecprivkey)
    var msgHash = ethUtil.sha256(msg)
    var sig = ethUtil.ecsign(msgHash, ecprivkey)
    var sig2 = ethUtil.ecsign(msgHash, ecprivkey)
    return {
        msgHash: msgHash.toString('hex'),
        publickey: ecpubkey.toString('hex'),
        r: sig.r.toString('hex'),
        s: sig.s.toString('hex'),
        r2: sig2.r.toString('hex'),
        s2: sig2.s.toString('hex'),
        v: sig.v
    }
}

function ethEcrecover(msg) {
    var ecprivkey = Buffer.from(KEY1, 'hex')
    var ecpubkey = ethUtil.privateToPublic(ecprivkey)
    // https://github.com/ethereumjs/ethereumjs-util/blob/master/index.js#L348
    var ethMessageHash = ethUtil.hashPersonalMessage(Buffer.from(msg))
    var sig = ethUtil.ecsign(ethMessageHash, ecprivkey)
    // hash, v , r,  s 
    var recoverPublicKey = ethUtil.ecrecover(ethMessageHash, sig.v, sig.r, sig.s)
    return {
        msgHash: ethMessageHash.toString('hex'),
        r: sig.r.toString('hex'),
        s: sig.s.toString('hex'),
        v: sig.v,
        publickey: ecpubkey.toString('hex'),
        recoverPublicKey: recoverPublicKey.toString('hex')
    }
}

// random k
// https://github.com/bitpay/bitcore-message/blob/master/lib/message.js#L50
function bitcoinMessage(msg) {
    var privateKey = bitcore.PrivateKey(Buffer.from(KEY1, 'hex'))
    var publicKey = privateKey.toPublicKey()
    var signature = bmessage(msg).sign(privateKey)
    var signature2 = bmessage(msg).sign(privateKey)
    return {
        publicKey: publicKey.toString(),
        signature: signature,
        signature2: signature2
    }
}

var msg = 'abc'
var result = {
    curveSecp256k1: "y*y == x*x*x + 7",
    moduleSecp256k1: secp256k1Module(),
    secp256k1: calcSecp256k1(msg),
    p256: calcP256(msg),
    bitcoinMessage: bitcoinMessage(msg),
    ethsign: ethSign(msg),
    ethEcrecover: ethEcrecover(msg)
}

console.log(JSON.stringify(result, null, 2))