const usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Feliz'},
    { edad: 32, nombre: 'Fernandad'},
];

const mayores = usuarios.filter(u => u.edad >17);
const menores = usuarios.filter(u => u.edad <18);
console.log('Estos son mayores',mayores);
console.log('Estos son menor ',menores);