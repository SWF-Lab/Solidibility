#  Solidibility

## Intro
Solidibility is a leetcode-like system, which has several problem ready to be solved and is able to test your ability of solidity.

## Deployed Link
You can use Solidibility [HERE](https://solidibility.zeabur.app)

## 使用與參考之框架/模組/原始碼
- frontend: React.js
- backend: WebSocket graphql
- db: MongoDB Atlas
* https://github.com/qingyang0506/My_Profile
* https://github.com/manuarora700/react-code-editor

## 使用之第三方套件、框架、程式碼
- frontend: mui ethers monaco web3
- backend: graphql ws 
- db: mongo
- deploy: zeabur

## How to execute in your local device
* install modules:
  * `cd frontend && yarn` 
  * `cd backend && yarn`

* 瀏覽器模組需求:
  * 需安裝 metamask 擴充功能（或是其他錢包）
  * 由於錢包私鑰較為隱私，可能需要請助教老師們自行創建一個metamask的錢包帳戶 (點入 Connect 後會呈現你想要安裝的錢包，請選擇並在建立自己的地址)。
* 環境
  * .env 中請輸入 MONGO_URL
* run: (請打開兩個 terminal 並分別在 ./final 下執行)
  * `cd frontend && yarn start`
  * `cd backend && yarn server`
* 以上皆完成後應該可以看到登入畫面，只要點選 Connect 就可以連結錢包。錢包單純作為登入功能使用，只會使用其地址作為帳戶，不會要求進行任何鏈上交易，請放心。


## 組員與負責項目
* 鍾富全
  * frontend: frame
  * deployment
* 陳彥龍
  * frontend: pages
  * backend: graphql