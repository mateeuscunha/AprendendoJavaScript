let num = [5, 8, 2, 9, 3]

console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

num.sort()
num.push(1)
console.log(num)


var valores = [8, 1, 7, 4, 2, 9]
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} possui valor igual a: ${valores[pos]}`)
// }
// ISSO EQUIVALE A:
for(let pos in valores) { //esse for é especial para objetos e variáveis compostas
    console.log(valores[pos])    
}

//Para entender como localizar elementos dentro de uma var composta acessar: _ex013-varcomposta.js