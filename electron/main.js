const { app, BrowserWindow, ipcMain } = require('electron');
const os = require('os');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      // Allow renderer process to use ipcRenderer
      nodeIntegration: false,
    }
  });

  mainWindow.loadURL('http://localhost:3000'); // URL of your React app

  // Example of getting MAC address
  const networkInterfaces = os.networkInterfaces();
  const macAddresses = Object.values(networkInterfaces)
    .flat()
    .filter((iface) => iface.mac && iface.mac !== '00:00:00:00:00:00')
    .map((iface) => iface.mac);

  // Send MAC addresses to the renderer process
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('mac-addresses', macAddresses);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
