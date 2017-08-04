* https://github.com/ethereum/web3.js/

### build web3.js for browser 
```
$ git clone https://github.com/ethereum/web3.js.git
$ cd web3.js
$ npm i 
$ npm run-script build

```

### build web3.js 1.0 for browser 
```
$ git clone https://github.com/ethereum/web3.js.git
$ cd web3.js
$ git checkout 1.0
$ npm i 
$ npm run-script build
> gulp

[20:01:17] Using gulpfile ~/ugit/web3.js/gulpfile.js
[20:01:17] Starting 'version'...
[20:01:17] Finished 'version' after 26 ms
[20:01:17] Starting 'lint'...
[20:01:17] Finished 'lint' after 222 ms
[20:01:17] Starting 'clean'...
[20:01:17] Finished 'clean' after 15 ms
[20:01:17] Starting 'web3'...
[20:02:47] Finished 'web3' after 1.48 min
[20:02:47] Starting 'default'...
[20:02:47] Finished 'default' after 15 μs

$ ls dist
web3.js  web3.min.js
```

## issue 

* Can't connect to remote node when using WebSockets with Javascript in v1.0.0-beta.13 (o is not a constructor) · Issue #960 · ethereum/web3.js https://github.com/ethereum/web3.js/issues/960
* WebSocketClient is not a constructor · Issue #276 · theturtle32/WebSocket-Node https://github.com/theturtle32/WebSocket-Node/issues/276

HTML 

```
 <script src="web3.js"></script>
 <script type="text/javascript">
    var web3 = new Web3("ws://localhost:8546");
  </script>
```

Console

```
Uncaught TypeError: WebSocket is not a constructor
    at new WebsocketProvider (web3.js:55082)
    at RequestManager.setProvider (web3.js:33478)
    at Object.packageInit (web3.js:34210)
    at new Web3 (web3.js:57070)
    at T01.beta.html:18
```

[Workround] web3.js 55082:55083

```
var WebSocket = window.WebSocket;
this.connection = new WebSocket(url);
```