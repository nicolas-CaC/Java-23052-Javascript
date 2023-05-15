const funciones2 = () => {

    const patio = () =>
        console.log('Patio Construido')


    const edificio = () => {
        console.log('Edificio construido')
        return (propietario) =>
            console.log('Bienvenido al edificio de', propietario)
    }


    const prepararTerreno = () => {
        patio()
        return edificio()
    }

    const propiedad = () => {

        const inquilinos = []

        const edificioCompletado = prepararTerreno()

        const dueno = prompt('Ingrese el nombre del nuevo dueño:')
        edificioCompletado(dueno)

        return (inquilino) => {
            inquilinos.push(inquilino)
            console.log(inquilinos)

            return inquilinos.length
        }
    }


    // let vendiendoPropiedades = true

    // while (vendiendoPropiedades) {

    //     const nuevaPropiedad = propiedad()

    //     let completo = false

    //     while (!completo) {

    //         const inquilino = prompt('Ingrese el nombre del inquilino')
    //         cantidadInquilinos = nuevaPropiedad(inquilino)

    //         if (cantidadInquilinos >= 5)
    //             completo = true

    //         completo = cantidadInquilinos >= 5
    //     }

    //     completo = false
    //     const seguirVendiendo = prompt('Deseas seguir vendiendo propiedades? (s/n)')

    //     if (seguirVendiendo === 'n')
    //         vendiendoPropiedades = false
    // }

    // console.log('Finalizamos')


    // EJEMPLO CONCRETO

    const closure = (letra) => {

        let i = 0
        console.log(`closure ${letra} creado`)

        return () =>
            console.log(letra, ++i)

    }

    let a = closure('A')
    let b = closure('B')
    let c = closure('C')

    a() // A 1
    a() // A 2
    a() // A 3
    b() // B 1
    b() // B 2
    c() // C 1
    a() // A 4
}