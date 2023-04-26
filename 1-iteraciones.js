const iteraciones = function () {

    // let numero = prompt('Indicame hasta que nro queres que imprima')

    let a = 'hola'
    let array = [a, 5, 'gato', false]

    // console.log(array[0])
    // console.log(array[1])
    // console.log(array[2])
    // console.log(array[3])

    // for (let i = 0; i <= 50; i++) {
    //     console.log(i)
    // }


    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }



    console.log('\n')

    let i = 0
    while (i < 10) {
        console.log('i en while:', ++i)
    }




    console.log('\n')

    i = 10
    do {
        console.log('i en do:', i)
    } while (i < 10)




    console.log('\n')

    i = 1

    switch (i) {
        case '1':
            console.log('soy un string')
            break
        case 1:
            console.log('soy un numero')
            break
        case 'c':
            console.log('soy una c')
            break
        default:
            console.log('no soy ni una a, b o una c')
            break

    }
    console.log('\n\nsalimos de la iteración')
}