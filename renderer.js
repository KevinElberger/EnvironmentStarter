const ipc = require('electron').ipcRenderer
let trayOn = false

ipc.send('put-in-tray')

// Tray removed from context menu on icon
ipc.on('tray-removed', function () {
  ipc.send('remove-tray')
  trayOn = false
})

ipc.on('start', function() {
  ipc.send('start')
})