let usuarios = [
    {id: 1, activo:false},
    {id: 2, activo:false},
    {id: 3, activo:true},
];

// hasta que encuentre un falso y deja de ejecutar
// let todosActivos = usuarios.every(u => {
//     console.log('todos activos', u.id);
//     return u.activo;
// });
// console.log(todosActivos);


// hasta que encuentre un true y deja de ejecutar
let algunoActivo = usuarios.some(u => {
    console.log('alguno activo', u.id);
    return u.activo;
});
console.log(algunoActivo);