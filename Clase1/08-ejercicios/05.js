const usuarios= [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'Chanchito', plan: 'premium'},
    {edad: 32, nombre: 'Fernanda', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function obtenerMayor(arr){
    // la primera opcion seria iterarlos todos con for of y compararlos
    // let mayor = arr[0];
    // for (let usuario of arr){
    //     if(mayor.edad < usuario.edad){
    //         mayor = usuario;
    //     }
    // }
    // return mayor;

    //las 2 maneras de hacerlo con funcion .reduce 
    return arr
    .reduce((mayor, usuario)=> 
        (mayor.edad > usuario.edad ?
            mayor : usuario), arr[0] // se le pasa el primer elemento del array para que lo tome como el mayor
        );
}

const mayor= obtenerMayor(usuarios);
console.log(mayor);