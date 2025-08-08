function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pegando o ano real da máquina (linha 2 e 3)
    var formAno = document.querySelector("input#txtano") //input que o usuario digita o ano de nasc
    var res = document.querySelector("div#res") //div que vai mostrar a resposta
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert("[ERRO]Verifique os dados e tente novamente!")
    } else {
        var idade = ano - Number(formAno.value) //calculando a idade do usuario
        var fsex = document.getElementsByName("radsex") //botão de masc ou fem
        var img = document.createElement("img")
        img.setAttribute("id", "foto") //é como criar uma tag de imagem na mão em HTML
        
        var genero = '' //esquema pra ver se marcou masc ou fem
        if (fsex[0].checked){
            genero = "homem"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "fotos/homemcriança.jpg") //estrutura que adiciona a imagem
            } else if (idade < 30){
                //Jovem
                img.setAttribute("src", "fotos/homemjovem.jpg")
            } else if (idade < 60){
                //Adulto
                img.setAttribute("src", "fotos/homemadulto.jpg")
            } else {
                //Idoso
                img.setAttribute("src", "fotos/homemidoso.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "fotos/mulhercriança.jpg")
            } else if (idade < 30){
                //Jovem
                img.setAttribute("src", "fotos/mulherjovem.jpg")
            } else if (idade < 60){
                //Adulto
                img.setAttribute("src", "fotos/mulheradulta.jpg")
            } else {
                //Idoso
                img.setAttribute("src", "fotos/mulheridosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //colocando de fato a tag para aparecer
    }
}