function operadores() {

    // Operadores unarios

    let a = 1;
    console.log(a++)
    console.log(a++)

    let b = a // a = b = 3
    console.log(b)

    // !a

    // Operadores binarios

    let c = a + b // 6
    console.log(c)

    // c = c + a
    c += a // 9
    console.log(c)

    // Operadores ternarios

    // if (c === 9) 
    //     console.log('es igual a 9') 
    // else console.log('da otra cosa')

    c === 9
        ? console.log('es igual a 9')
        : console.log('da otra cosa')

    let c9 = c === 9
    console.log({ c9 }) //

    c9
        ? console.log('es igual a 9')
        : console.log('da otra cosa')
}

