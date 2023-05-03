
const booleanValueConversion = (question) => {

    const response = prompt(question).trim().toLowerCase()
    return response === 'si' ? true : false
}

const objetos2 = () => {

    const pelo = prompt('Ingrese el color del pelo')
    const ojos = Number(prompt('Ingrese cantidad de ojos'))

    const goku = {
        pelo,
        ojos,
        casado: booleanValueConversion('Está casado?'),
        documento: booleanValueConversion('Tiene documento?')
    }


    console.log({ goku })
    console.log(goku.ojos + 4)
}