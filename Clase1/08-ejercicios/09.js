const usuarios= [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'Chanchito', plan: 'free'},
    {edad: 32, nombre: 'Fernanda', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

const users= [
    {age: 22, name: 'Michael', membership: 'premium'},
    {age: 27, name: 'Kevin', membership: 'free'},
    {age: 29, name: 'Happy pig', membership: 'free'},
];

//Unificar las estructura de usuarios y users en una sola estructura
//Fusionar los arreglos
//Ordenador de mayor a menor por edad
//Crear plantilla html
// <li>Nombre: name, Edad: age</li>
//Imrpimir en consola

const userEspanol = users.map(u=> ({
    edad: u.age,
    nombre: u.name,
    plan: u.membership
}));

const todosUsuarios = [...usuarios, ...userEspanol];
console.log(todosUsuarios);

todosUsuarios.sort((a,b)=> {
    if(a.edad > b.edad){
        return 1;
    }
    if(a.edad < b.edad){
        return -1;
    }
    return 0;   
});
console.log(todosUsuarios);

const lista = todosUsuarios.map(u=>
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

const html =
`<ul>
    ${lista.join('\n\t')}
</ul>`;
console.log(html);