const ipc = require('electron').ipcRenderer
const remote = require('electron').remote;
const shell = require('electron').shell
const os = require('os')

let window = remote.getCurrentWindow()

(function () {
  document.getElementById('headline').innerHTML = "Starting Environment...";

  shell.openItem('C:\\Users\\Kevin\\AppData\\Roaming\\Spotify\\Spotify.exe')
  shell.openItem('C:\\Users\\Kevin\\AppData\\Local\\slack\\slack.exe')
  shell.openItem('C:\\Program Files (x86)\\JetBrains\\IntelliJ IDEA 2017.1\\bin\\idea64.exe')
  shell.openItem('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe')
  shell.openItem('C:\\Program Files\\ShrewSoft\\VPN Client\\ipseca.exe')

  window.close()
}())