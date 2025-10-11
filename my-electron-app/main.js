
const {db_initialize} = require('./db_sync.mjs');

db_initialize();

const {get_data} = require( './json_loader.mjs');

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
  ipcMain.handle('ping', () => 'pong')
  ipcMain.on('get-data', handleGetData)
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })