var lista = document.querySelector("select#list")
var adicionados = []
var res = document.querySelector("div#res")

function soma(array){
    let retorno = 0
    for (let pos = 0; pos < array.length; pos++)
        retorno += array[pos]
    return retorno
}


function adicionar() {
    let space = window.document.getElementById("txtn")
    let number = Number(space.value) // o número que o cara digitou
    // vendo se o número é válido
    if (adicionados.includes(number) || number <= 0 || number > 100) {
        window.alert("Valor inválido ou já adicionado.")
    } else {
        let item = document.createElement("option") // criando o elemento
        item.text = `Valor ${number} adicionado.` // configurando o elemento
        lista.appendChild(item) // adicionando o elemento no HTML
        adicionados.push(number) // adicionando o elemento no array 
    }
    // zerar a caixa
    space.value = ""
    // zerar a resposta
    res.innerHTML = ""
    // deixando selecionado o espaço vazio
    space.focus()
}


function finalizar() {
    let orderadd = adicionados.sort((a,b) => a - b) // ordenando - crescente - o array "adicionados"
    let media = soma(adicionados) / adicionados.length

    // conferindo se não está vazio 
    if (adicionados.length === 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        res.innerHTML = `<p> Ao todo, temos ${adicionados.length} números cadastrados.</p>
        <p> O maior valor informado foi ${orderadd[adicionados.length - 1]} </p>
        <p> O menor valor informado foi ${orderadd[0]}</p>
        <p> Somando todos os valores, temos ${soma(adicionados)}</p>
        <p> A média dos valores digitados é ${media.toFixed(2)}</p>` // para concertar as casas decimais
    }
}