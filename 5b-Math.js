const math = () => {

    const pi = Math.PI
    console.log(pi)

    const x = 3.2
    const y = 3.7

    // Round
    const round = Math.round(pi)
    console.log(round) // 3

    console.log('x:', Math.round(x)) // 3
    console.log('y:', Math.round(y)) // 4

    // Ceil
    const ceil = Math.ceil(pi)
    console.log(ceil) // 4

    console.log('x:', Math.ceil(x)) // 4
    console.log('y:', Math.ceil(y)) // 4

    // Floor
    const floor = Math.floor(pi)
    console.log(floor) // 3

    console.log('x:', Math.floor(x)) // 3
    console.log('y:', Math.floor(y)) // 3

    // Trunc
    const trunc = Math.trunc(pi)
    console.log(trunc) // 3

    console.log('x:', Math.trunc(x)) // 3
    console.log('y:', Math.trunc(y)) // 3

    // Random
    const random = Math.random()
    console.log(random)

    // Random del 0 al 10
    const hasta10 = random * 10
    console.log('Del 0 al 10:', Math.trunc(hasta10))

    console.clear();
    // Random del 10 al 30
    const max = 30
    const min = 10
    const del10al30 = random * (max - min) + min
    console.log(`valor aleatorio entre ${min} y ${max}`, Math.trunc(del10al30))
}

math()