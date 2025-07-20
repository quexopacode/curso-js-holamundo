const usuario = {
    nombre: "Chanchito",
    apellido: "Feliz",
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(nuevoNombre) {
        const [nuevoNom, nuevoApellido] = nuevoNombre.split(" ");
        this.nombre = nuevoNom;
        this.apellido = nuevoApellido;
    }
};

usuario.nombreCompleto = "Hola Mundo"; // No se puede modificar sin un setter
console.log(usuario.nombreCompleto);