function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert("[ERRO]Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(formAno.value)
        res.innerHTML = `Idade calculada: ${idade}`        
    }
}