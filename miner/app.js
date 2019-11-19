var electron = require('electron');  // Module to control application life.
//var BrowserWindow = require('browser-window');  // Module to create native browser window.
const {app, BrowserWindow, ipcMain} =  electron;
var Web3 = require('web3');
var web3 = new Web3("https://mainnet.infura.io/v3/914bc8ee83c746a9801f4a57f0432aff");
const ethUtils = require('ethereumjs-util')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
const url = require("url");
const path = require("path");


// Quit when all windows are closed.
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
    var myetheraddress = ethUtils.privateToAddress(privateKey).toString('hex')


    console.log(myetheraddress);

    //web3.eth.getBalance(myetheraddress).then(function(balance){
  //    console.log(web3.utils.fromWei(balance));
//    });



    //event.reply('asynchronous-reply', 'pong')
  })



});
