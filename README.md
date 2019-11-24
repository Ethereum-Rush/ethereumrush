# EthereumRushMiner
```shell
npm install electron --save-dev
npm install web3  --save-dev
npm install electron-packager --save-dev

# Mac OS X
```shell
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=../images/mnr.icns --prune=true --out=release-builds
```

# Windows
```shell
electron-packager . miner --overwrite --platform=win32 --arch=ia32 --icon=../images/mnr.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="POL Miner"
```shell

# For Linux Computers
```shell
electron-packager . miner --overwrite --asar=true --platform=linux --arch=x64 --icon=../images/mrn.png --prune=true --out=release-builds
```
