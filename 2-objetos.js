function objetos() {

    const pikachu = {
        color: 'amarillo',
        ojos: 2,
        poder: 'trueno',
        esPlastico: true,
        serie: 'Pokemon'
    }

    const juan = {
        pelo: 'negro',
        edad: 23,
        estadoCivil: 'soltero',
        hijos: true
    }

    console.log(pikachu)
    console.log(juan)

    let peloJuan = juan.pelo
    console.log({ peloJuan })


    if (juan.edad < 18)
        console.log('Juan es menor de edad')
    else
        console.log('Juan es mayor de edad')


    let ab = juan['estadoCivil']
    console.log({ ab })

    if (juan.hijos) {
        juan.cantidadHijos = Number(prompt('Ingrese la cant. de hijos de Juan'))
    }

    juan.miSaludo = () =>
        console.log('Hola soy Juan')

    // Funciones con Parámetros
    juan.saludo = (nombre) =>
        console.log(`Hola ${nombre}!, como estas?`)


    console.log(juan)
    juan.miSaludo()
    juan.saludo('Miguel')


    function infinito(...args) {
        for (let i = 0; i < args.length; i++)
            console.log(`args${i}: `, args[i])
    }

    function funcionArray(array) {
        for (let i = 0; i < array.length; i++)
            console.log(`funcionArray (posicion ${i}): `, array[i])
    }

    const conjuntoDeObjetos = [juan, pikachu]

    funcionArray(conjuntoDeObjetos)

    console.log(`${conjuntoDeObjetos[0].estadoCivil}`)
}
