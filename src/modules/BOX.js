const { BrowserWindow } = require("electron")

class BOX {

    constructor(name, config) {
        this.name = name
        this.config = config
        this.window = null
    }

    WINDOW_BUILD() {

        this.window = new BrowserWindow(this.config.window)

        this.window.loadFile(this.config.render)

        if (this.config.env = "DEV") {
            this.window.webContents.openDevTools()
        }

    }

    WINDOW_GET() {
        return this.window
    }



}

module.exports = BOX