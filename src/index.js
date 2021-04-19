const MAIN = require('./classes/MAIN')
const BOX = require('./modules/BOX')
const path = require('path')

/*
** Inicializando APP
*/
const APP = new MAIN('DEV')

/*
** Registrar BOXES
** APP.REG_BOX( <BOX> / <BOX>[] )
*/
APP.REG_BOX([
    new BOX('login', {
        "window": {
            "title": "Iniciar Sesión",
            "width": 400,
            "hieght": 500,
            "resizable ": false,
            "maximizable": false,
            "webPreferences": {
                "preload": path.resolve( APP.APP_GET().getAppPath(), "src", "preload.js")
            }
        },
        "menu": null,
        "render": path.resolve(__dirname, "views", "login.html")
    },
    APP.ENV_GET()
    ),
    
    new BOX('about', {
        "window": {
            "title": "Acerca de..",
            "width": 400,
            "hieght": 500,
            "resizable ": false,
            "maximizable": false,
            "webPreferences": {
                "preload": path.resolve( APP.APP_GET().getAppPath(), "src", "preload.js")
            }
    },
    "menu": null,
    "render": path.resolve(__dirname, "views", "about.html")
    },
    APP.ENV_GET()
    ),
    
    new BOX('terminal', {
        "window": {
            "title": "Terminal",
            "width": 915,
            "hieght": 430,
            "resizable ": false,
            "maximizable": false,
            "webPreferences": {
                "preload": path.resolve( APP.APP_GET().getAppPath(), "src", "preload.js")
            }
    },
    "menu": null,
    "render": path.resolve(__dirname, "views", "terminal.html")
    },
    APP.ENV_GET()
    )
])

/*
** Inicializar Aplicación
** APP.RUN( <string> )
** Donde <string> es el nombre de identificador de BOX
*/
APP.RUN('login')

APP.IPC().on('login', (event, args) => {
    try {
        
        console.log(args.user, args.password)

    } catch (error) {
        throw error
    }
})

APP.IPC().on('window.open.about', (event, args) => {
    APP.OPEN_BOX('about')
})

APP.IPC().on('window.open.terminal', (event, args) => {
    APP.OPEN_BOX('terminal')
})