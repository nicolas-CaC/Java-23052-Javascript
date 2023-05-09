const fabricaObjetos = () => {

    function Objeto(numero, cadena, booleano) {
        this.numero = numero
        this.nombre = cadena
        this.booleano = booleano
        this.funcion = () => console.log('holis')
        this.array = [1, 3, 2]
        this.objeto = { a: 1, b: 2 }
    }

    const objeto = new Objeto(123, 'José', true)

    console.log(objeto)
    console.log('El nombre es', objeto.nombre)
    objeto.funcion()
    console.log(objeto.array)
    console.log(objeto.objeto)
}