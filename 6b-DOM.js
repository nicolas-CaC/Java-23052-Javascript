const div = document.getElementsByTagName('div')
div[0].innerText = 'Chau'


const tercerDiv = document.getElementById('tercerDiv')
tercerDiv.innerHTML = '<b class="estilo1">Soy el tercer div</b>'



const clase = document.getElementsByClassName('estilo2')
for (let i = 0; i < clase.length; i++)
    clase[i].className = 'estilo3'


const querySelector = document.querySelector('div')



const querySelectorAll = document.querySelectorAll('div')
querySelectorAll.forEach(div => {
    if (div.className === 'estilo2') {
        div.innerText = 'He sido modificado'
        div.classList.add('estilo3', 'estilo4')
    }
})

const selector = document.querySelector('#tercerDiv')
// console.log(selector)

const selector2 = document.querySelector('.estilo4')
console.log(selector2)


const boton = document.getElementById('boton')

// boton.onclick = () => {
//     const body = document.body
//     body.innerHTML = '<i>Bienvenidos a mi sitio Contacto</i>'
// }

const botonHandleClick = () => {
    const body = document.body
    body.innerHTML = '<i>Bienvenidos a mi sitio Contacto</i>'
}

boton.addEventListener('click', botonHandleClick)

