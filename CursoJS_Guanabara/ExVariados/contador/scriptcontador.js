var beginspace = window.document.getElementById("begin")
var endspace = window.document.getElementById("end")
var passospace = window.document.getElementById("passo")
var res = window.document.querySelector("div#res")

function contar() {
    //se algum dos espaços não foi preenchido
    if (beginspace.value.length == 0 || endspace.value.length == 0|| passospace.value.length == 0) {
        window.alert("Preencha corretamente o formulário.")
        res.innerHTML = "Impossível contar!"
    } else {
        var contagem = ""
        var inicio = Number(beginspace.value)
        var fim = Number(endspace.value)
        var passo = Number(passospace.value)
        //consertando o passo <= 0
        if (passo <= 0) {
            window.alert("Passo inválido, considerando passo = 1")
            passo = 1
        }
        if(inicio < fim) {
            //contagem progressiva
            for (inicio; inicio <= fim; inicio += passo) {
                contagem += `👉 ${inicio} `
            } 
        } else {
            //contagem regressiva
            for (inicio; inicio >= fim; inicio -= passo)
                contagem += `👉 ${inicio} `
            }
        res.innerHTML = `Contando: <br> ${contagem} 👉🏁`
    }
}


// Esse foi o primeiro exercicio que consegui fazer sozinho em JS, o deepseek me ajudou a corrigir apenas um erro de sitaxe :)