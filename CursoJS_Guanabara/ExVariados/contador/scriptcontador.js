var beginspace = window.document.getElementById("begin")
var endspace = window.document.getElementById("end")
var passospace = window.document.getElementById("passo")
var res = window.document.querySelector("div#res")

function contar() {
    var contagem = ""
    var inicio = Number(beginspace.value)
    var fim = Number(endspace.value)
    var passo = Number(passospace.value)

    for (inicio; inicio <= fim; inicio += passo) {
        contagem += `👉 ${inicio} `
    }
    res.innerHTML = `Contando: <br> ${contagem} 👉🏁`
}

// Esse foi o primeiro exercicio que consegui fazer sozinho em JS, o deepseek me ajudou a corrigir apenas um erro de sitaxe :)