### TrustSQL

https://trustsql.qq.com/chain_oss/Q&A.html

虽然采用了传统的SQL作为存储接口，但TrustSQL对数据库的操作是有严格限制的。

* 防篡改：每次对数据的更新都采用Insert，不支持update操作，因此无法修改；不支持delete操作，也无法删除。因此作到了防篡改、防删除的原则。 
* 安全性：使用了链式私钥签名机制，仅账户使用私钥才能进行数据更新，防止节点代处置数据，防止抵赖扯皮。
* 易用性：同时对于数据查询，TrustSQL支持大家熟悉的select模式，相比k/v的键值存储方式，大大简化了查询的复杂度。

### Kafka

* Bringing up a Kafka-based Ordering Service — hyperledger fabric  http://hyperledger-fabric.readthedocs.io/en/latest/kafka.html
* A set of Hyperledger Fabric ordering service nodes (OSNs) use your Kafka cluster and provide an ordering service to your blockchain network.
* Each channel maps to a separate single-partition topic in Kafka. When an OSN receives transactions via the Broadcast RPC, it checks to make sure that the broadcasting client has permissions to write on the channel, then relays (i.e. produces) those transactions to the appropriate partition in Kafka. 
* This partition is also consumed by the OSN which groups the received transactions into blocks locally, persists them in its local ledger, and serves them to receiving clients via the Deliver RPC.

#### KSQL

* confluentinc/ksql: KSQL - a Streaming SQL Engine for Apache Kafka https://github.com/confluentinc/ksql
* KSQL from Confluent | Streaming SQL for Apache Kafka™ - YouTube  https://www.youtube.com/watch?v=A45uRzJiv7I&feature=youtu.be
* Streaming SQL in Apache Flink, KSQL, and Stream Processing for Everyone - data Artisans  https://data-artisans.com/blog/flink-streaming-sql-ksql-stream-processing
