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




    // con parametros
    function suma(a, b) {
        console.log(a + b)
    }

    suma(234, 456456)


    // args infinitos
    function infinito(...args) {
        for (let i = 0; i < args.length; i++)
            console.log(`args${i}: `, args[i])
    }

    infinito(1, 34, 45645, 'asdfasdf')




    // Funcion generadora

    function* generadora() {
        let i = 1
        yield i + 10

        i = 3
        yield i + 100

        i = 5
        yield i + 1000
    }

    const fnGen = generadora()

    console.log(fnGen.next()) // 11
    console.log(fnGen.next()) // 101
    console.log(fnGen.next()) // 1001
    console.log(fnGen.next()) // undefined




    function* generadora2(nro) {

        let x = nro

        while (nro > 0) {
            yield x++
        }
    }

    const fnGen2 = generadora2(3)

    console.log(fnGen2.next()) // 3
    console.log(fnGen2.next()) // 4
    console.log(fnGen2.next()) // 5
    console.log(fnGen2.next()) // 6
    console.log(fnGen2.next()) // 7
    console.log(fnGen2.next()) // 8
}




