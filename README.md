#Electron MOD

Un sencillo flujo de ventanas, registrando "Cajas", en las cuales crear ventanas de navegador, para un uso sencillo dentro de una aplicación determinada. No se pretente reinventar la rueda, solo hacer menos tedioso construirlas.

## MAIN

~~~
const APP = new MAIN('DEV')
~~~

Inicializa la instancia, pasando por parametro un ambiente de desarrollo, el único registrado por ahora es "DEV" (Desarrollo). En caso de detectar uno parametro diferente, no mostrará las ventanas de depuración de cada una de las ventanas de navegador generadas por el flujo de la aplicación.

~~~
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
~~~

El método <code>REG_BOX</code> registra las ventanas que se pueden usar en el flujo de la aplicación, no limitado a una instancia de estas mismas, solo declara el cuerpo de ventana que será utilizado para generar una nueva instancia de <code>electron.BrowserWindow</code>.

Este método acepta una caja, o un <code>ARRAY</code> de cajas.

## BOX

~~~
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
    })
~~~
El primer parametro de <code>BOX</code> es el nombre de la caja, este mismo debe ser único, ya que formará parte de un objeto, y su nombre funcionará como identificador de ventana a abrir.

El segundo parametro es un <code>OBJECT</code> donde sus llaves son <code>window</code>, <code>menu</code>, <code>render</code>.

Donde:
- <code>window</code>: Es la estructura de configuración con la misma estructura que <code>BrowserWindow</code> de electron.io
- <code>menu</code>: Es la estructura donde se inicializa la configuración de menú. Esta configuración equivale al <code>BrowserWindow.setMenu()</code>
- <code>render</code>: es la ruta del archivo que cargará la instancia. Tentativamente será convertida a un <code>OBJECT</code> en el cual se pueda especificar el tipo de carga que se realizará, siendo posible usar también _url_.

### Dependencias

- bootstrap
- bootstrap-icons
- electron-squirrel-startup
- knex
- mysql
- sqlite3
- uniqid
- xterm

##### Claridad
<strong>knex</strong> y <strong>xterm</strong> así como las dependencias necesarias para su función, son pensadas en el proyecto para el cual originalmente fue pensado el flujo de trabajo.