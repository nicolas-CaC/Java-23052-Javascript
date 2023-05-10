console.clear();

const a = [0, 1, 2, 'a', true]
const b = [3, 2, 4, 5, 1]
const c = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']
console.log({ a })

a.push('x')
console.log('push:', a)

a.pop()
console.log('pop:', a)

a.unshift('y')
console.log('unshift:', a)

a.shift()
console.log('shift:', a)

const z = []

const x = a.forEach((item) => z.push(item * 3))
console.log('x:', x)
console.log({ a })
console.log({ z })

console.clear();


const y = a.map(item => item * 5)
console.log({ a })
console.log({ y })




