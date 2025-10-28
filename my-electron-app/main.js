/** Loading model and initialize DB */
const {db} = require('./models/index.js')
console.log("synchronizing model");
db.sequelize.sync();
console.log("model loaded");

/** Viewers */
const { AbilityView, AbilityListView } = require('./wrappers/ability_wrapper.js')

/** Load Json */
const {get_data} = require( './json_loader.js');

function handleGetData(){
  return get_data('/home/niko/Documents/jdr/CypherSystem/Cypher-SRD-FR/CSCG/csrd-20241001.json');
}

/** handle main window */
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

const createAbilityWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

/** when app is ready, initialize handles */
app.whenReady().then(() => {
  ipcMain.handle('ability:get-abilities', () => AbilityListView.get_abilities );
  ipcMain.handle('ability:get-ability-from-name', (id) => AbilityView.get_ability_from_name );
//  ipcMain.on('get-data', handleGetData);
  createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  })