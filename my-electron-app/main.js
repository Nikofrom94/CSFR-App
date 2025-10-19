
const {db} = require('./models/index.js')
console.log("synchronize model");
db.sequelize.sync();
console.log("model loaded");

const {get_data} = require( './json_loader.js');

function handleGetData(){
  return get_data('/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json');
}

const { app, BrowserWindow, ipcMain } = require('electron/main')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  const json_data = handleGetData();
  ipcMain.handle('get-data', () =>  json_data);
//  ipcMain.on('get-data', handleGetData);
  createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  })