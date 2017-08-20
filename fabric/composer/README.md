## Hyperledger Composer(HC)

* Introduction | Hyperledger Composer https://hyperledger.github.io/composer/introduction/introduction.html
* ubuntu 16.04
* https://hyperledger.github.io/composer/installing/using-playground-locally.html
* Playground (Example): http://DEVIP:8080/ 

### 安裝 Hyperledger Composer Playground(Hyperledger Fabric v1.0)

* 當下目錄composer-data為已安裝結果，如要全新安裝請另外建立目錄。
* 安裝完畢會直接啟動，可檢視所有容器服務。

```
$ cd /home/dltdojo/smb && mkdir composer && cd composer
$ curl -sSL https://hyperledger.github.io/composer/install-hlfv1.sh | bash

--------------------------------------------------------------------------------------
Hyperledger Fabric and Hyperledger Composer installed, and Composer Playground launched
Please use 'composer.sh' to re-start, and 'composer.sh stop' to shutdown all the Fabric and Composer docker images

$ docker ps
CONTAINER ID        IMAGE                                     COMMAND                  CREATED              STATUS              PORTS                                            NAMES
8b8d5fbb4f52        hyperledger/composer-playground           "pm2-docker compos..."   35 seconds ago       Up 35 seconds       0.0.0.0:8080->8080/tcp                           composer
33d040e972d1        hyperledger/fabric-peer:x86_64-1.0.0      "peer node start -..."   About a minute ago   Up About a minute   0.0.0.0:7051->7051/tcp, 0.0.0.0:7053->7053/tcp   peer0.org1.example.com
b77968578f4c        hyperledger/fabric-orderer:x86_64-1.0.0   "orderer"                About a minute ago   Up About a minute   0.0.0.0:7050->7050/tcp                           orderer.example.com
a784ec462055        hyperledger/fabric-couchdb:x86_64-1.0.0   "tini -- /docker-e..."   About a minute ago   Up About a minute   4369/tcp, 9100/tcp, 0.0.0.0:5984->5984/tcp       couchdb
86e89370e4d8        hyperledger/fabric-ca:x86_64-1.0.0        "sh -c 'fabric-ca-..."   About a minute ago   Up About a minute   0.0.0.0:7054->7054/tcp                           ca.org1.example.com

$ docker exec 86e8 ls /etc/hyperledger/fabric-ca-server
ca-cert.pem
ca-key.pem
fabric-ca-server-config.yaml
fabric-ca-server.db
msp

$ docker exec 86e8 cat /etc/hyperledger/fabric-ca-server/ca-cert.pem
-----BEGIN CERTIFICATE-----
MIICYjCCAgmgAwIBAgIUB3CTDOU47sUC5K4kn/Caqnh114YwCgYIKoZIzj0EAwIw
fzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh
biBGcmFuY2lzY28xHzAdBgNVBAoTFkludGVybmV0IFdpZGdldHMsIEluYy4xDDAK
BgNVBAsTA1dXVzEUMBIGA1UEAxMLZXhhbXBsZS5jb20wHhcNMTYxMDEyMTkzMTAw
WhcNMjExMDExMTkzMTAwWjB/MQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZv
cm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEfMB0GA1UEChMWSW50ZXJuZXQg
V2lkZ2V0cywgSW5jLjEMMAoGA1UECxMDV1dXMRQwEgYDVQQDEwtleGFtcGxlLmNv
bTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABKIH5b2JaSmqiQXHyqC+cmknICcF
i5AddVjsQizDV6uZ4v6s+PWiJyzfA/rTtMvYAPq/yeEHpBUB1j053mxnpMujYzBh
MA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQXZ0I9
qp6CP8TFHZ9bw5nRtZxIEDAfBgNVHSMEGDAWgBQXZ0I9qp6CP8TFHZ9bw5nRtZxI
EDAKBggqhkjOPQQDAgNHADBEAiAHp5Rbp9Em1G/UmKn8WsCbqDfWecVbZPQj3RK4
oG5kQQIgQAe4OOKYhJdh3f7URaKfGTf492/nmRmtK+ySKjpHSrU=
-----END CERTIFICATE-----

$ ./composer.sh stop
Stopping all Docker containers
Killing all running containers
```

### 啟動 Playground 細節

```
$ ./composer.sh

PAYLOAD_LINE=104
PAYLOAD_START=105
Development only script for Hyplerledger Fabric control
Running 'downloadFabric.sh'
FABRIC_VERSION is unset, assuming hlfv1
FABRIC_START_TIMEOUT is unset, assuming 15 (seconds)

# Grab the current directory.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
 cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd
 dirname "${BASH_SOURCE[0]}"

# Pull and tag the latest Hyperledger Fabric base image.
docker pull hyperledger/fabric-peer:x86_64-1.0.0
x86_64-1.0.0: Pulling from hyperledger/fabric-peer
Digest: sha256:b7c1c2a6b356996c3dbe2b9554055cd2b63194cd7a492a83de2dbabf7f7e3c65
Status: Image is up to date for hyperledger/fabric-peer:x86_64-1.0.0
docker pull hyperledger/fabric-ca:x86_64-1.0.0
x86_64-1.0.0: Pulling from hyperledger/fabric-ca
Digest: sha256:b7094644bcbf6c28948fcdd0c38ffe65f98889a57da0e1bf23bd18731ef44800
Status: Image is up to date for hyperledger/fabric-ca:x86_64-1.0.0
docker pull hyperledger/fabric-ccenv:x86_64-1.0.0
x86_64-1.0.0: Pulling from hyperledger/fabric-ccenv
Digest: sha256:eb2e87ea07e29a0b6b6e51e200efcc0cbaa571b8124c6b2dcc704da93bf39f24
Status: Image is up to date for hyperledger/fabric-ccenv:x86_64-1.0.0
docker pull hyperledger/fabric-orderer:x86_64-1.0.0
x86_64-1.0.0: Pulling from hyperledger/fabric-orderer
Digest: sha256:d0ea1f7e7ca04f0c4b7484f8835fd68e9bf13e6fcb700cf3a70f00a4059fc344
Status: Image is up to date for hyperledger/fabric-orderer:x86_64-1.0.0
docker pull hyperledger/fabric-couchdb:x86_64-1.0.0
x86_64-1.0.0: Pulling from hyperledger/fabric-couchdb
Digest: sha256:e89b0f95f6ff674fd043795090dd65a11d727ec005d925545cf0b4fc48aa221d
Status: Image is up to date for hyperledger/fabric-couchdb:x86_64-1.0.0
Development only script for Hyplerledger Fabric control
Running 'startFabric.sh'
FABRIC_VERSION is unset, assuming hlfv1
FABRIC_START_TIMEOUT is unset, assuming 15 (seconds)

# Grab the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
 cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd
 dirname "${BASH_SOURCE[0]}"

#
cd "${DIR}"/composer

docker-compose -f "${DIR}"/composer/docker-compose.yml down
Removing network composer_default
docker-compose -f "${DIR}"/composer/docker-compose.yml up -d
Creating network "composer_default" with the default driver
Creating ca.org1.example.com
Creating couchdb
Creating orderer.example.com
Creating peer0.org1.example.com

# wait for Hyperledger Fabric to start
# incase of errors when running later commands, issue export FABRIC_START_TIMEOUT=<larger number>
echo ${FABRIC_START_TIMEOUT}
15
sleep ${FABRIC_START_TIMEOUT}

# Create the channel
docker exec peer0.org1.example.com peer channel create -o orderer.example.com:7050 -c composerchannel -f /etc/hyperledger/configtx/composer-channel.tx
2017-07-17 03:08:45.878 UTC [msp] GetLocalMSP -> DEBU 001 Returning existing local MSP
2017-07-17 03:08:45.878 UTC [msp] GetDefaultSigningIdentity -> DEBU 002 Obtaining default signing identity
2017-07-17 03:08:45.880 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2017-07-17 03:08:45.880 UTC [msp] GetLocalMSP -> DEBU 004 Returning existing local MSP
2017-07-17 03:08:45.880 UTC [msp] GetDefaultSigningIdentity -> DEBU 005 Obtaining default signing identity
2017-07-17 03:08:45.880 UTC [msp] GetLocalMSP -> DEBU 006 Returning existing local MSP
2017-07-17 03:08:45.880 UTC [msp] GetDefaultSigningIdentity -> DEBU 007 Obtaining default signing identity
2017-07-17 03:08:45.880 UTC [msp/identity] Sign -> DEBU 008 Sign: plaintext: 0A8C060A074F7267314D53501280062D...6D706F736572436F6E736F727469756D
2017-07-17 03:08:45.880 UTC [msp/identity] Sign -> DEBU 009 Sign: digest: E72FEDAD25492702165ED4546846687121CE5521A54598EB091189FABBEC595B
2017-07-17 03:08:45.880 UTC [msp] GetLocalMSP -> DEBU 00a Returning existing local MSP
2017-07-17 03:08:45.880 UTC [msp] GetDefaultSigningIdentity -> DEBU 00b Obtaining default signing identity
2017-07-17 03:08:45.880 UTC [msp] GetLocalMSP -> DEBU 00c Returning existing local MSP
2017-07-17 03:08:45.880 UTC [msp] GetDefaultSigningIdentity -> DEBU 00d Obtaining default signing identity
2017-07-17 03:08:45.880 UTC [msp/identity] Sign -> DEBU 00e Sign: plaintext: 0AC9060A1B08021A0608BDD4B0CB0522...9F45E714D48B2BA003C3DC203C909A8A
2017-07-17 03:08:45.880 UTC [msp/identity] Sign -> DEBU 00f Sign: digest: 4AA976EC25DA8C52F2F0DC923BF73541BD51F69591D7F6622E6D0D223BE0572A
2017-07-17 03:08:45.926 UTC [msp] GetLocalMSP -> DEBU 010 Returning existing local MSP
2017-07-17 03:08:45.926 UTC [msp] GetDefaultSigningIdentity -> DEBU 011 Obtaining default signing identity
2017-07-17 03:08:45.926 UTC [msp] GetLocalMSP -> DEBU 012 Returning existing local MSP
2017-07-17 03:08:45.926 UTC [msp] GetDefaultSigningIdentity -> DEBU 013 Obtaining default signing identity
2017-07-17 03:08:45.926 UTC [msp/identity] Sign -> DEBU 014 Sign: plaintext: 0AC9060A1B08021A0608BDD4B0CB0522...DF50B2E0B05712080A021A0012021A00
2017-07-17 03:08:45.926 UTC [msp/identity] Sign -> DEBU 015 Sign: digest: 03F42D06E30519BEED4DD64FDE50EDA5A841D7046A1D3AFAE5B74541A47013ED
2017-07-17 03:08:45.927 UTC [channelCmd] readBlock -> DEBU 016 Got status:*orderer.DeliverResponse_Status
2017-07-17 03:08:45.927 UTC [msp] GetLocalMSP -> DEBU 017 Returning existing local MSP
2017-07-17 03:08:45.927 UTC [msp] GetDefaultSigningIdentity -> DEBU 018 Obtaining default signing identity
2017-07-17 03:08:45.933 UTC [channelCmd] InitCmdFactory -> INFO 019 Endorser and orderer connections initialized
2017-07-17 03:08:46.133 UTC [msp] GetLocalMSP -> DEBU 01a Returning existing local MSP
2017-07-17 03:08:46.133 UTC [msp] GetDefaultSigningIdentity -> DEBU 01b Obtaining default signing identity
2017-07-17 03:08:46.133 UTC [msp] GetLocalMSP -> DEBU 01c Returning existing local MSP
2017-07-17 03:08:46.133 UTC [msp] GetDefaultSigningIdentity -> DEBU 01d Obtaining default signing identity
2017-07-17 03:08:46.133 UTC [msp/identity] Sign -> DEBU 01e Sign: plaintext: 0AC9060A1B08021A0608BED4B0CB0522...41E65FA44F4B12080A021A0012021A00
2017-07-17 03:08:46.133 UTC [msp/identity] Sign -> DEBU 01f Sign: digest: DDF0360D9559B95066543A81E3D5A7A105697705A48EB7CFD51F2C7607BEEE0A
2017-07-17 03:08:46.136 UTC [channelCmd] readBlock -> DEBU 020 Received block:0
2017-07-17 03:08:46.136 UTC [main] main -> INFO 021 Exiting.....

# Join peer0.org1.example.com to the channel.
docker exec -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel join -b composerchannel.block
2017-07-17 03:08:46.200 UTC [msp] GetLocalMSP -> DEBU 001 Returning existing local MSP
2017-07-17 03:08:46.200 UTC [msp] GetDefaultSigningIdentity -> DEBU 002 Obtaining default signing identity
2017-07-17 03:08:46.201 UTC [channelCmd] InitCmdFactory -> INFO 003 Endorser and orderer connections initialized
2017-07-17 03:08:46.202 UTC [msp/identity] Sign -> DEBU 004 Sign: plaintext: 0A89070A5B08011A0B08BED4B0CB0510...6DC527F3FC701A080A000A000A000A00
2017-07-17 03:08:46.202 UTC [msp/identity] Sign -> DEBU 005 Sign: digest: 1276D3CA8BA18C7BEE4046EA161D054472B1E0C21BA6486A898BF65F0B2969EE
2017-07-17 03:08:46.249 UTC [channelCmd] executeJoin -> INFO 006 Peer joined the channel!
2017-07-17 03:08:46.249 UTC [main] main -> INFO 007 Exiting.....

cd ../..
Development only script for Hyplerledger Fabric control
Running 'createComposerProfile.sh'
FABRIC_VERSION is unset, assuming hlfv1
FABRIC_START_TIMEOUT is unset, assuming 15 (seconds)
# Grab the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
 cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd
 dirname "${BASH_SOURCE[0]}"

rm -rf ~/.composer-connection-profiles/hlfv1/*
rm -rf ~/.composer-credentials/*

# copy org admin credentials into the keyValStore
mkdir -p ~/.composer-credentials
cp "${DIR}"/composer/creds/* ~/.composer-credentials

# create a composer connection profile
mkdir -p ~/.composer-connection-profiles/hlfv1
cat << EOF > ~/.composer-connection-profiles/hlfv1/connection.json
{
    "type": "hlfv1",
    "orderers": [
       { "url" : "grpc://localhost:7050" }
    ],
    "ca": { "url": "http://localhost:7054",
            "name": "ca.org1.example.com"
    },
    "peers": [
        {
            "requestURL": "grpc://localhost:7051",
            "eventURL": "grpc://localhost:7053"
        }
    ],
    "keyValStore": "${HOME}/.composer-credentials",
    "channel": "composerchannel",
    "mspID": "Org1MSP",
    "timeout": "300"
}
EOF
echo "Hyperledger Composer profile has been created for the Hyperledger Fabric v1.0 instance"
Hyperledger Composer profile has been created for the Hyperledger Fabric v1.0 instance
0.9.2: Pulling from hyperledger/composer-playground
Digest: sha256:4a8b559f9ecc04006ce3680426cfe60e0d84a927f7c1375d012ff3959b264426
Status: Image is up to date for hyperledger/composer-playground:0.9.2
WARNING: Found orphan containers (peer0.org1.example.com, orderer.example.com, couchdb, ca.org1.example.com) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up.
Creating composer
114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-priv
114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-pub
PeerAdmin
Could not detect web browser to use - please launch Composer Playground URL using your chosen browser ie: <browser executable name> http://localhost:8080 or set your BROWSER variable to the browser launcher in your PATH

--------------------------------------------------------------------------------------
Hyperledger Fabric and Hyperledger Composer installed, and Composer Playground launched
Please use 'composer.sh' to re-start, and 'composer.sh stop' to shutdown all the Fabric and Composer docker images
```

### install-hlfv1.sh 安裝檔案
```
$ tree composer-data/
composer-data/
├── [1.3K]  docker-compose-playground.yml
└── [4.0K]  fabric-dev-servers
    ├── [  82]  createComposerProfile.sh
    ├── [  82]  downloadFabric.sh
    ├── [4.0K]  fabric-scripts
    │   ├── [4.0K]  hlfv0.6
    │   │   ├── [ 711]  createComposerProfile.sh
    │   │   ├── [ 821]  docker-compose.yml
    │   │   ├── [ 455]  downloadFabric.sh
    │   │   ├── [  42]  README.md
    │   │   ├── [ 486]  startFabric.sh
    │   │   ├── [ 211]  stopFabric.sh
    │   │   └── [ 495]  teardownFabric.sh
    │   └── [4.0K]  hlfv1
    │       ├── [4.0K]  composer
    │       │   ├── [ 358]  composer-channel.tx
    │       │   ├── [6.2K]  composer-genesis.block
    │       │   ├── [4.4K]  configtx.yaml
    │       │   ├── [4.0K]  creds
    │       │   │   ├── [ 246]  114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-priv
    │       │   │   ├── [ 182]  114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-pub
    │       │   │   └── [1.0K]  PeerAdmin
    │       │   ├── [4.0K]  crypto-config
    │       │   │   ├── [4.0K]  ordererOrganizations
    │       │   │   │   └── [4.0K]  example.com
    │       │   │   │       ├── [4.0K]  ca
    │       │   │   │       │   ├── [ 241]  5a6c4ce688103f8220147c6f8257eefbb5a1a8a80220c720d8152a2158021893_sk
    │       │   │   │       │   └── [ 818]  ca.example.com-cert.pem
    │       │   │   │       ├── [4.0K]  msp
    │       │   │   │       │   ├── [4.0K]  admincerts
    │       │   │   │       │   │   └── [ 769]  Admin@example.com-cert.pem
    │       │   │   │       │   ├── [4.0K]  cacerts
    │       │   │   │       │   │   └── [ 818]  ca.example.com-cert.pem
    │       │   │   │       │   └── [4.0K]  tlscacerts
    │       │   │   │       │       └── [ 826]  tlsca.example.com-cert.pem
    │       │   │   │       ├── [4.0K]  orderers
    │       │   │   │       │   └── [4.0K]  orderer.example.com
    │       │   │   │       │       ├── [4.0K]  msp
    │       │   │   │       │       │   ├── [4.0K]  admincerts
    │       │   │   │       │       │   │   └── [ 769]  Admin@example.com-cert.pem
    │       │   │   │       │       │   ├── [4.0K]  cacerts
    │       │   │   │       │       │   │   └── [ 818]  ca.example.com-cert.pem
    │       │   │   │       │       │   ├── [4.0K]  keystore
    │       │   │   │       │       │   │   └── [ 241]  4947ca37ff6aca98aed30b2f50b64b152f22089e51cf0a70ff5ceb76e9872d66_sk
    │       │   │   │       │       │   ├── [4.0K]  signcerts
    │       │   │   │       │       │   │   └── [ 769]  orderer.example.com-cert.pem
    │       │   │   │       │       │   └── [4.0K]  tlscacerts
    │       │   │   │       │       │       └── [ 826]  tlsca.example.com-cert.pem
    │       │   │   │       │       └── [4.0K]  tls
    │       │   │   │       │           ├── [ 826]  ca.crt
    │       │   │   │       │           ├── [ 875]  server.crt
    │       │   │   │       │           └── [ 241]  server.key
    │       │   │   │       ├── [4.0K]  tlsca
    │       │   │   │       │   ├── [ 241]  7b50b613ab7f8142a9f3c1a7b546c9f042026ffc7439fa37b6c5c0eb91ae0c1d_sk
    │       │   │   │       │   └── [ 826]  tlsca.example.com-cert.pem
    │       │   │   │       └── [4.0K]  users
    │       │   │   │           └── [4.0K]  Admin@example.com
    │       │   │   │               ├── [4.0K]  msp
    │       │   │   │               │   ├── [4.0K]  admincerts
    │       │   │   │               │   │   └── [ 769]  Admin@example.com-cert.pem
    │       │   │   │               │   ├── [4.0K]  cacerts
    │       │   │   │               │   │   └── [ 818]  ca.example.com-cert.pem
    │       │   │   │               │   ├── [4.0K]  keystore
    │       │   │   │               │   │   └── [ 241]  c6211e0b87d5ac94276dbf92e4cfadf385ee78e1c46cffb9a2e454e090736065_sk
    │       │   │   │               │   ├── [4.0K]  signcerts
    │       │   │   │               │   │   └── [ 769]  Admin@example.com-cert.pem
    │       │   │   │               │   └── [4.0K]  tlscacerts
    │       │   │   │               │       └── [ 826]  tlsca.example.com-cert.pem
    │       │   │   │               └── [4.0K]  tls
    │       │   │   │                   ├── [ 826]  ca.crt
    │       │   │   │                   ├── [ 814]  server.crt
    │       │   │   │                   └── [ 241]  server.key
    │       │   │   └── [4.0K]  peerOrganizations
    │       │   │       └── [4.0K]  org1.example.com
    │       │   │           ├── [4.0K]  ca
    │       │   │           │   ├── [ 241]  19ab65abbb04807dad12e4c0a9aaa6649e70868e3abd0217a322d89e47e1a6ae_sk
    │       │   │           │   └── [ 843]  ca.org1.example.com-cert.pem
    │       │   │           ├── [4.0K]  msp
    │       │   │           │   ├── [4.0K]  admincerts
    │       │   │           │   │   └── [ 790]  Admin@org1.example.com-cert.pem
    │       │   │           │   ├── [4.0K]  cacerts
    │       │   │           │   │   └── [ 843]  ca.org1.example.com-cert.pem
    │       │   │           │   └── [4.0K]  tlscacerts
    │       │   │           │       └── [ 851]  tlsca.org1.example.com-cert.pem
    │       │   │           ├── [4.0K]  peers
    │       │   │           │   └── [4.0K]  peer0.org1.example.com
    │       │   │           │       ├── [4.0K]  msp
    │       │   │           │       │   ├── [4.0K]  admincerts
    │       │   │           │       │   │   └── [ 790]  Admin@org1.example.com-cert.pem
    │       │   │           │       │   ├── [4.0K]  cacerts
    │       │   │           │       │   │   └── [ 843]  ca.org1.example.com-cert.pem
    │       │   │           │       │   ├── [4.0K]  keystore
    │       │   │           │       │   │   └── [ 241]  dfb17cf51dc061d585b4850599be0e4b8b7cc8cc363a67c23bc03c6c5393b0e0_sk
    │       │   │           │       │   ├── [4.0K]  signcerts
    │       │   │           │       │   │   └── [ 790]  peer0.org1.example.com-cert.pem
    │       │   │           │       │   └── [4.0K]  tlscacerts
    │       │   │           │       │       └── [ 851]  tlsca.org1.example.com-cert.pem
    │       │   │           │       └── [4.0K]  tls
    │       │   │           │           ├── [ 851]  ca.crt
    │       │   │           │           ├── [ 895]  server.crt
    │       │   │           │           └── [ 241]  server.key
    │       │   │           ├── [4.0K]  tlsca
    │       │   │           │   ├── [ 241]  ed9a007fe080f78d1af5410dbf35cedac9781ce6808f3c3573b748eb0de142ac_sk
    │       │   │           │   └── [ 851]  tlsca.org1.example.com-cert.pem
    │       │   │           └── [4.0K]  users
    │       │   │               └── [4.0K]  Admin@org1.example.com
    │       │   │                   ├── [4.0K]  msp
    │       │   │                   │   ├── [4.0K]  admincerts
    │       │   │                   │   │   └── [ 790]  Admin@org1.example.com-cert.pem
    │       │   │                   │   ├── [4.0K]  cacerts
    │       │   │                   │   │   └── [ 843]  ca.org1.example.com-cert.pem
    │       │   │                   │   ├── [4.0K]  keystore
    │       │   │                   │   │   └── [ 241]  114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457_sk
    │       │   │                   │   ├── [4.0K]  signcerts
    │       │   │                   │   │   └── [ 790]  Admin@org1.example.com-cert.pem
    │       │   │                   │   └── [4.0K]  tlscacerts
    │       │   │                   │       └── [ 851]  tlsca.org1.example.com-cert.pem
    │       │   │                   └── [4.0K]  tls
    │       │   │                       ├── [ 851]  ca.crt
    │       │   │                       ├── [ 834]  server.crt
    │       │   │                       └── [ 241]  server.key
    │       │   ├── [3.5K]  crypto-config.yaml
    │       │   ├── [3.0K]  docker-compose.yml
    │       │   └── [ 268]  howtobuild.txt
    │       ├── [1.1K]  createComposerProfile.sh
    │       ├── [ 459]  downloadFabric.sh
    │       ├── [ 884]  startFabric.sh
    │       ├── [ 309]  stopFabric.sh
    │       └── [ 522]  teardownFabric.sh
    ├── [ 791]  _loader.sh
    ├── [ 519]  package.json
    ├── [ 200]  startFabric.sh
    ├── [  82]  stopFabric.sh
    ├── [1.0K]  teardownAllDocker.sh
    └── [  82]  teardownFabric.sh

59 directories, 76 files

$ tree ~/.composer*
/home/dltdojo/.composer-connection-profiles
└── hlfv1
    └── connection.json
/home/dltdojo/.composer-credentials
├── 114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-priv
├── 114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457-pub
└── PeerAdmin

1 directory, 4 files

$ cat ~/.composer-connection-profiles/hlfv1/connection.json | jq .
{
  "type": "hlfv1",
  "orderers": [
    {
      "url": "grpc://localhost:7050"
    }
  ],
  "ca": {
    "url": "http://localhost:7054",
    "name": "ca.org1.example.com"
  },
  "peers": [
    {
      "requestURL": "grpc://localhost:7051",
      "eventURL": "grpc://localhost:7053"
    }
  ],
  "keyValStore": "/home/dltdojo/.composer-credentials",
  "channel": "composerchannel",
  "mspID": "Org1MSP",
  "timeout": "300"
}

$ cat ~/.composer-credentials/PeerAdmin | jq .
{
  "name": "PeerAdmin",
  "mspid": "Org1MSP",
  "roles": null,
  "affiliation": "",
  "enrollmentSecret": "",
  "enrollment": {
    "signingIdentity": "114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457",
    "identity": {
      "certificate": "-----BEGIN CERTIFICATE-----\nMIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\ncmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\nLm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2\nWjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN\nU2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ\nMBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh\nWRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G\nA1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9\nrRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6\nCEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS\nXVMHPa0iyC497vdNURA=\n-----END CERTIFICATE-----\n"
    }
  }
}
```
### 下載basic-sample-network開發

* https://github.com/dltdojo/composer-sample-networks/tree/master/packages/basic-sample-network
* https://github.com/hyperledger/composer-sample-networks
* 先啟動網路
* 下載composer-sample-networks
* VSCode開啟 \\DEVIP\smb\composer-sample-networks 編輯

```
$ ./composer.sh
$ pwd
/home/dltdojo/smb/composer
$ cd /home/dltdojo/smb && git clone https://github.com/dltdojo/composer-sample-networks.git && cd composer-sample-networks
```

### 修改basic-sample-network網路後匯出bna

* lib/smaple.js 
* models/sample.cto
* permissions.acl
* dist/basic-sample-network.bna
* http://DEVIP:8080/

```
$ pwd
/home/dltdojo/smb/composer-sample-networks
$ cd packages/basic-sample-network/
$ npm run prepublish

> basic-sample-network@0.1.1 prepublish /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network
> mkdirp ./dist && composer archive create --sourceType dir --sourceName . -a ./dist/basic-sample-network.bna


Creating Business Network Archive


Looking for package.json of Business Network Definition
        Input directory: /home/dltdojo/smb/composer-sample-networks/packages/basic-sample-network

Found:
        Description: The Hello World of Hyperledger Composer samples
        Name: basic-sample-network
        Identifier: basic-sample-network@0.1.1

Written Business Network Definition Archive file to
        Output file: ./dist/basic-sample-network.bna

Command succeeded
```

### 停止Fabric測試網路

```
$ cd /home/dltdojo/smb/composer/
$ ./composer.sh stop
Stopping all Docker containers
Killing all running containers
d8dcdd8f968c
04f6ff5100fc
74fc987bf47b
e9a8cc6f1376
1f0f631ba571
d92bf14f2b78
Removing all containers
d8dcdd8f968c
04f6ff5100fc
74fc987bf47b
e9a8cc6f1376
1f0f631ba571
d92bf14f2b78
```