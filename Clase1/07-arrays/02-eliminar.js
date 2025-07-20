const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// Eliminar el ultimo elemento
// const final = letras.pop();
// // console.log(final); 
// // console.log(letras); 

// Eliminar el primer elemento
// const inicio = letras.shift();
// console.log(inicio);
// console.log(letras);

// Eliminar elementos intermedios
const intermedio = letras.splice(1, (letras.length/2));
console.log(intermedio);
console.log(letras);