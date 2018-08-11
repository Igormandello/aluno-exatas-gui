const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false });
  mainWindow.loadFile('./src/index.html');

  registerShortcuts();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.disableHardwareAcceleration();
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', function () {
  if (mainWindow === null)
    createWindow();
});

function registerShortcuts() {
  globalShortcut.register('F5', () => mainWindow.reload());

  globalShortcut.register('F11', () => {
    if (mainWindow.webContents.isDevToolsOpened())
      mainWindow.webContents.openDevTools();
    else
      mainWindow.webContents.openDevTools();
  });
}