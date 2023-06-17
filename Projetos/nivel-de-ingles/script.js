function verificar() {
    var form = window.document.getElementById('form')

    var palavra = Number(form.value)

    var res = window.document.getElementById('res')


    if (palavra >= 0 && palavra < 100) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado básico.`
        img.src = 'imagens/manha.jpg'
    } else if (palavra >= 100 && palavra < 1000) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado intermediário.`
        img.src = 'imagens/tarde.jpg'
    } else {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado avançado.`
        img.src = 'imagens/noite.jpg'
    }

}