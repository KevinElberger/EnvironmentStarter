const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain
const Menu = electron.Menu
const Tray = electron.Tray

const path = require('path')
const url = require('url')

let appIcon = null
let mainWindow

ipc.on('put-in-tray', function (event) {
  const iconName = 'app.ico'
  const iconPath = path.join(__dirname, iconName)
  appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([{
    label: 'Quit',
    click: function () {
      event.sender.send('tray-removed')
    }
  },
  {
    label: 'Start',
    click: function() {
      event.sender.send('start')
    }
  }])
  appIcon.setToolTip('Quick Start')
  appIcon.setContextMenu(contextMenu)
})

ipc.on('remove-tray', function () {
  appIcon.destroy()
})

app.on('window-all-closed', function () {
  if (appIcon) appIcon.destroy()
})

function createWindow () {

  mainWindow = new BrowserWindow({width: 400, height: 300})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})