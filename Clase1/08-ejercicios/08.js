const usuarios= [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'Chanchito', plan: 'free'},
    {edad: 32, nombre: 'Fernanda', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//Obtener los usuarios pago
//Ordenar de mayor a menor edad
//Devolver el nombre del usuario
//Crear plantilla html
//Mostrar en consola
/**
 * <ul>
 * <li>Nombre: Felipe</li>
 * <li>Nombre: Nico</li>
 */

const usuariosPagos = usuarios.filter(usuario => usuario.plan !== 'free');
console.log(usuariosPagos);
usuariosPagos.sort((a, b) => {
    if(a.edad > b.edad){
        return 1;
    }
    if(a.edad < b.edad){
        return -1;
    }
    return 0;
});

const lista = usuariosPagos.map(usuario => `<li>${usuario.nombre}</li>`);
const html = `
<ul>
    ${lista.join('\n\t')}
</ul>`
console.log(html);