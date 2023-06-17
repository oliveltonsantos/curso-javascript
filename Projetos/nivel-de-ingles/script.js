function verificar() {
    var form = window.document.getElementById('form')

    var palavra = Number(form.value)

    var res = window.document.getElementById('res')


    if (palavra >= 0 && palavra < 500) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado iniciante.`
        img.src = 'imagens/manha.jpg'
    } else if (palavra >= 500 && palavra < 1000) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado básico.`
        img.src = 'imagens/tarde.jpg'
    } else if (palavra >= 1000 && palavra < 2000) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado intermediário.`
        img.src = 'imagens/tarde.jpg'
    } else if (palavra >= 2000 && palavra < 4000) {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado avançado.`
        img.src = 'imagens/tarde.jpg'
    } else {
        res.innerHTML = `Você sabe <strong>${palavra}</strong> palavras no total, logo seu nível é considerado acadêmico.`
        img.src = 'imagens/noite.jpg'
    }

}