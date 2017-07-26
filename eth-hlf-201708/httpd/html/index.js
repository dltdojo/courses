// https://github.com/ConsenSys/eth-lightwallet
//
// https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
// Child key derivation (CKD) functions - hardened key
// bips/bip-0039.mediawiki at master · bitcoin/bips https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
// 
// eth-lightwallet : the default BIP32 HD derivation path is m/0'/0'/0'/i.
// Standardizing of HD wallet derivation paths (BIP32, BIP39, BIP44) · Issue #84 · ethereum/EIPs https://github.com/ethereum/EIPs/issues/84
// Default derivation path should be m/44'/60'/0'/0/n` · Issue #80 · ConsenSys/eth-lightwallet https://github.com/ConsenSys/eth-lightwallet/issues/80
//
// Vault password in eth-lightwallet is not the BIP39 passphrase.
// BIP39 passphrase = ""
// Mnemonic Code Converter https://iancoleman.github.io/bip39/
// iancoleman/bip39: A web tool for converting BIP39 mnemonic codes https://github.com/iancoleman/bip39
// 
function createKeystore(cb) {
    var keyStore = lightwallet.keystore;
    var hdPath = "m/44'/60'/0'/0"
    // var password = prompt('Enter password for encryption', 'password');
    var password = "pass"
    keyStore.createVault({
        password: password,
        hdPathString: hdPath
    }, function (err, ks) {
        ks.keyFromPassword(password, function (err, pwDerivedKey) {
            if (err) throw err;
            ks.generateNewAddress(pwDerivedKey, 3);
            // m/44'/60'/0'/0/0
            // m/44'/60'/0'/0/1
            // m/44'/60'/0'/0/2
            var addresses = ks.getAddresses();
            var result = addresses.map(function (v, i, a) {
                var address = v
                var key = ks.exportPrivateKey(address, pwDerivedKey)
                return { address: address, key: key, path: `m/44'/60'/0/${i}` }
            })
            var seed = ks.getSeed(pwDerivedKey)
            cb({ seed: seed, result: result })
            ks.passwordProvider = function (callback) {
                var pw = prompt("Please enter password", "Password");
                callback(null, pw);
            };
        });
    });
}
angular.module('myApp', [])
    .controller('MyController', function ($scope, $http) {
        $scope.ethkey = function () {
            createKeystore(function (r) {
                console.log(r)
                $scope.key = r
                $scope.$apply()
            })
        }
        $scope.hello = 'world';
         $http.get('mydata.json?'+new Date().toString()).then(r=>{
            $scope.mydata = r.data
            console.log($scope.mydata)
        })
    });