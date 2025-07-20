// Objetos Factory

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log("Recuperando clave...");
        }
    };
}

let user1 = crearUsuario("Luis Murcia", "luismurcia0106@gmail.com");
let user2 = crearUsuario("Felipe", "felipe@holamundo.com");

console.log(user1, user2);

