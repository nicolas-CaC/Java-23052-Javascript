let m = 2
let n = 1

function sumita(numero1, numero2) {
    let vari = numero1 + numero2
    console.log('operacion:', vari)
}

function restita() {
    let vari = m - n
    console.log('operacion:', vari)
}

function conRetorno(numero1, numero2) {
    //...
    let sumaDeNros = numero1 + numero2
    return sumaDeNros
}

sumita(213, 456)

let guardando = conRetorno('conRetorno: HolaMun', 'do')
console.log(guardando)
