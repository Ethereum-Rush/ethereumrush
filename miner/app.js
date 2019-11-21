var electron = require('electron');  // Module to control application life.
const Tx = require('ethereumjs-tx').Transaction
//var BrowserWindow = require('browser-window');  // Module to create native browser window.
const {app, ipcRenderer, BrowserWindow, ipcMain, dialog} =  electron;
var pkkey = '';
var Web3 = require('web3');
var web3 = new Web3("https://mainnet.infura.io/v3/914bc8ee83c746a9801f4a57f0432aff");
const ethUtils = require('ethereumjs-util')
var oldresult = 999999999;
var rewardable = false;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
const url = require("url");
const path = require("path");

var data = '[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mineamount","type":"uint256"}],"name":"becameaminer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkAddrMinerStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkRewardStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"checkmemopurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundsWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"genesisReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getDailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getactiveminersnumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getdifficulity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getmaximumAverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getmemotextcountforaddr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getyourcoinsbackafterthreemonths","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumTarget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nAddrHash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nMixAddrandBlock","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"nMixForeignAddrandBlock","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nRewarMod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nWtime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberofminer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"premined","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_memo","type":"string"}],"name":"sendtokenwithmemo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"signfordailyreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
var abi = JSON.parse(data);
//console.log(abi);

app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
    webPreferences: {
            nodeIntegration: true
        }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname,"/index.html"),
        protocol: "file:",
        slashes:true
    })
  );

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });


  ipcMain.on('key', (event, privateKey) => {
    //console.log(arg) // prints "ping"
    //var buf = Buffer.from(arg, 'utf8');
    var privateKey = Buffer.from(privateKey, 'hex' );
    pkkey = privateKey;

    var myetheraddress = ethUtils.privateToAddress(privateKey).toString('hex');
    console.log(myetheraddress);

    //connectContrat = web3.eth.Contract(address="0x1A416997DeED6F1d6DFd09a6fcFE7c1f0Ee5A13b", abi=cAbi,)
    var MyContract = new web3.eth.Contract(abi, '0x2e4fC5c606B488869d9c601B1a27bcE7573D39A5', {
        from: myetheraddress, // default from address
        gasPrice: '10000000000' // default gas price in wei, 20 gwei in this case
    });

    MyContract.methods.sendtokenwithmemo('100000000000000000','0xfbd6f9704478104f0ef3f4f9834c3621210fe598','this is my design').estimateGas({from: myetheraddress})
                        .then(function(gasAmount){
                          web3.eth.getTransactionCount(myetheraddress).then(function(nonce){
                                   console.log("my nonce value is here:", nonce);
                                   console.log(web3.utils.toHex(gasAmount));
                                   console.log(web3.utils.toHex(web3.utils.toWei('40', 'gwei')));
                                   console.log(web3.utils.toHex(nonce) );
                                   dataTx = MyContract.methods.sendtokenwithmemo('100000000000000000','0xfbd6f9704478104f0ef3f4f9834c3621210fe598','this is my design').encodeABI();  //The encoded ABI of the method
                                   console.log(dataTx);

                                   var rawTx = {
                                   'chainId': 1,
                                   'gas': web3.utils.toHex(gasAmount),
                                   'data':dataTx,
                                   'to': '0x2e4fC5c606B488869d9c601B1a27bcE7573D39A5',
                                   'gasPrice': web3.utils.toHex(web3.utils.toWei('40', 'gwei')),
                                   'nonce':  web3.utils.toHex(nonce) }

                                   var tx = new Tx(rawTx);
                                   console.log(tx);
                                   tx.sign(pkkey);
                                   var serializedTx = tx.serialize();
                                   console.log(serializedTx);
                                   web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log);



                                 });

    });



});
});
