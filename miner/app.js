var electron = require('electron');  // Module to control application life.
//var BrowserWindow = require('browser-window');  // Module to create native browser window.
const {app, ipcRenderer, BrowserWindow, ipcMain, dialog} =  electron;
const Tx = require('ethereumjs-tx').Transaction
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
    var myetheraddress = ethUtils.privateToAddress(privateKey).toString('hex')


    console.log(myetheraddress);

    //connectContrat = web3.eth.Contract(address="0x1A416997DeED6F1d6DFd09a6fcFE7c1f0Ee5A13b", abi=cAbi,)
    var MyContract = new web3.eth.Contract(abi, '0x2e4fC5c606B488869d9c601B1a27bcE7573D39A5', {
        from: myetheraddress, // default from address
        gasPrice: '10000000000' // default gas price in wei, 20 gwei in this case
    });






    web3.eth.getBalance(myetheraddress).then(function(balance){
      var bal = web3.utils.fromWei(balance);
      if(bal < 0.1) {

                const options = {
          type: 'question',
          buttons: ['I understand problem, i will load ethereum to this address.'],
          defaultId: 2,
          title: 'Warning',
          message: 'Ethereum balance problem',
          detail: 'Hola, you need minimum 0.1 ethereum balance. Because of ethereum rush write functions.',
        };

        dialog.showMessageBox(null, options, (response, checkboxChecked) => {
          console.log(response);
          console.log(checkboxChecked);
        });


      } else {


       MyContract.methods.checkAddrMinerStatus(myetheraddress).call().then(function(result){


          if(result) {
            mainWindow.webContents.send("ethaddress", myetheraddress);
            mainWindow.webContents.send("ethbalance", bal);
            var jokerQQ = MyContract.methods.balanceOf(myetheraddress).call().then(function(result){
            //the result holds your Token Balance that you can assign to a var
              var myTokenBalance = result;
              var bal = web3.utils.fromWei(myTokenBalance);
              console.log(bal);
              mainWindow.send("etrbalance", bal);
           });
            console.log(bal);


            //eawc
            (function(){
                // do some stuff
                console.log("checked successfully.");

                MyContract.methods.checkRewardStatus().call().then(function(result){

                  if(oldresult == result) {
                      console.log("do not make an anything");
                  } else {
                    oldresult = result;
                    if(result == 1){
                      rewardable = true;

                      console.log(" first of all i wanna show pkey"+pkkey);
                      MyContract.methods.signfordailyreward().estimateGas({from: myetheraddress})
                        .then(function(err, gasAmount){
                                console.log("if we get an error", err);
                                console.log("gasolina", gasAmount);
                                web3.eth.getTransactionCount(myetheraddress).then(function(nonce){
                                  console.log("my nonce value is here:", nonce);

                                  dataTx = MyContract.methods.signfordailyreward().encodeABI();  //The encoded ABI of the method
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

                                   //.then(function(TxHash){
                                  //    console.log(TxHash);
                                  // }

                                });
                        })
                        .catch(function(err){
                              console.log("gasolina err", err);
                        });
                      mainWindow.send("checkRewardStatus", result);
                    } else {

                      if(rewardable) {
                        rewardable =false;
                        //now you can call getDailyReward
                        console.log("GREAT YOU EARN A REWARDDDD BRO");

                        mainWindow.send("checkRewardStatus", result);
                      }else {
                        mainWindow.send("checkRewardStatus", result);
                      }
                    }




                  }
                });

                setTimeout(arguments.callee, 5000);
            })();



          } else {


            const options = {
            type: 'question',
            buttons: ['Close.'],
            defaultId: 2,
            title: 'Warning',
            message: 'Youre not a miner',
            detail: 'First of all, Please download firefox and install metamask then became a miner. using becameaminer function. You need lock some Ethereum Rush for became a miner.',
            };

            dialog.showMessageBox(null, options, (response, checkboxChecked) => {
            console.log(response);
            console.log(checkboxChecked);
            });
          }



       });






      }

    });







    //event.reply('asynchronous-reply', 'pong')
  })



});
