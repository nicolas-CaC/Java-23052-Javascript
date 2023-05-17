const desestructurar = () => {

    const objeto1 = { name: 'juan', edad: 2 }
    const objeto2 = { name: 'marta', edad: 'b' }

    const { name } = objeto1
    console.log(name)


    const funcion = ({ name }) => console.log(name)

    funcion(objeto1)
    funcion(objeto2)

    console.clear();

    const array = [0, 1, 2, 3, 4, 5, 6]
    const [pos1, pos2, , , pos5] = array
    console.log(pos1, pos2, pos5)

    console.log(array)


    const array2 = array
    const arraySpread = [...array]

    array2[8] = 10

    console.log('array2:', array2)
    console.log('array:', array)
    console.log('arraySpread:', arraySpread)

    const objeto3 = { ...objeto1, soltero: true, edad: 25 }
    console.log('objeto3:', objeto3)
}