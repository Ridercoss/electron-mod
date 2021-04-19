const { app, BrowserWindow, ipcMain } = require("electron")
const os = require("os")

/**
 * @class MAIN
 */
class MAIN {

    /**
     * 
     * @param { String } env 
     */
    constructor( env ) {
        this.ENV = env
        this.BOXES = {}
    }

    REG_BOX( item ) {

        if ( item.constructor.name == 'Array' ) {

            for (let box of item) {
                this.BOXES[box.boxName] = box
            }

        } else if ( item.constructor.name == 'BOX') {
            
            this.BOXES[item.boxName] = item

        }

    }

    SWITCH_BOX( boxToClose, boxToOpen ) {
        this.BOXES[boxToClose].WINDOW_GET().hide()
        this.BOXES[boxToOpen].WINDOW_BUILD()
        this.BOXES[boxToClose].WINDOW_GET().close()
    }

    OPEN_BOX( boxToOpen ) {
        this.BOXES[boxToOpen].WINDOW_BUILD()
    }

    IPC() {
        return ipcMain
    }

    APP_GET() {
        return app
    }

    OS_GET() {
        return os
    }

    ENV_GET() {
        return this.ENV
    }

    RUN( initialBox ) {

        if (require('electron-squirrel-startup')) { 
            app.quit()
        }

        app.on('ready', _ => this.BOXES[initialBox].WINDOW_BUILD())

        
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

module.exports = MAIN