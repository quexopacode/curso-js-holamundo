// function hola() {
//     return 'Hola Mundo';
// };

const hola = () =>'Hola Mundo';
// fat arrow function o arrow function
//es una funcion anonima que se asigna a una variable/constante
//y se puede llamar con el nombre de la variable/constante
// en caso de que sea una sola linea de codigo se puede omitir las llaves
// sino se deben de poner las llaves y el return

let resultado = hola();
console.log(resultado);


const mensaje = nombre => `Hola ${nombre}`;
// en caso de tener menos de 1 parametro no se deben poner los ()
// en caso de tener mas de 1 parametro se deben de poner los ()
console.log(mensaje('Juan'));


const hola2 = (nombre, apellido) => `Hola ${nombre} ${apellido}`;
console.log(hola2('Juan', 'Perez'));