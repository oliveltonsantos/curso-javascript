function gerar() {
    var txtn = document.getElementById('txtn')
    var numero = Number(txtn.value)
    var res = document.getElementById('res')

    for (var n = numero; n <= 10; n *= numero) {
        res.innerHTML += `${numero}`
    }

}