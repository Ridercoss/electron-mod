(function() {

    console.log(window.api)

    let cmdAboutPage = document.querySelector('#login-cmd-about-page')
    let cmdOpenTerminal = document.querySelector('#login-cmd-bug-terminal')

    cmdOpenTerminal.addEventListener('click', (event) => {
        event.preventDefault()
        window.api.send('window.open.terminal')
        console.log('OPEN TERMINAL WINDOW')
    })

    cmdAboutPage.addEventListener('click', (event) => {
        event.preventDefault()
        window.api.send('window.open.about')
        console.log('OPEN ABOUT PAGE')
    })

})()