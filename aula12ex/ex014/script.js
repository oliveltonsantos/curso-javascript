function carregar() {
    var saudacao = window.document.getElementById('saudacao')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19 // data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = 'BOM DIA!'
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#C9D0E3'
    } else if (hora >= 12 && hora <= 18) {
        saudacao.innerHTML = 'BOA TARDE!'
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#FE8753'
    } else {
        saudacao.innerHTML = 'BOM NOITE!'
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#122141'
    }

}






