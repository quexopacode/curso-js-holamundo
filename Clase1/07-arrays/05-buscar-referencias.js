const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
];

const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' }); 
console.log(resultado);

const resultado2 = usuarios.find(usuario => usuario.name === 'Chanchito');
const resultado3 = usuarios.findIndex(usuario => usuario.name === 'Chanchito');
console.log(resultado2);
console.log(resultado3);