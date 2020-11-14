var electron = require('electron');  // Module to control application life.
//var BrowserWindow = require('browser-window');  // Module to create native browser window.
const {app, ipcRenderer, BrowserWindow, ipcMain, dialog} =  electron;
const Tx = require('ethereumjs-tx').Transaction
var pkkey = '';
var web3 = '';
var Web3 = require('web3');
var hdkey = require('ethereumjs-wallet/hdkey');
const ethUtils = require('ethereumjs-util');
var oldresult = 999999999;
var myetheraddress;
var globalGwei = "30";

const newminercont = "0xA215BBe37E817eB03bE1f9bC5BAD07fa9cf6B8C2"
const newminerabi = JSON.parse('[{"inputs":[],"name":"checklasttwentyblock","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')



const contractAddress = "0x3cC5EB07E0e1227613F1DF58f38b549823d11cB9"
var mainWindow = null;
const url = require("url");
const path = require("path");
var greatBlock;

var data = '[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"mineamount","type":"uint256"}],"name":"becameaminer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkAddrMinerAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkAddrMinerStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkRewardStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"checkmemopurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundsWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genesisReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bnumber","type":"uint256"}],"name":"getDailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getactiveminersnumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getblockhash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getmaximumAverage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getmemotextcountforaddr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blocknumber","type":"uint256"}],"name":"getspesificblockhash","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getyourcoinsbackafterthreemonths","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maximumTarget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nAddrHash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nRewarMod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nWtime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberofminer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premined","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_memo","type":"string"}],"name":"sendtokenwithmemo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bnumber","type":"uint256"}],"name":"signfordailyreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]';
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
    height: 200,
    'min-width': 400,
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


ipcMain.on('chwweii', (event, xx) => {
  console.log("asdad", xx);
  globalGwei = String(xx);
  console.log("typeeee", typeof globalGwei);
  mainWindow.send("okeygwei", xx);
});

ipcMain.on('beminer', (event, mamount) => {

      var MyContract = new web3.eth.Contract(abi, contractAddress, {
          from: myetheraddress, // default from address
          gasPrice: web3.utils.toWei(globalGwei, 'gwei') // default gas price in wei, 20 gwei in this case
      });

      MyContract.options.gasPrice = '10'; // default gas price in wei
      MyContract.options.gas = 5000000; // provide as fallback always 5M gas

    const grpice  = web3.eth.getGasPrice().then(function(networkgasprice){
    MyContract.methods.becameaminer(parseInt(mamount)).estimateGas({from: myetheraddress})
      .then(function(gasAmount){

              console.log("gasolina for becameaminer", gasAmount);
              web3.eth.getTransactionCount(myetheraddress).then(function(nonce){
                console.log("my nonce value is here:", nonce);


                var aa = web3.utils.toHex(networkgasprice);
                var bb = web3.utils.toHex(web3.utils.toWei("7", 'gwei'));
                var lgpminer = web3.utils.toHex(parseInt(aa) + parseInt(bb));

                dataTx = MyContract.methods.becameaminer(mamount).encodeABI();  //The encoded ABI of the method
                 var rawTx = {
                 'chainId': 1,
                 'gas': web3.utils.toHex(gasAmount),
                 'data':dataTx,
                 'to': contractAddress,
                 'gasPrice': lgpminer,
                 'nonce':  web3.utils.toHex(nonce) }

                 var tx = new Tx(rawTx);
                 console.log(tx);
                 tx.sign(pkkey);
                 var serializedTx = tx.serialize();
                 console.log(serializedTx);
                 web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log);
              });
      }).catch(function(err){console.log("gasolina err for getrewardnow", err);});
    });


});




  ipcMain.on('key', (event, privateKey) => {
    //console.log(arg) // prints "ping"
    //var buf = Buffer.from(arg, 'utf8');

    web3 = new Web3(privateKey["privder"]);
    checkxx = privateKey["pkey"].split(" ").length-1
    console.log(checkxx);
    var mnemonic = privateKey["pkey"];
    if(checkxx > 10){
      const HDWallet = require('ethereum-hdwallet')
      const hdwallet = HDWallet.fromMnemonic(mnemonic);
      console.log(`0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')}`)
      var adasd = hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')
      var privateKey = Buffer.from(adasd, 'hex' );


      myetheraddress = `0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')}`; //ethUtils.privateToAddress(privateKey).toString('hex')
      console.log(privateKey);
      console.log(myetheraddress);
      pkkey = privateKey;
      continuexx();
    } else {
      var privateKey = Buffer.from(privateKey["pkey"], 'hex' );
      myetheraddress = ethUtils.privateToAddress(privateKey).toString('hex');
      myetheraddress =  web3.utils.toChecksumAddress(myetheraddress);
      console.log("privateKey",privateKey);
      console.log("myetheraddress",myetheraddress);
      pkkey = privateKey;
      continuexx();
    }

  });



  function continuexx(){

        console.log("comehere1");
        var MyContract = new web3.eth.Contract(abi, contractAddress, {
            from: myetheraddress, // default from address
            gasPrice: web3.utils.toWei(globalGwei, 'gwei') // default gas price in wei, 20 gwei in this case
        });

        MyContract.options.gasPrice = '10'; // default gas price in wei
        MyContract.options.gas = 5000000; // provide as fallback always 5M gas
        web3.eth.getBalance(myetheraddress).then(function(balance){

          var bal = web3.utils.fromWei(balance);
          console.log("comehere3", balance);

          if(bal < 0.01) {
            console.log("comehere4");
                    const options = {
              type: 'question',
              buttons: ['I understand problem, i will load ethereum to this address.'],
              defaultId: 2,
              title: 'Warning',
              message: 'Ethereum balance problem',
              detail: 'Hola, you need minimum 0.1 ethereum balance. Because of ethereum eRush write functions.',
            };

            dialog.showMessageBox(null, options, (response, checkboxChecked) => {
              console.log(response);
              console.log(checkboxChecked);
            });


          } else {

            console.log("comehere5");
           console.log("isAddress",web3.utils.isAddress(myetheraddress));
           MyContract.methods.checkAddrMinerStatus(myetheraddress).call().then(function(result){

             console.log("comehere6");

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

               var getamnumber = MyContract.methods.getactiveminersnumber().call().then(function(amn){
               //the result holds your Token Balance that you can assign to a var
                 console.log(amn);
                 mainWindow.send("amn", amn);
              });


                console.log(bal);
                console.log(getamnumber);


                //eawc
                (function(){
                    // do some stuff


                    var MinerContract = new web3.eth.Contract(newminerabi, newminercont, {
                        from: myetheraddress, // default from address
                        gasPrice: web3.utils.toWei(globalGwei, 'gwei') // default gas price in wei, 20 gwei in this case
                    });

                    MinerContract.options.gasPrice = '10'; // default gas price in wei
                    MinerContract.options.gas = 5000000; // provide as fallback always 5M gas

                    const grpice  = web3.eth.getGasPrice().then(function(networkgasprice){


                    MinerContract.methods.checklasttwentyblock().call().then(function(result){

                      if(oldresult == result[0]) {
                          console.log("do not make an anything");
                      } else {
                        oldresult = result[0];
                        if(result[0] == 1 ) {
                          if((result[1] - greatBlock) <= 100) {
                              mainWindow.send("checkRewardStatus", "pass");
                          } else {

                          if(web3.utils.toHex(networkgasprice) > web3.utils.toHex(web3.utils.toWei(globalGwei, 'gwei')))
                          {
                            console.log("gwei is very highh!!");
                            mainWindow.send("checkRewardStatus", "HighGwei");
                          } else {
                          //+!+!+!+!+!+!+!+!+!
                          greatBlock = result[1];
                          console.log(greatBlock);
                          //const bnumber = result[1].toString();
                          MyContract.methods.signfordailyreward(result[1]).estimateGas({from: myetheraddress})
                            .then(function(gasAmount){
                                    console.log("gasolina", gasAmount);
                                    web3.eth.getTransactionCount(myetheraddress).then(function(nonce){
                                      console.log("my nonce value is here:", nonce);

                                      dataTx = MyContract.methods.signfordailyreward(result[1]).encodeABI();  //The encoded ABI of the method
                                       console.log(dataTx);

                                       var aa = web3.utils.toHex(networkgasprice);
                                       var bb = web3.utils.toHex(web3.utils.toWei("7", 'gwei'));
                                       var lastgpriceone = web3.utils.toHex(parseInt(aa) + parseInt(bb));

                                       var rawTx = {
                                       'chainId': 1,
                                       'gas': web3.utils.toHex(gasAmount),
                                       'data':dataTx,
                                       'to': contractAddress,
                                       'gasPrice': lastgpriceone,
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
                            }).catch(function(err){console.log("gasolina err", err);});
                          mainWindow.send("rewardSuccessful", result[1]);
                          mainWindow.send("checkRewardStatus", result[0]);
                          console.log("you can get your reward after 1 hrs!!!");
                          setTimeout(getrewardnow, 2100000);
                          //+!+!+!+!+!+!+!+!+!
                        }




                        }
                        } else {
                            mainWindow.send("checkRewardStatus", result[0]);

                        }
                      }
                    });
                  });






                 setTimeout(arguments.callee, 15000);
                })();



              } else {

                MyContract.methods.getmaximumAverage().call().then(function(result){
                    var mininmumAvarage = ((result / 10**18) / 100) + 1
                    console.log(mininmumAvarage);
                    mainWindow.send("minerequired", mininmumAvarage);

                });

              }
           }).catch(function(err){console.log("Miner status problem", err);});
          }
        }).catch(function(err){console.log("Balance err for getrewardnow", err);});



        function getrewardnow(){
          console.log("here need works after 1 hours");



          const grpice  = web3.eth.getGasPrice().then(function(networkgasprice){
          MyContract.methods.getDailyReward(greatBlock).estimateGas({from: myetheraddress})
            .then(function(gasAmount){
                    console.log("gasolina for getDailyReward", gasAmount);
                    web3.eth.getTransactionCount(myetheraddress).then(function(nonce){
                      console.log("my nonce value is here:", nonce);


                      var aa = web3.utils.toHex(networkgasprice);
                      var bb = web3.utils.toHex(web3.utils.toWei("7", 'gwei'));
                      var lastgprice = web3.utils.toHex(parseInt(aa) + parseInt(bb));
                      dataTx = MyContract.methods.getDailyReward(greatBlock).encodeABI();  //The encoded ABI of the method
                       var rawTx = {
                       'chainId': 1,
                       'gas': web3.utils.toHex(gasAmount),
                       'data':dataTx,
                       'to': contractAddress,
                       'gasPrice': lastgprice,
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
            }).catch(function(err){console.log("gasolina err for getrewardnow", err);});
          });




        }






  };



});
