console.clear();

// Tipos y funciones

let variable = 'aaa';
const constante = 'bbb';

console.log(variable)
variable = 23;
console.log(variable)

variable = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique voluptatum tenetur tempore dicta accusantium dolores consequuntur voluptatibus voluptatem cumque eius perspiciatis, a velit quos! Soluta deleniti nobis officiis error!'

// console.log(variable)

// let edad = prompt('Ingresa tu edad')
// console.warn(edad)
// alert('Soy un alerta')

// console.log(variable)

// ===========================

// Operaciones

let a = 3;
let b = 4;

let suma = a + b
let resta = a - b
let multi = a * b
let division = a / b

console.log({ suma })
console.log({ resta })
console.log({ multi })
console.log({ division })

let resto = 4 % 2

console.log({ resto })

resto = 3 % 2

console.log({ resto })

// =============================

let booleano = true
console.log({ booleano })

booleano = false
console.log({ booleano })

if (a > b) {
    console.log('a')
}
else {
    console.log('b')
}

console.log('holas')
// let a = 3;
// let b = 4;
b = 2

if (a > b) {
    console.log('3 es mayor a 4')
} else if (a === b) {
    console.log('3 es igual a 3')
} else if (a >= b) {
    console.log('3 es mayor a 26')
} else {
    console.log('3 es menor a todos los otros valores')
}

console.log("fin del programa")


b = 5
let c = a > b


if (!c) {
    console.log('Se cumplió el if')
    a = 20
    let d = a * 500
    console.log(d)
}



if (c)
    console.log('a es mayor a b')
else
    console.log(`${a} es menor a ${b}`)


// Operador Ternario
c
    ? console.log('ternario: a es mayor a b')
    : console.log(`ternario: ${a} es menor a ${b}`)

console.log('fin del programa')

// =============================

// Funciones

function funcioncita() {
    console.log('Soy una funcion')
}

function sumaExitosa() {
    console.log('Suma exitosa: Se sumó correctamente')
    console.log('Suma exitosa: Se sumó correctamente otra vez')
    let x = 2
    let y = 6
    console.log('Suma exitosa:', x * y)
    console.log('Suma exitosa: terminé de sumar')
}

function sumaFallida() {
    console.log('SumaFallida: No se pudo sumar')
    console.log('SumaFallida: No se pudo sumar')
    console.log('SumaFallida: No se pudo sumar')
    console.log('SumaFallida: No se pudo sumar')
}

funcioncita()

c = true

console.log(c ? 'Da verdadero' : 'Da falso')

c
    ? sumaExitosa()
    : sumaFallida()
