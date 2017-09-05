### Kovan(PoA)共識以太坊私有網路

* Demo PoA tutorial · paritytech/parity Wiki https://github.com/paritytech/parity/wiki/Demo-PoA-tutorial
* Proof of Authority Chains · paritytech/parity Wiki https://github.com/paritytech/parity/wiki/Proof-of-Authority-Chains
* 使用Parity建立Proof-of-Authority (PoA) Ethereum Chain – Taipei Ethereum Meetup – Medium  https://medium.com/taipei-ethereum-meetup/%E4%BD%BF%E7%94%A8parity%E5%BB%BA%E7%AB%8Bproof-of-authority-poa-ethereum-chain-c5c1cdd0f21a

### parity-poa-playground

* https://github.com/dstarcev/parity-poa-playground

```
$ cd /tmp
$ git clone https://github.com/dstarcev/parity-poa-playground.git && cd parity-poa-playground
$ docker-compose up -d
$ docker-compose logs | grep token=
member0_1     | Open: http://0.0.0.0:8180/#/auth?token=3dU3-Dgs0-EjIc-sIJx
```

* member0 http://VMIP:8180/#/auth?token=3dU3-Dgs0-EjIc-sIJx
* ethstats dashboard http://VMIP:3001/

### 停止所有容器關掉網路

```
$ docker-compose stop
```