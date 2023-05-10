function clases() {

    class Empleado {

        // Campos estáticos
        static id = 0
        static sector = 'IT'
        static empleados = []

        // Campos privados
        #nombre
        #dev

        constructor(nombre, edad, dev) {

            this.edad = edad
            this.sector = Empleado.sector
            this.id = ++Empleado.id

            this.#nombre = nombre
            this.#dev = dev ? 'si' : 'no'

            Empleado.empleados.push(nombre)
        }

        // Metodos estaticos

        static getEmpleados() {
            console.log('Cantidad de empleados registrados:', Empleado.empleados)
        }

        // Metodos

        metodo() {
            console.log('soy un metodo')
        }

        saludo = () =>
            console.log('hola, soy', this.#nombre)

        multiplicarEdad() {
            this.edad *= 2
            console.log(`La edad de ${this.#nombre} fue multiplicada.`)
        }

        #getDev = () =>
            this.#dev === 'si'
                ? `${this.#nombre} sí es desarrollador`
                : `${this.#nombre} no es desarrollador`

        oficio = () => console.log(this.#getDev())

        // Getter & Setter
        get getNombre() { return this.#nombre }
        set setNombre(nombre) { this.#nombre = nombre }

    }

    const juan = new Empleado('Juan', 30, true)
    console.log(juan)
    console.log('id:', Empleado.id)

    const jose = new Empleado('Jose', 20, false)
    console.log(jose)
    console.log('id:', Empleado.id)


    juan.metodo()
    juan.saludo()

    jose.saludo()
    jose.multiplicarEdad()
    console.log(jose)

    const juana = new Empleado('Juana', 25, true)

    Empleado.getEmpleados()

    // get
    const nombreJuan = juan.getNombre
    console.log('Nombre Juan:', nombreJuan)

    // set
    juan.setNombre = 'Juancito'
    console.log(juan)

    // método público que dentro suyo tiene un método privado
    juan.oficio()
    jose.oficio()
}