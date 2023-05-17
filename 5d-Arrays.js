const arrays = () => {
    console.clear();

    const a = [0, 1, 2, 'a', true]
    const b = [3, 2, 4, 5, 1]
    const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
    // console.log({ a })


    // PUSH

    a.push('x')
    // console.log('push:', a)


    // POP

    a.pop()
    // console.log('pop:', a)



    // UNSHIFT

    a.unshift('y')
    // console.log('unshift:', a)



    // SHIFT

    a.shift()
    // console.log('shift:', a)

    const z = []



    // FOREACH

    const x = a.forEach((item) => z.push(item * 3))
    // console.log('x:', x)
    // console.log({ a })
    // console.log({ z })



    // MAP

    const map = a.map(item => item * 5)
    // console.log(map)
    // console.log({ y })


    const p1 = { name: 'juan', age: 12 }
    const p2 = { name: 'jorge', age: 18 }
    const p3 = { name: 'susana', age: 22 }
    const p4 = { name: 'sandra', age: 25 }

    const personas = [p1, p2, p3, p4]



    // FIND

    const find = personas.find(value => value.age < 18)
    console.log(find)



    // FILTER

    const filter = personas.filter(persona => {
        return persona.age >= 18
    })
    console.log(filter)




    // REDUCE

    const arrayReduce = [1, 1, 2, 3, 4, 5, 6, 7, 8]

    const reduce = personas.reduce((accum, persona, indice) => {
        // console.log({ indice, accum, edad: persona.age })
        return accum + persona.age
    }, 0)
    console.log({ reduce })

    console.log(arrayReduce.at())



    // SORT

    // const b = [3, 2, 4, 5, 1]
    // console.log(b.sort())

    const sortMaxMin = b.sort((a, b) => a < b ? 1 : -1)
    console.log(sortMaxMin)

    // const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
    // const sortMinMax = c.sort((a, b) => a > b ? 1 : -1)
    // console.log(sortMinMax)
    // const ordenado = c.toSorted()





    // SOME

    const some = personas.some(persona => persona.name === 'juan')
    console.log(some)




    // EVERY

    const every = a.every(value => typeof value != 'object')
    console.log(every)



    // CONCAT

    const concat = a.concat(b)
    console.log(concat)



    // INCLUDES

    const includes = a.includes(3)
    console.log(includes)




    // JOIN

    const join = a.join('')
    // console.log(join)
    // console.log(a.join('-'))



    // SPLIT

    const split = join.split('1')
    // console.log(split)



    // ARRAY.FROM()

    const from = Array.from(join)
    // console.log({ from })



    // INDEXOF

    const index = a.indexOf('a')
    console.log(a[index])



    // FINDINDEX

    const findIndex = a.findIndex(value => value === 'a')
    console.log(findIndex)



    // SLICE

    const slice = a.slice(1, 3)
    console.log(slice)

    console.log(a.slice(3))
    console.log({ a })



    // SPLICE

    // const a = [0, 1, 2, 'a', true]
    a.splice(2, 2, 'sol')
    console.log(a)



    // FLAT

    const xx = [1, 2, 3, ['a', 'b', 'c']]
    console.log(xx.flat())

}




