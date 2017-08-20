## The Rise of Blockchain & DLT

### 1. 安裝Windows開發環境

* Visual Studio Code https://code.visualstudio.com/download
* VirtualBox https://www.virtualbox.org/
* VirtualBox DLDOJO-S1 OVA https://github.com/dltdojo/container/blob/master/dltdojo/VirtualBox.md
* putty http://www.putty.org/
* Google Chrome Browser https://www.google.com.tw/chrome/browser/desktop/index.html

### 2. 登入開發環境

#### VirtualBox

* 開啟VirtualBox - 檔案 - 匯入應用裝置
* login dltdojo/dltdojo
* ip addr (找出IP，下稱DEVIP)

#### Windows-檔案總管

* 開啟Windows-檔案總管輸入\\<DEVIP>\smb
* 輸入使用者名稱與密碼都是dltdojo

#### Putty

* 開啟putty
* 在IP Address輸入DEVIP
* 使用者名稱密碼都是dltdojo登入

### 3. 下載dltdojo/container專案

smb為ubuntu提供windows掛載路徑，可以在windows裡面編輯程式，但程式在ubuntu裡執行，確定目錄後使用git clone下載專案程式碼。裡面可能有預先載入的container專案程式碼，可使用rm -rf刪除。

```
$ cd smb
$ pwd
/home/dltdojo/smb
$ rm -rf container
$ git clone https://github.com/dltdojo/container.git
$ cd container
```