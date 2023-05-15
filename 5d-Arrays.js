const arrays = () => {
    console.clear();

    const a = [0, 1, 2, 'a', true]
    const b = [3, 2, 4, 5, 1]
    const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
    // console.log({ a })

    a.push('x')
    // console.log('push:', a)

    a.pop()
    // console.log('pop:', a)

    a.unshift('y')
    // console.log('unshift:', a)

    a.shift()
    // console.log('shift:', a)

    const z = []

    const x = a.forEach((item) => z.push(item * 3))
    // console.log('x:', x)
    // console.log({ a })
    // console.log({ z })

    const map = a.map(item => item * 5)
    // console.log(map)
    // console.log({ y })


    const p1 = { name: 'juan', age: 12 }
    const p2 = { name: 'jorge', age: 18 }
    const p3 = { name: 'susana', age: 22 }
    const p4 = { name: 'sandra', age: 25 }

    const personas = [p1, p2, p3, p4]

    const find = personas.find(value => value.age < 18)
    console.log(find)

    // console.clear();

    const filter = personas.filter(persona => {
        return persona.age >= 18
    })
    console.log(filter)


    const arrayReduce = [1, 1, 2, 3, 4, 5, 6, 7, 8]

    const reduce = personas.reduce((accum, persona, indice) => {
        // console.log({ indice, accum, edad: persona.age })
        return accum + persona.age
    }, 0)
    console.log({ reduce })

    console.log(arrayReduce.at())


    console.clear();

    // const b = [3, 2, 4, 5, 1]
    // console.log(b.sort())

    const sortMaxMin = b.sort((a, b) => a < b ? 1 : -1)
    console.log(sortMaxMin)

    // const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
    // const sortMinMax = c.sort((a, b) => a > b ? 1 : -1)
    // console.log(sortMinMax)
    // const ordenado = c.toSorted()


    console.clear();


    const some = personas.some(persona => persona.name === 'juan')
    console.log(some)


    console.clear();


    const every = a.every(value => typeof value != 'object')
    console.log(every)


    console.clear();


    const concat = a.concat(b)
    console.log(concat)

    console.clear();

    const includes = a.includes(3)
    console.log(includes)


    console.clear();


    const join = a.join('')
    // console.log(join)
    // console.log(a.join('-'))

    const split = join.split('1')
    // console.log(split)

    const from = Array.from(join)
    // console.log({ from })

    const index = a.indexOf('a')
    console.log(a[index])

    const findIndex = a.findIndex(value => value === 'a')
    console.log(findIndex)

    console.clear();


    const slice = a.slice(1, 3)
    console.log(slice)

    console.log(a.slice(3))
    console.log({ a })

    console.clear();


    // const a = [0, 1, 2, 'a', true]
    a.splice(2, 2, 'sol')
    console.log(a)

    console.clear();

    const xx = [1, 2, 3, ['a', 'b', 'c']]
    console.log(xx.flat())


    console.clear();


    const objeto1 = { name: 'juan', edad: 2 }
    const objeto2 = { name: 'marta', edad: 'b' }

    const { name } = objeto1
    console.log(name)

    function ({ name }) {
        name
        name

        name
    }

    const funcion = ({ name }) => console.log(name)

    // funcion(objeto1)
    // funcion(objeto2)

    console.clear();

    const array = [0, 1, 2, 3, 4, 5, 6]
    const [pos1, pos2, , , pos5] = array
    console.log(pos1, pos2, pos5)

    console.log(array)
}




arrays()


