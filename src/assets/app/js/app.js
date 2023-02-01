(function() {
    const API = window.electron
    let imagesArray = []
    let imagesSelecteds = []
    let outputDirectory = null

    let imageContainer = document.getElementById('images-container')
    let cmdSelectFilesInBrowser = document.getElementById('select-files-browser')
    let cmdSelectOutputDirectory = document.getElementById('app-output-directory')

    const SetImagesInContainer = ( pathToImage ) => {

    }
    
    cmdSelectFilesInBrowser.onclick = (event) => {
        API.send("app.open.filebrowser", true)
    }

    cmdSelectOutputDirectory.onclick = (event) => {
        API.send("app.output.directory", true)
    }

    API.receive("app.filebrowser.response", (event, args) => {
        console.log(event)
        console.log(args)
        
        if ( args.canceled == false ) {
            for( let imagen of args.filePaths ) {

                if ( imagesArray.indexOf(imagen) == -1 ) {
                    imagesArray.push(imagen)
                    imageContainer.innerHTML += `<img src="${ imagen }" class="picture"/>`

                    document.querySelectorAll('#images-container .picture').forEach((element, key, parent) => {
                        element.onclick = (event) => {
                            
                            if ( imagesSelecteds.indexOf( element.getAttribute("src") ) == -1 ) {
                                imagesSelecteds.push( element.getAttribute("src") )
                                element.setAttribute("style", "opacity: 0.6")
                            } else {
                                imagesSelecteds.splice( imagesSelecteds.indexOf( element.getAttribute("src")) )
                                element.setAttribute("style", "opacity: 1")
                            }

                            if ( imagesSelecteds.length > 0 ) {
                                 document.querySelector('#select-images-remove').removeAttribute("disabled")
                            } else {
                                document.querySelector("#select-images-remove").setAttribute("disabled", "true")
                            }
                            
                        }
                    })

                }

            }
        }

    })

    API.receive("app.outputdir.response", (event, args) => {
        try {

            console.log(event)
            console.log(args)

            if ( args.canceled == false ) {
                outputDirectory == args.filePaths[0]
                document.querySelector('#app-output-directory input').value = args.filePaths[0]
            }
        } catch (error) {
            console.error( error )
        }
    })


})()