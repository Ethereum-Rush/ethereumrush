# Ethereum eRush Summary

As we have seen over time, the proof of stake consensus mechanism, in other words, the idea of masternode which is based on winning prizes over some time by renting a coins did as well as the Proof of Work consensus algorithm. But people have to learn too much programming and terminal knowledge to become a masternode, which significantly reduces participation. Our first solution is to help people become masternode without having technical knowledge and to allow them to do a proof of live while keeping their devices on. Our other important solution is to enable the sending of a text (alphanumeric characters) in the ethereum network alongside the memo, in other words. I will explain the importance of this feature below.

- Download miner programs for mac and windows [from here](https://github.com/Ethereum-Rush/ethereumrush/releases/tag/2.3).
- Our offical contract address is [0x6EA53dfc58C5cbf68a799EdD208cb3A905db5939](https://etherscan.io/address/0x6EA53dfc58C5cbf68a799EdD208cb3A905db5939).

## Contact
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/ethereumrush-github/)
[![GitHub Issues](https://img.shields.io/badge/open%20issues-0-yellow.svg)](https://github.com/omgbbqhaxx/EthereumRushMiner/issues)

- Chat in [ethereumrush-github channel on Gitter](https://gitter.im/ethereumrush-github).
- Report bugs, issues or feature requests using [GitHub issues](issues/new).


## Download and start minig.

The Ethereum Mining programs  **[Ethereum eRUSH Miner program](https://github.com/Ethereum-Rush/ethereumrush/releases/tag/2.0)**, which
has a Quick Start section.

Operating system | Status
---------------- | ----------
Max OS X Darwin  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/ethereumrush/ethereumrush-github)
Ubuntu  | [![TravisCI](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/ethereumrush/ethereumrush-github)
Windows 64         | [![AppVeyor](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://ci.appveyor.com/project/ethereumrush/ethereumrush-github)



## Memo feature.

If you have previously been a member of a cryptographic stock market, you may have noticed that a different address is created for each member, and even some stock markets create a different address for each transaction. There's a reason for this. Imagine two different members named Alice and Bob, and a bitcoin wallet from the stock exchange and one of the members sends 5 bitcoins into this wallet to be loaded on their account. How will the owner of the stock market know from whom this money comes from? Alice or Bob? So he/she gives Alice and Bob separate addresses. Let's say Alice's address ends with 11a and Bob's address ends with 22b. When 5 bitcoins are sent to 11b address, the stock market knows that this money is sent by Bob. Therefore it starts to reflect Bob's 5 bitcoins on the website. However, there is a problem experienced by the stock market and that the members are not aware of it. The stock market has to transfer this money to its main wallet. Therefore it executes another transaction from Bob's address to its address, having to pay a transaction fee to the miners needlessly. It would not pose a problem if it only had two members. However, collecting the money at a single address when you execute 50.000 or 700 transactions per day would cause a serious problem.

Now let's take a look at our alternative, let's imagine a bitcoin wallet that ends with 000 that belongs to the stock market. Let's assume that Bob also sends the bbb alphanumeric that proves he's Bob when sending money to this wallet.
And when Alice sends the money to the same wallet, she adds aaa alongside the amount. Money accumulates in a single account smoothly, and the business can easily distinguish who the payments come from, which in turn provides savings and efficiency.

In such a way, we make another profit. While, in the first scenario, the member business has to have detailed information on this topic and to know a lot of different issues such as creating a wallet from scratch to receive crypto money, in the second scenario, the person does not have to anything. This in return, is a feature that will increase the adaptation and coin demand.

## 2- PoL: Proof of Live ~ Consensus Details.

PoL: Proof of live consensus algorithm is a system where masternodes receive their prizes as long as they keep their devices on, and receive no prize on the contrary case. So how can devices prove to other users that they are online without centralization? 
Every 12 ~ 15 seconds, a new block is generated in the Ethereum network. This process takes 10 minutes for bitcoin. Each block in the ethereum has the following details.  If we consider the #8801692nd block in Ethereum, in this block title, there are many values such as
Block Height: 8801692
Timestamp: X days x hrs ago (Oct-24-2019 07:34:43 AM + UTC)
Hash: 0x064284d1dd0b1647ee49579c102cde82062ba9f488db31ac3180de5297490f29
and these values change every 15 seconds. For example, the hash value is a value that every block has to have and that will be created after 15 seconds, which no one in the world can predict.
https://etherscan.io/block/8801692 You can view these details by examining all the blocks on etherscan.  

The blockhash value in this block is coincidental, and when only 100 blocks are valid for users to receive payment, in other words, in the current 1500 seconds, firstly, we convert this hash in the hexadecimal number system to a decimal system. You can translate these numbers online yourself by typing hexadecimal to decimal. Now, if we simply said ''if the last digit of the decimal equivalent of the hash value is equal to 1, distribute the prize,'' we would get the following result. Since we would get a number between 0 and 9 every 15 seconds, we would distribute a prize averagely in every 9 + 1 block [+1 represents zero], which means every 150 seconds, in other words, every 2,5 minutes. But we want to make payments daily. One day is 86,400 seconds in total. When we divide this number by 12, we reach 7200, which gives us the average number of ethereum blocks produced on an average of 1,5 days. If we want to distribute a prize in 7200 blocks, in other words, once in a day, we need to take the mod 7200 of the blockhash value (x% 7200). By the way, mod 10 means getting the last digit of the number above, so we divide the number by 10 constantly and the latest remainder means mod 10. For example, mod 10 of the number 101 is 1. So when we get the mod 7200 of a number, we get numbers between 0 and 7200 - 1 from this random number. Thus we distribute the prize every 1,5 days, but no one in the universe knows in which block the prize will be given and it needs to be checked every 12 seconds. Therefore, this explains how the Proof of Live algorithm works.


## Ethereum eRush Prize distribution algorithm
In Ethererum eRush, the tokens are in the contract itself, which now amounts to 24 million, and from this contract, 16,384 prizes are distributed to miners every 1,5 days in average, but miners receive prizes at a coin rate that they locked to the system to get it back after 3 months. In the scenario where there are only 2 miners in the system, a miner who locks 1000 Etrs will receive half of the prize that miners who lock 2000 Etrs get.
In the PoL consensus algorithm, the amount that should remain locked for the masternode is determined by users and it is called minimum target. If a user has locked 5,000 coins for 3 months to become a masternode, the minimum target is set to 50 and therefore the user can lock at least 1% coin to allow other users to become masternode. In the 5000 case, the minimum required number is 50. But if there are only 2 people in the system, the minimum target is calculated as 1% of 5000 +50/2. So in this case, the minimum target decreases to 2,5.  The concept that more locks get more pay creates a demand for the purchase of PoL-based cryptocurrencies, in which case people will have to collect more cryptocurrencies from the market to earn more, which reduces the supply in the market and allows the money to preserve its value.

## Ethereum eRush Supply
Total supply is limited to 24,592,240 and only 80 thousand have been dug beforehand.  Miners in the system continue to generate coins and make gain by locking these coins.
The fact that Ethereum eRush gives a prize every 1,5 days on average does not necessarily mean that it will give a prize every 1,5 days. While it may not give a prize for 8 days,  it may give 8 consecutive prizes at the end of the 8th day. But every time Etr gives a prize, a value called lastblock increases once, and when the lastblock value is equal to 7300, which is equivalent to an average of 3 years, the daily prize of 16,000 will be reduced to 8000.


# Ethereum eRush Miner Applications Details
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
- First of all you need became a miner at this contract  **[Ethereum eRUSH test contract](https://etherscan.io/address/0x6EA53dfc58C5cbf68a799EdD208cb3A905db5939#writeContract)**
- Please install metamask on your browser  **[Metamask offical website](https://metamask.io/)**
- Download Mac OSX Release from here  **[POL miner for mac](https://github.com/Ethereum-Rush/EthereumRushMiner/releases)**
- Web3 Provider  **[infura link](https://infura.io)**
