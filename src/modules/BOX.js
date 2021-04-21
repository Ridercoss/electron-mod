const { BrowserWindow } = require("electron")
const debug = require('debug')('BOX')

class BOX {

    constructor(name, config, env) {
        this.boxName = name
        this.config = config
        this.window = null
        this.env = env
    }

    WINDOW_BUILD() {

        this.window = new BrowserWindow(this.config.window)

        this.window.loadFile(this.config.render)

        this.window.setMenu( this.config.menu )

        if (this.env = "DEV") {
            this.window.webContents.openDevTools()
        }

    }

    WINDOW_GET() {
        return this.window
    }



}

module.exports = BOX