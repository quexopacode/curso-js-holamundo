const usuarios= [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'Chanchito', plan: 'premium'},
    {edad: 32, nombre: 'Fernando', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function cuantosNoSonFree(usrs){ // cuantos premium
    // let cantidad = 0;   
    // for (let i = 0; i < usrs.length; i++) {
    //     if(usrs[i].plan === 'premium'){
    //         cantidad++;
    //     }
    // };
    // return cantidad;
    return usrs
    .reduce((acumulador, elemento)=> 
        elemento.plan !== 'free' ? acumulador + 1 : acumulador, 0)
};

function cuantosMayores(usrs){ //cuantos usuarios son mayores de edad
    // let cantidad = 0;   
    // for (let i = 0; i < usrs.length; i++) {
    //     if(usrs[i].edad >= 18){
    //         cantidad++;
    //     }
    // };
    // return cantidad;
    return usrs
    .reduce((acumulador, elemento)=>
        elemento.edad >= 18 ? acumulador + 1 : acumulador, 0)
}

console.log(cuantosNoSonFree(usuarios)); 
console.log(cuantosMayores(usuarios)); 
