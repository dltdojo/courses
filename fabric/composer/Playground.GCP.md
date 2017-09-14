## Google Cloud Engine - VM - micro-vcpu - 0.6G Ram - 10G HD - ubuntu-1604-xenial-v20170815a

install docker-compose

```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl git jq nmap tree openssl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update && sudo apt-get install -y docker-ce
sudo usermod -aG docker $USER
sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)"
sudo chmod +x /usr/local/bin/docker-compose
sudo reboot
```

install composer hlfv1

```
curl -sSL https://hyperledger.github.io/composer/install-hlfv1.sh | bash
```

WebUI VPC網路 - 防火牆規則 - 新增 8080 or GCP firewall rule - gcloud shell

* Firewall Rules Overview  |  Compute Engine Documentation  |  Google Cloud Platform https://cloud.google.com/compute/docs/vpc/firewalls

```
$ gcloud compute firewall-rules list
NAME                    NETWORK  DIRECTION  PRIORITY  ALLOW                         DENY
composer-playground     default  INGRESS    1000      tcp:8080
default-allow-http      default  INGRESS    1000      tcp:80
default-allow-https     default  INGRESS    1000      tcp:443
default-allow-icmp      default  INGRESS    65534     icmp
default-allow-internal  default  INGRESS    65534     tcp:0-65535,udp:0-65535,icmp
default-allow-rdp       default  INGRESS    65534     tcp:3389
default-allow-ssh       default  INGRESS    65534     tcp:22
```

* https://hyperledger.github.io/composer/installing/using-playground-locally.html
* Playground (Example): http://130.211.153.192:8080
* As a new user, I can install Composer Playground and a Blockchain platform in one command · Issue #945 · hyperledger/composer https://github.com/hyperledger/composer/issues/945

```
$ docker ps
CONTAINER ID        IMAGE                                     COMMAND                  CREATED             STATUS              PORTS                                            NAMES
92084e7d33be        hyperledger/composer-playground           "pm2-docker compos..."   35 minutes ago      Up 35 minutes       0.0.0.0:8080->8080/tcp                           composer
0dbda2678ddd        hyperledger/fabric-peer:x86_64-1.0.1      "peer node start -..."   35 minutes ago      Up 35 minutes       0.0.0.0:7051->7051/tcp, 0.0.0.0:7053->7053/tcp   peer0.org1.example.com
c96f09adbce6        hyperledger/fabric-couchdb:x86_64-1.0.1   "tini -- /docker-e..."   35 minutes ago      Up 35 minutes       4369/tcp, 9100/tcp, 0.0.0.0:5984->5984/tcp       couchdb
dc9975aebeff        hyperledger/fabric-ca:x86_64-1.0.1        "sh -c 'fabric-ca-..."   35 minutes ago      Up 35 minutes       0.0.0.0:7054->7054/tcp                           ca.org1.example.com
d1ee747c533e        hyperledger/fabric-orderer:x86_64-1.0.1   "orderer"                35 minutes ago      Up 35 minutes       0.0.0.0:7050->7050/tcp                           orderer.example.com
```