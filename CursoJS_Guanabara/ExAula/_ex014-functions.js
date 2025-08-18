function parimp(n) {
    if (n % 2 == 0) {
        return console.log(`${n} é par`)
    } else if (n == 0) {
        return console.log(`${n} é zero`)
    } else {
        return console.log(`${n} é ímpar`)
    }
}

function soma(n1=0, n2=0) { //Aqui se eu não passar o n1, ele vai considerar igual a zero
    return console.log(n1 + n2)
}

let v = function(x) {
    return x*2
}
console.log(v(5))

//FATORIAL
function fatorial(num) {
    let fat = 1
    for(c = num; c > 1; c -= 1) {
        fat *= c 
    }
    return fat
}

console.log(fatorial(5))


soma(3, 5)
parimp(8)
soma()