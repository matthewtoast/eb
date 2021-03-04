import {app, BrowserWindow} from 'electron';
import * as path from 'path';

const pkg = require('./package.json');

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    title: pkg.name,
    backgroundColor: '#000',
    darkTheme: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      allowRunningInsecureContent: true,
      plugins: true,
      experimentalFeatures: true,
      webviewTag: true,
    },
  });
  mainWindow.maximize();
  mainWindow.loadFile(path.join(app.getAppPath(), 'index.html'));
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
