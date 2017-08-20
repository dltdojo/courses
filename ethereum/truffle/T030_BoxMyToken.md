### MyToken

* truffle-box/tutorialtoken-box: A box containing all you need to get started with our OpenZeppelin (TutorialToken) tutorial. https://github.com/truffle-box/tutorialtoken-box
* npm install openzeppelin-solidity
* Robust Smart Contracts with OpenZeppelin http://truffleframework.com/tutorials/robust-smart-contracts-with-openzeppelin
* https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/StandardToken.sol
* contracts/MyToekn.sol
* migrations/2_deploy_contracts.js
* src/js/app.js
* test/TestMyToken.sol
* test/mytoken.js

```
$ cd mytoken
$ truffle unbox tutorialtoken
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
  Run dev server: npm run dev

$ tree -L 2
.
├── box-img-lg.png
├── box-img-sm.png
├── bs-config.json
├── contracts
│   └── Migrations.sol
├── migrations
│   └── 1_initial_migration.js
├── node_modules
│   ├── abbrev
│   ├── accepts
│   ├── after
│   ├── ajv
│   ├── ansi-regex
│   ├── ansi-styles
│   ├── anymatch
│   ├── arraybuffer.slice
│   ├── array-unique
│   ├── arr-diff
│   ├── arr-flatten
│   ├── asn1
│   ├── assert-plus
│   ├── async
│   ├── async-each
│   ├── async-each-series
│   ├── asynckit
│   ├── aws4
│   ├── aws-sign2
│   ├── backo2
│   ├── balanced-match
│   ├── base64-arraybuffer
│   ├── base64id
│   ├── batch
│   ├── bcrypt-pbkdf
│   ├── better-assert
│   ├── binary-extensions
│   ├── blob
│   ├── boom
│   ├── brace-expansion
│   ├── braces
│   ├── browser-sync
│   ├── browser-sync-client
│   ├── browser-sync-ui
│   ├── bs-recipes
│   ├── builtin-modules
│   ├── callsite
│   ├── camelcase
│   ├── caseless
│   ├── chalk
│   ├── chokidar
│   ├── cliui
│   ├── co
│   ├── code-point-at
│   ├── combined-stream
│   ├── commander
│   ├── component-bind
│   ├── component-emitter
│   ├── component-inherit
│   ├── concat-map
│   ├── connect
│   ├── connect-history-api-fallback
│   ├── connect-logger
│   ├── cookie
│   ├── core-util-is
│   ├── cryptiles
│   ├── dashdash
│   ├── debug
│   ├── decamelize
│   ├── delayed-stream
│   ├── depd
│   ├── destroy
│   ├── dev-ip
│   ├── easy-extender
│   ├── eazy-logger
│   ├── ecc-jsbn
│   ├── ee-first
│   ├── emitter-steward
│   ├── encodeurl
│   ├── engine.io
│   ├── engine.io-client
│   ├── engine.io-parser
│   ├── error-ex
│   ├── escape-html
│   ├── escape-string-regexp
│   ├── etag
│   ├── eventemitter3
│   ├── expand-brackets
│   ├── expand-range
│   ├── express
│   ├── extend
│   ├── extglob
│   ├── extsprintf
│   ├── filename-regex
│   ├── fill-range
│   ├── finalhandler
│   ├── find-up
│   ├── forever-agent
│   ├── for-in
│   ├── form-data
│   ├── formidable
│   ├── for-own
│   ├── fresh
│   ├── fs-extra
│   ├── get-caller-file
│   ├── getpass
│   ├── glob-base
│   ├── glob-parent
│   ├── graceful-fs
│   ├── har-schema
│   ├── har-validator
│   ├── has-ansi
│   ├── has-binary
│   ├── has-cors
│   ├── hawk
│   ├── hoek
│   ├── hosted-git-info
│   ├── http-errors
│   ├── http-proxy
│   ├── http-signature
│   ├── immutable
│   ├── indexof
│   ├── inherits
│   ├── invert-kv
│   ├── isarray
│   ├── is-arrayish
│   ├── is-binary-path
│   ├── is-buffer
│   ├── is-builtin-module
│   ├── is-dotfile
│   ├── is-equal-shallow
│   ├── is-extendable
│   ├── is-extglob
│   ├── is-fullwidth-code-point
│   ├── is-glob
│   ├── is-number
│   ├── is-number-like
│   ├── isobject
│   ├── is-posix-bracket
│   ├── is-primitive
│   ├── isstream
│   ├── is-typedarray
│   ├── is-utf8
│   ├── jsbn
│   ├── json3
│   ├── jsonfile
│   ├── jsonify
│   ├── json-schema
│   ├── json-stable-stringify
│   ├── json-stringify-safe
│   ├── jsprim
│   ├── kind-of
│   ├── lcid
│   ├── limiter
│   ├── lite-server
│   ├── load-json-file
│   ├── localtunnel
│   ├── lodash
│   ├── lodash.isfinite
│   ├── micromatch
│   ├── mime
│   ├── mime-db
│   ├── mime-types
│   ├── minimatch
│   ├── minimist
│   ├── mkdirp
│   ├── moment
│   ├── ms
│   ├── negotiator
│   ├── nopt
│   ├── normalize-package-data
│   ├── normalize-path
│   ├── number-is-nan
│   ├── oauth-sign
│   ├── object-assign
│   ├── object-component
│   ├── object.omit
│   ├── object-path
│   ├── on-finished
│   ├── openurl
│   ├── opn
│   ├── options
│   ├── os-locale
│   ├── parse-glob
│   ├── parsejson
│   ├── parse-json
│   ├── parseqs
│   ├── parseuri
│   ├── parseurl
│   ├── path-exists
│   ├── path-is-absolute
│   ├── path-type
│   ├── performance-now
│   ├── pify
│   ├── pinkie
│   ├── pinkie-promise
│   ├── portscanner
│   ├── preserve
│   ├── process-nextick-args
│   ├── punycode
│   ├── qs
│   ├── randomatic
│   ├── range-parser
│   ├── readable-stream
│   ├── readdirp
│   ├── read-pkg
│   ├── read-pkg-up
│   ├── regex-cache
│   ├── remove-trailing-separator
│   ├── repeat-element
│   ├── repeat-string
│   ├── request
│   ├── require-directory
│   ├── require-main-filename
│   ├── requires-port
│   ├── resp-modifier
│   ├── rx
│   ├── safe-buffer
│   ├── semver
│   ├── send
│   ├── serve-index
│   ├── server-destroy
│   ├── serve-static
│   ├── set-blocking
│   ├── set-immediate-shim
│   ├── setprototypeof
│   ├── sntp
│   ├── socket.io
│   ├── socket.io-adapter
│   ├── socket.io-client
│   ├── socket.io-parser
│   ├── spdx-correct
│   ├── spdx-expression-parse
│   ├── spdx-license-ids
│   ├── sshpk
│   ├── statuses
│   ├── stream-throttle
│   ├── string_decoder
│   ├── stringstream
│   ├── string-width
│   ├── strip-ansi
│   ├── strip-bom
│   ├── supports-color
│   ├── tfunk
│   ├── to-array
│   ├── tough-cookie
│   ├── tunnel-agent
│   ├── tweetnacl
│   ├── ua-parser-js
│   ├── ultron
│   ├── underscore
│   ├── universalify
│   ├── unpipe
│   ├── util-deprecate
│   ├── utils-merge
│   ├── uuid
│   ├── validate-npm-package-license
│   ├── verror
│   ├── weinre
│   ├── which-module
│   ├── window-size
│   ├── wrap-ansi
│   ├── ws
│   ├── wtf-8
│   ├── xmlhttprequest-ssl
│   ├── y18n
│   ├── yargs
│   ├── yargs-parser
│   └── yeast
├── package.json
├── src
│   ├── css
│   ├── fonts
│   ├── index.html
│   └── js
├── test
└── truffle.js

267 directories, 8 files
```

### npm insall zeppelin-solidity

```
$ npm install zeppelin-solidity
$ truffle compile
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/MyToken.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20.sol...
Compiling zeppelin-solidity/contracts/token/ERC20Basic.sol...
Compiling zeppelin-solidity/contracts/token/StandardToken.sol...
Writing artifacts to ./build/contracts
```

### test contracts

```
$ truffle test

Using network 'development'.

Compiling ./contracts/MyToken.sol...
Compiling ./test/TestMyToken.sol...
Compiling truffle/Assert.sol...
Compiling truffle/DeployedAddresses.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20.sol...
Compiling zeppelin-solidity/contracts/token/ERC20Basic.sol...
Compiling zeppelin-solidity/contracts/token/StandardToken.sol...


  TestMyToken
    ✓ testInitialBalanceUsingDeployedContract (66ms)
    ✓ testInitialBalanceWithNew (95ms)

  Contract: MyToken
    ✓ should put 12000 MyToken in the first account


  3 passing (628ms)

```

### testrpc


### deploy contract to testrpc

```
$ truffle migrate
Compiling ./contracts/MyToken.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20.sol...
Compiling zeppelin-solidity/contracts/token/ERC20Basic.sol...
Compiling zeppelin-solidity/contracts/token/StandardToken.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x19dbf80516856578ed933c28a50fe7e362569fe569f32ce1aa9caf7aa442b92e
  Migrations: 0xf3343277c1490e76c530617e6a513821a5d2b5f6
Saving successful migration to network...
  ... 0x493794b7fb4151821a2dbc59e89b366d4f6d4f275a058354aed25817aacf3a60
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying MyToken...
  ... 0x232064aba102a22705576dc32ac701c74d1b2f06caa94b3adbd5eebe9ff60ef4
  MyToken: 0xf80accde2347fd889802e288524c7b3812fd137e
Saving successful migration to network...
  ... 0x2863e8089618a6aae7105546189897e98544ca4e60ab0a4008ef7f8e6ff17e6b
Saving artifacts...
```

### run lite server

* johnpapa/lite-server: Lightweight node server https://github.com/johnpapa/lite-server
* bs-config.json
* testrpc mnemonics
* truffle migrate again when restart testrpc

```
HD Wallet
==================
Mnemonic:      pretty prison acquire spray hawk disorder damp gloom march describe scout mandate
Base HD Path:  m/44'/60'/0'/0/{account_index}
```

start local server

```
$ truffle migrate
$ npm run dev
```

### Chrome MetaMask Setup 

NOTE: 注意注意特別注意 MetaMask 目前所有網路共用一組密詞，也就是如果你這裡換成testrpc舊的其他網路的也會跟著消失需要重新輸入，請先確認已經將原始的密詞備份完成。

* coustom rpc : http://<DEVIP>:8545
* click "Lock" - "I forgot my password"
* RESTORE VAULT : testrpc mnemonic
* Account1 send token to Account2
* Account2 reload testpage