function tabuada() {
    var numtxt = document.querySelector("input#num")
    var tab = document.querySelector("select#seltab")
    //estrutura pra bloquear se o valor for zero:
    if (numtxt.value == 0) {
        window.alert("Por favor, digite um número.")
} else {
    var num = Number(numtxt.value)
    var c = 1
    tab.innerHTML = " " //essa linha faz com que sempre que já tenha uma tabuada lá, ela seja limpada
    while (c <= 10) {
        var item = document.createElement("option") //aqui o elemento foi criado
        item.text = `${num} x ${c} = ${num * c}` //configurado, mas não adicionado, de fato ao HTMl
        tab.appendChild(item) //só com esse comando ele é ,de fato, adicionado
        c++ //isso é igual a: c += 1
    }
}
}