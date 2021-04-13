const { app, BrowserWindow, ipcMain } = require("electron")
const path = require('path')

class Main {

    constructor( env ) {
        this.ENV = env
        this.BOXES = {}
    }

    REG_BOX( BOX ) {
        this.BOXES[module.name] = module
    }

    RUN( initialBox ) {

        if (require('electron-squirrel-startup')) { 
            app.quit()
        }

        app.on('ready', _ => this.BOXES[initialModule].WINDOW_BUILD())

        
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        })

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow()
            }
        })

    }

}

module.exports = Main