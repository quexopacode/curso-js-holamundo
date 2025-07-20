const usuarios = [
    {edad: 17, nombre: 'Nico'},
    {edad: 13, nombre: 'Chanchito'},
    {edad: 25, nombre: 'Felipe'},
    {edad: 32, nombre: 'Fernanda'},
];

// // u => u.nombre se almacena en lista como arreglos los nombres de los usuarios
// const lista = usuarios.map(u => u.nombre);
// console.log(lista);

// //
// const lista2 = usuarios.map(u => `<li> ${u.nombre}</li>`);
// const html = `<ol>${lista2.join('')}</ol>`;
// console.log(lista2);
// console.log(html);

// //
// const listaMayores = usuarios.map(u => ({
//         ...u,
//         mayor: u.edad >17,})
// );
// console.log(listaMayores);  

const lista2 = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li> ${u.nombre}</li>`);

const html = `<ol>${lista2.join('')}</ol>`;
console.log(lista2);
console.log(html);