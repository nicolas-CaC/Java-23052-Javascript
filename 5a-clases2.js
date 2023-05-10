const clasesExtends = () => {

    class Padre {

        #apellido

        constructor(apellido) {
            this.#apellido = apellido
        }

        getApellido = () => console.log('El apellido es', this.#apellido)
    }


    class Hijo extends Padre {

        #nombre

        constructor(nombre, apellido) {
            super(apellido)
            this.#nombre = nombre
        }

        getNombre = () => console.log(this.#nombre)
    }


    const persona = new Padre('Perez')
    console.log(persona)
    persona.getApellido()

    const hijo = new Hijo('Juan', 'Perez')
    console.log(hijo)
    hijo.getNombre()
    hijo.getApellido()
}