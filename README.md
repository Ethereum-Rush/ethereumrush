# Proof of live miner

It is the most popular and original POL Miner node script for electron.js. The code is exceptionally portable and has been used successfully on a very broad range of MAC OS X, Wind64 andubuntu, systems and hardware.

## Contact

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/ethereumrush-github/)
[![GitHub Issues](https://img.shields.io/badge/open%20issues-0-yellow.svg)](https://github.com/omgbbqhaxx/EthereumRushMiner/issues)

- Chat in [cloudbank-github channel on Gitter](https://gitter.im/ethereumrush-github).
- Report bugs, issues or feature requests using [GitHub issues](issues/new).



# Getting Started

The Ethereum Rush Documentation site hosts the **[Ethereum RUSH homepage](https://ethereumrush.org/)**, which
has a Quick Start section.

Operating system | Status
---------------- | ----------
Max OS X Darwin  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/cloudbank/cloudbank-github)
Ubuntu  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/cloudbank/cloudbank-github)
Windows 64         | [![AppVeyor](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://ci.appveyor.com/project/cloudbank/cloudbank-github)


## EthereumRushMiner
```shell
npm install electron --save-dev
npm install web3  --save-dev
npm install electron-packager --save-dev
npm install jquery --save-dev
npm install web3 --save-dev
```

## Mac OS X
```shell
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=../images/mnr.icns --prune=true --out=release-builds
```

## Windows
```shell
electron-packager . miner --overwrite --platform=win32 --arch=ia32 --icon=../images/mnr.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="POL Miner"
```

## For Linux Computers
```shell
electron-packager . miner --overwrite --asar=true --platform=linux --arch=x64 --icon=../images/mrn.png --prune=true --out=release-builds
```



##Some important links
First of all you need became a miner at this contract  **[Ethereum RUSH test contract](https://etherscan.io/address/0x61d6d033348f6bf5939548e4bab30f1198a64d0a)**

Please install metamask on your browser  **[Metamask offical website](https://metamask.io/)**
Download Mac OSX Release from here  **[POL miner for mac](https://github.com/Ethereum-Rush/EthereumRushMiner/releases)**
