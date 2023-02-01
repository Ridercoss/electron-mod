const { contextBridge, ipcRenderer } = require("electron")

console.log('PRELOAD READY')

contextBridge.exposeInMainWorld(
    'electron',
    {
      "send": (channel, data) => {
        ipcRenderer.send(channel, data)
      },
      "receive": (channel, callback) => {
        data = ipcRenderer.on(channel, callback)
      }
    }
  )
