function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        img.src = 'fotos/fotomanha.jpg'
        document.body.style.background = '#f7d026ff'
    } else if (hora < 18) {
        img.src = 'fotos/fototarde.jpg'
        document.body.style.background = '#b65f0dff'
    }
    else {
        img.src = 'fotos/fotonoite.jpg'
        document.body.style.background = '#360d77'
    }
}
