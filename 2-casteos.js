function casteos() {

    let a = 0;
    let b = "hola";
    let c = true;

    if ('0' === a) {
        console.log('son iguales')
    }

    console.log(a) // 0

    // Casting: Cadenas

    a = a.toString();
    console.log(a + 2) // 02
    a = '5'

    c = c.toString();
    console.log(c)

    // Casting: Números

    a = Number(a) // 5
    console.log(a + 2) // 7

    a = '3'
    console.log(typeof a) // string

    a = parseInt(a) // 3
    console.log(typeof a) // number

    console.log('\n')

    a = '3.4'
    a = Number(a)
    console.log({ a })
    console.log(typeof a) // number

    a = a.toString()
    console.log(a)
    console.log(typeof a) // string

    a = parseFloat(a)
    console.log(a)
    console.log(typeof a)

    a = parseInt(a)
    console.log(a)

    // Casting: Booleanos

    console.log('\n')

    c = true
    console.log(c)

    a = 5
    c = Boolean(a)
    console.log(c)

}
