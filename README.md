# Ethereum Rush

First ever proof of live mineable erc20 token.
Download miner app and start solo mining in 5 minutes. 
- Download miner programs for mac and windows [from here](https://github.com/Ethereum-Rush/ethereumrush/releases/tag/1.0.7.1).

## Contact

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/ethereumrush-github/)
[![GitHub Issues](https://img.shields.io/badge/open%20issues-0-yellow.svg)](https://github.com/omgbbqhaxx/EthereumRushMiner/issues)

- Chat in [ethereumrush-github channel on Gitter](https://gitter.im/ethereumrush-github).
- Report bugs, issues or feature requests using [GitHub issues](issues/new).

## Download and start minig.

The Ethereum Mining programs  **[Ethereum RUSH Miner program](https://github.com/Ethereum-Rush/EthereumRushMiner/releases)**, which
has a Quick Start section.

Operating system | Status
---------------- | ----------
Max OS X Darwin  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/ethereumrush/ethereumrush-github)
Ubuntu  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/ethereumrush/ethereumrush-github)
Windows 64         | [![AppVeyor](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://ci.appveyor.com/project/ethereumrush/ethereumrush-github)



## Ethereum Rush ~ Proof of live consensus protocol details

Our offical contract is [0x6F371CA338bbddd0baF719E1D5d0797cCE20774f](https://etherscan.io/address/0x6f371ca338bbddd0baf719e1d5d0797cce20774f). Normally ethereum's have block time	12-15 seconds on average and all blocks have
their own Hash value this value is hexadecimal and can we can convert a decimal number that hash value.
Basicly our miner program checking all new blocks hash numbers and get this numbers  7200 (%7200) mod and if result is equls one (1) miner can get reward! Why we get mod 7200 because of a day equals 86 400 seconds and when we divide 86400/12(eth block time) we get 7200 and thats mean Ethereum Rush rewards sharing rewards as daily!

And miners need to get their rewards in 100 blocks after find 1 number block. After 100 block they lose of reward rights.
Thats mean they are need to be online continuously and check all blocks hashs mods.

Please check signfordailyrewards and getDailyRewards functions first of all when a miner find 1 number mining program call signfordailyrewards function and our contract calculating
onine miner numer after 100 block people can get their rewards using detDailyReward function!


## Proof of stake support.
Every miner need to stake any ethereum rush before became a miner using becameaminer function.

I wanna explain that with an example. Think A and B two diffirent miner in the sytem. A miner stake 1000 ETR and B user stake 2000 Ethereum Rush. First year ETR reward equals 2**14 = 16.384 but A miner get 5461 and b miner get 10.922 thats mean B stake 2X and get 2X reward.


## Minimum Target and Difficulty

Minimum target is about minimum ethereum rush amount for became a miner.
Thats calculating total mined (etr amount / totalminer)'s one percent. If A and B miner is stake 1000 ETR thats mean maximum target is equals = 2000/100 =20 thats mean people can not becameaminer with 19 ETR and this is called difficulty.
Note : In our contract minimum target calling as maximumTarget but this is no  problem for process :(

## Block Halving

In ethereum rush block halving became every two years if you check our contract you can see lastBlock variable this is increment daily and if lastBlock equls 365*2 = 730 block reward divide with 2!!!


## MEMO FUTURE.

If you use sendtokenwithmemo function you can send ETHEREUM RUSH with alfenumeric text or thats called as memo.
EOS and Stellar already have this future but we add memo future for ethereum first time!

call sendtokenwithmemo function! 1. amount 2. adress 3. memo.

If receiver wanna check their transactions and memos first of all need to call getmemotextcountforaddr for example if user have one transaction this functions returns 1 then user can call checkmemopurchases that function get 1. receiver address 2. index

everyting are working correctly and you can check this contract details now!


## WHY i generate this contract and why i add memo function to ethereum.

First of all i have an idea about Automat's. For example if you wanna 'sell' some sandwich with Automat you need pay
more than 2000 usd for an Automat  why? because they have very complex money checking, money over-calculation, money stock and different process if you wanna sell this with bitcoin or ethereum think this scenario you have a fish sandwich as 1$ and you have a turkey sandwich as 1$ too and one bitcoin and ethereum adress. How this Automat know which sandwich you want?
But if this machine get text too you can send T1 or F1 text with ETHEREUM RUSH and this will game changer.

I dont create an any website ,Automat and other payment gateways because i need check this idea is good or bad.

# Ethereum Rush Miner Applications Details
```shell
npm install electron --save-dev
npm install web3  --save-dev
npm install electron-packager --save-dev
npm install jquery --save-dev
npm install web3 --save-dev
```

## Mac OS X
```shell
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=images/mnr.icns --prune=true --out=release-builds
```

## Windows
```shell
electron-packager . miner --overwrite --platform=win32 --arch=ia32 --icon=images/mnr.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="POL Miner"

electron-packager . miner --overwrite --platform=win32 --arch=x64 --icon=images/mnr.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="POL Miner"

```

## For Linux Computers
```shell
electron-packager . miner --overwrite --asar=true --platform=linux --arch=x64 --icon=images/mrn.png --prune=true --out=release-builds
```


## Links
- First of all you need became a miner at this contract  **[Ethereum RUSH test contract](https://etherscan.io/address/0x61d6d033348f6bf5939548e4bab30f1198a64d0a#writeContract)**
- Please install metamask on your browser  **[Metamask offical website](https://metamask.io/)**
- Download Mac OSX Release from here  **[POL miner for mac](https://github.com/Ethereum-Rush/EthereumRushMiner/releases)**
- Web3 Provider  **[infura link](https://infura.io)**

 

