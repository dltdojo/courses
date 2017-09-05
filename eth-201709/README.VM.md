# VirtualBox VM

## Build a new device (Export OVA)

### 1. download ubuntu server 16.04.3 LTS ISO file

* Ubuntu Server 16.04.3 LTS https://www.ubuntu.com/download/server

### 2. create a virtual device

* RAM: 4 GiB
* HD: 50 GiB

### 3. install docker

```
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl git jq nmap tree openssl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update && sudo apt-get install -y docker-ce
$ sudo usermod -aG docker $USER

$ docker version
Client:
 Version:      17.06.1-ce
 API version:  1.30
 Go version:   go1.8.3
 Git commit:   874a737
 Built:        Thu Aug 17 22:51:12 2017
 OS/Arch:      linux/amd64

Server:
 Version:      17.06.1-ce
 API version:  1.30 (minimum version 1.12)
 Go version:   go1.8.3
 Git commit:   874a737
 Built:        Thu Aug 17 22:50:04 2017
 OS/Arch:      linux/amd64
 Experimental: false

$ sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.15.0/docker-compose-$(uname -s)-$(uname -m)"
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose -v
docker-compose version 1.15.0, build e12f3b9
```

### 4. install nodejs

```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get update
$ sudo apt-get install -y nodejs
$ node -v
v6.11.2
$ npm -v
3.10.10
$ sudo npm install -g lite-server
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

### 配發單一位址的網路環境 

* 設定值 - 網路 - 介面卡 1 - NAT
* 設定值 - 網路 - 介面卡 2 - 僅限主機介面卡
* Ubuntu Guest 設定 Host Only + NAT 網卡連通內外網路 http://www.arthurtoday.com/2013/07/ubuntu-guest-enables-nat-and-hostonly-adapter.html

```
$ ls /sys/class/net/
enp0s3  enp0s8  lo

$ sudo nano /etc/network/interfaces

# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp0s3
iface enp0s3 inet dhcp
auto enp0s8
iface enp0s8 inet dhcp

$ sudo reboot
```

### 查詢地址

smb 地址 \\192.168.99.100\smb\

```
$ ifconfig
docker0   Link encap:Ethernet  HWaddr 02:42:34:03:1e:2c
          inet addr:172.17.0.1  Bcast:0.0.0.0  Mask:255.255.0.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

enp0s3    Link encap:Ethernet  HWaddr 08:00:27:94:dd:7f
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe94:dd7f/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:10 errors:0 dropped:0 overruns:0 frame:0
          TX packets:27 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1998 (1.9 KB)  TX bytes:3205 (3.2 KB)

enp0s8    Link encap:Ethernet  HWaddr 08:00:27:b2:0d:42
          inet addr:192.168.99.100  Bcast:192.168.99.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:feb2:d42/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:95 errors:0 dropped:0 overruns:0 frame:0
          TX packets:104 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:10512 (10.5 KB)  TX bytes:16570 (16.5 KB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:84 errors:0 dropped:0 overruns:0 frame:0
          TX packets:84 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1
          RX bytes:6160 (6.1 KB)  TX bytes:6160 (6.1 KB)

```

### git clone courses project

```
$ cd smb
$ git clone https://github.com/dltdojo/courses.git
$ cd courses/
$ sudo npm install -g truffle
$ sudo npm install -g ethereumjs-testrpc
$ sudo npm install -g blockchain-cli
```

### Install IPFS on Ubuntu 16.04

```
$ sudo apt-get update
$ sudo apt-get install golang-go -y
$ cd /tmp
$ wget https://dist.ipfs.io/go-ipfs/v0.4.10/go-ipfs_v0.4.10_linux-386.tar.gz
$ tar xvfz go-ipfs_v0.4.10_linux-386.tar.gz
$ sudo mv go-ipfs/ipfs /usr/local/bin/ipfs
```
