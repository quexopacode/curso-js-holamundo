// Dentro de un objeto :this hace referencia al objeto
// En una funcion this hace referncia al objeto windows, global
// Si se usa new this hace referencia al objeto que se esta creando

// const usuario ={
//     name: 'Nicolas',
//     login(){
//         console.log(this);
//     }
// };

// usuario.logout = function logout(){
//     console.log(this);
// }

// usuario.login();
// usuario.logout();



//2 metodo 

// function log(){
//     console.log(this);
// };


// log(); // window

function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
};


/*
    Se crea un ibjeto literal
    se vincula este objeto a this
    se vincula el prototipo
    si no retorna nada, entonces retorna this
*/


const l = new Log('Hola mundo'); // Log {mensaje: 'Hola mundo'}