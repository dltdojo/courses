### Get Bitcoin Cash

* BIP39 - Mnemonic Code https://iancoleman.github.io/bip39/
* How to get Bitcoin Cash from many wallet/software/services with Coinomi : Coinomi Support  https://coinomi.freshdesk.com/support/solutions/articles/29000013719-how-to-get-bitcoin-cash-from-many-wallet-software-services-with-coinomi
* 注意: coinomi發送可設定交易費但是coinomi sweep不行，而coinomi sweep是產生一筆線上交易轉入該錢包，如coinomi設定交易費太低會該筆掃描金鑰產出交易會無法完成交易而卡住好幾天。
* mycelium or electrum UTXOs External Path : m/44'/0'/0'/0/x , Internal path : m/44'/0'/0'/1/x

步驟說明

* 原錢包匯出bip39密詞
* 原錢包抄寫所有未花費支出的地址
* https://iancoleman.github.io/bip39/ 另存新檔不用網路版本
* 開啟另存新檔的HTML
* 輸入bip39密詞
* 切換m/44'/0'/0'/0/x 與 m/44'/0'/0'/1/x 根據地址查找金鑰
* 滑鼠移到private key欄位金鑰會生成QRCode
* 使用 Coinomi Bitcoin Cash的掃描對準金鑰QRCode將BCH轉入
* 依序將所有地址轉入完成


