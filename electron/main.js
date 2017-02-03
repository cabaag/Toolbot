const {
  app,
  BrowserWindow,
  protocol,
  Menu
} = require('electron');

// const settings = require('electron-settings');

var client;
// Connect to live update if LIVE_UPDATE env variable is true
if (process.env.LIVE_UPDATE === 'true') {
  client = require('electron-connect').client;
}

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  firstRun();
  init();
  protocol.interceptFileProtocol('file', function(req, callback) {
    var url = req.url.substr(7);
    callback({
      path: path.normalize(__dirname + url)
    });
  }, function(error) {
    if (error) {
      console.error('Failed to register protocol');
    }
  });
  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden-inset',
    'web-preferences': {
      'web-security': false,
      'node-integration': true
    }
  });

  mainWindow.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'file:',
    slashes: true
  }));

  if (process.env.OPEN_DEV_TOOLS === 'true') {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // webFrame.setVisualZoomLevelLimits(1, 1);
  });
  mainWindow.on('closed', () => mainWindow = null);
  if (client) {
    client.create(mainWindow, {
      'sendBounds': false
    });
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Code that run once only when is open first time
function firstRun() {
  // settings.defaults({
  //   projects: {
  //     view: 'list',
  //     paths: []
  //   }
  // });
}

// Initialize all preferences before open window
function init() {
  // const menu = Menu.buildFromTemplate(template);  
  // Menu.setApplicationMenu(menu);
}