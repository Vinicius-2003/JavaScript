function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = 19
    msg.innerHTML = (`São ${horas} `)

    if (horas >=0 && horas < 12) {
        msg.innerHTML = (`Bom dia, são ${horas}`)
        img.src="./midia/sol-da-manhã.jpg"
        msg.style.color = 'white'
        document.body.style.background = '#e5ad00'
        var bck_section = document.querySelector('section')
        bck_section.style.background = ('#352901')


    } else if( horas <= 18) {
        msg.innerHTML = (`Boa tarde, são ${horas}`) 
        img.src="./midia/meio-dia.jpg"
        msg.style.color = 'white'
        document.body.style.background = '#5a7da5'
        var bck_section = document.querySelector('section')
        bck_section.style.background = ('#cad5d9')
    
    } else {
        msg.innerHTML = (`Boa noite, são ${horas}`)
        img.src="./midia/noite.jpg"
        document.body.style.background = '#000000'
        msg.style.color = 'white'
        var bck_section = document.querySelector('section')
        bck_section.style.background = ('#10242b')
    }
}
    