const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getMacAddresses: () => ipcRenderer.invoke('get-mac-addresses'),
});
