function createUsuario(name){
    return {
        id: Math.random(),
        name,
    }
}

let usuario = createUsuario('Juan');
let usuario2 = createUsuario('Pepe');
console.log(usuario, usuario2);