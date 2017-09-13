* http://docs.confluent.io/current/cp-docker-images/docs/quickstart.html

### Topics and Messages
```
$ docker-compose up -d
$ docker-compose ps
       Name                  Command            Stat            Ports
                                                 e
------------------------------------------------------------------------------
t100kafka_kafka1_1   bash -c sleep 8 &&         Up     9092/tcp
                     /etc/co ...
t100kafka_kafkacli   tail -f /dev/null          Up     9092/tcp
_1
t100kafka_zookeepe   /etc/confluent/docker/ru   Up     2181/tcp, 2888/tcp,
r1_1                 n                                 3888/tcp


$ docker-compose exec kafkacli bash

## Create a topic foo
root@dbb1b9230238:/# kafka-topics --create --topic foo --partitions 1 --replication-factor 1 --if-not-exists --zookeeper zookeeper1:32181
Created topic "foo".

## Describe foo topic
root@dbb1b9230238:/# kafka-topics --describe --topic foo  --zookeeper zookeeper1:32181
Topic:foo       PartitionCount:1        ReplicationFactor:1     Configs:
        Topic: foo      Partition: 0    Leader: 1001    Replicas: 1001  Isr: 1001

## Publish 42 messages to new foo topic
root@dbb1b9230238:/# bash -c "seq 42 | kafka-console-producer --request-required-acks 1 --broker-list kafka1:29092 --topic foo && echo 'Produced 42 messages.'"
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Produced 42 messages.

## Read back 42 messages using the built-in Console consumer
root@dbb1b9230238:/# kafka-console-consumer --bootstrap-server kafka1:29092 --topic foo --new-consumer --from-beginning --max-messages 42
1
2
...
41
42
Processed a total of 42 messages
```

### Schema Registry

TODO