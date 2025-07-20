// Crear un arreglo de longiutd N y sus elementos tiene que ser de numero 1 hasta N

let longitud = 7;

function crearArreglo(longitud){
    if(longitud <= 0){
        return 'Longitud no valida';
    };
    let arreglo = [];
    for(let i=1; i <=longitud; i++){
        arreglo.push(i);
    }
    return arreglo;
}

let resultado = crearArreglo(longitud);
console.log(resultado);