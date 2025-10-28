const { contextBridge, ipcRenderer } = require('electron');



contextBridge.exposeInMainWorld('AbilityViewer', {
  getAbilities: () => ipcRenderer.invoke('ability:get-abilities'),
  getAbilityFromId: (id) => ipcRenderer.invoke('ability:get-ability-from-name'),
})