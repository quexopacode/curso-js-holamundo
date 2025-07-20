// const numeros = [1,2,3,4];
// const suma = numeros.reduce((acumulador,numero)=>{
//     return acumulador + numero;
// },0);
// console.log(suma); 



// const anidado = [ [1,2], 3, [4,5] ];
// //aplanar este array para que quede 1,2,3,4,5
// console.log(anidado);
// const plano = anidado
// .reduce((acum, ele)=> acum.concat(ele), []);
// console.log(plano);

const usuarios = [
    {edad:17, nombre: 'Nico'},
    {edad:13, nombre: 'Chanchito'},
    {edad:25, nombre: 'Felipe'},
    {edad:32, nombre: 'Fernanda'},
];

const indexeado = usuarios
.reduce((acumulador, usuario)=>({
    ...acumulador,
    [usuario.nombre]: usuario,
    
}), {});
console.log(indexeado);