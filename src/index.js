const MAIN = require('./classes/MAIN')
const BOX = require('./modules/BOX')
const path = require('path')
const { dialog } = require('electron')

/*
** Inicializando APP
*/
const APP = new MAIN('PRO')

/*
** Registrar BOXES
** APP.REG_BOX( <BOX> / <BOX>[] )
*/
APP.REG_BOX([
    new BOX('resizer', {
        "window": {
            "title": "Redimencionar Imagenes",
            "width": 1080,
            "hieght": 820,
            "resizable ": false,
            "maximizable": true,
            "webPreferences": {
                "preload": path.resolve( APP.APP_GET().getAppPath(), "src", "preload.js")
            }
        },
        "menu": null,
        "render": path.resolve(__dirname, "views", "resizer.html")
    },
    APP.ENV_GET()
    )
])

/*
** Inicializar Aplicación
** APP.RUN( <string> )
** Donde <string> es el nombre de identificador de BOX
*/
APP.RUN('resizer')

APP.IPC().on('app.open.filebrowser', async(event, args) => {
    try {
        
        if ( args == true ) {
            let filelists = await dialog.showOpenDialog({"properties": ["openFile", "multiSelections"], "filters": [{ name: 'Images', extensions: ['jpg', 'png', 'jpeg'] }]})
            console.log( filelists )
            event.sender.send("app.filebrowser.response", filelists)
        }

    } catch (error) {
        throw error
    }
})

APP.IPC().on('app.output.directory', async(event, args) => {
    try {
        
        if ( args == true ) {
            let outputdir = await dialog.showOpenDialog({"properties": ["openDirectory"]})
            console.log( outputdir )
            event.sender.send("app.outputdir.response", outputdir)
        }

    } catch (error) {
        throw error
    }
})
