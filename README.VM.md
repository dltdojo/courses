# VirtualBox VM

## Build a new device (Export OVA)

### 1. download ubuntu server 16.04.2 LTS ISO file

* Ubuntu Server 16.04.2 LTS https://www.ubuntu.com/download/server

### 2. create a virtual device

* RAM: 4 GiB
* HD: 50 GiB
* Network : Bridged

### 3. install docker

```
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl git jq nmap tree software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update && sudo apt-get install -y docker-ce docker-compose
$ sudo usermod -aG docker $USER

$ docker version
Client:
 Version:      17.06.0-ce
 API version:  1.30
 Go version:   go1.8.3
 Git commit:   02c1d87
 Built:        Fri Jun 23 21:23:31 2017
 OS/Arch:      linux/amd64

$ docker-compose version
docker-compose version 1.8.0, build unknown
docker-py version: 1.9.0
CPython version: 2.7.12
OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
```

#### upgrade docker-compose

```
$ sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)"
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose -v
docker-compose version 1.15.0, build e12f3b9
```

### 4. install nodejs

```
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get update
$ sudo apt-get install -y nodejs
$ node -v
v6.11.1
$ npm -v
3.10.10
```

### 5. install smb

* Windows, Linux與 OS X的檔案分享方法 (File Sharing Methods among Windows, Linux and OS X)  http://www.lijyyh.com/2016/11/windows-linux-os-x.html

```
$ sudo apt-get install -y build-essential samba
$ sudo smbpasswd -a dltdojo
$ mkdir /home/dltdojo/smb
$ sudo cp /etc/samba/smb.conf ~
$ sudo nano /etc/samba/smb.conf

[smb]
path = /home/dltdojo/smb
valid users = dltdojo
read only = no

$ sudo service smbd restart
```

## 預先製作OVA

* VirtualBox DLDOJO-S1 OVA https://github.com/dltdojo/container/blob/master/dltdojo/VirtualBox.md