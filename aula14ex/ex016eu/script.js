function contar() {
    var finicio = window.document.getElementById('ninicio')
    var ffim = window.document.getElementById('nfim')
    var fpasso = window.document.getElementById('npasso')
    var contar = window.document.getElementById('res')
    var final = window.document.getElementById('fim')

    var inicio = Number(finicio.value)
    var fim = Number(ffim.value)
    var passo = Number(fpasso.value)

    for (var n = inicio; n <= fim; n = n + passo) {
        
        contar.innerHTML = `Passo ${n}`
       // document.write(`Passo ${n} 👉` )
    }
    final.innerHTML = 'FIM!'
    // document.write('FIM!')
    

}