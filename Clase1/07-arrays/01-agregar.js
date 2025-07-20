const letras = ['a', 'b'];
// Agregar un elemento al final del array
letras.push('c', 'd');
console.log(letras); 

letras.unshift('y','z');
console.log(letras);

letras.splice(5, 0, 'ch');
console.log(letras);