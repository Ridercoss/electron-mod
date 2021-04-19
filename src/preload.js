const { contextBridge, ipcRenderer } = require("electron")

console.log('PRELOAD READY')

contextBridge.exposeInMainWorld(
    'api',
    {
      "send": (channel, data) => {
        ipcRenderer.send(channel, data)
      },
      "receive": (channel, data) => {
        ipcRenderer.on(chanel, (event, args) => func(...args))
      }
    }
  )