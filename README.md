Electron MOD

Un sencillo flujo de ventanas, registrando "Cajas", en las cuales crear ventanas de navegador, para un uso sencillo dentro de una aplicación determinada.

<code>

/*
** Inicializando APP
*/
const APP = new MAIN('DEV')

</code>

Inicializa la instancia, pasando por parametro un ambiente de desarrollo, el único registrado por ahora es "DEV" (Desarrollo). En caso de detectar uno parametro diferente, no mostrará las ventanas de depuración de cada una de las ventanas de navegador generadas por el flujo de la aplicación.

<code>

/*
** Registrar BOXES
** APP.REG_BOX( BOX / BOX[] )
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
    }),
    APP.ENV_GET()
    )
    ])

</code>

El método "REG_BOX" registra las ventanas que se pueden usar en el flujo de la aplicación, no limitado a una instancia de estas mismas, solo declara el cuerpo de ventana que será utilizado para generar una nueva instancia de "Electron.BrowserWindow"
