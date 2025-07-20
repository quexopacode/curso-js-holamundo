const saludo = 'Hola, \\mundo! \n bienvenidos a\t \"ultimatejavascript\"';

const nombre = 'Luis';
const apellido = 'Murcia';
const nombreCompleto = nombre + ' ' + apellido;
function plantilla(name) {return`Hola ${name}! 
Bienvenidos a "ultimatejavascript :)

Cariños Nico"`};
console.log(plantilla(nombreCompleto));