function funciones() {

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





    // Funcion anónima
    const funcion = function () {
        console.log('como andan')
    }
    // console.log(funcion)
    funcion()




    // Función flecha (Arrow Function)
    const funcion2 = () => {
        console.log('como andan2')
    }
    // console.log(funcion2)
    funcion2()





    function funcion3() {
        let a = 3
        let b = 2
        return a + b // 5
    }

    function funcion4() {
        let a = 5
        let b = 8
        return a + b // 13
    }

    // Return implícito
    const funcion5 = () => funcion4()

    let x = funcion3()
    console.log(x) // 5

    console.log(funcion4()) // 13
    console.log('funcion5:', funcion5()) // 13
}




