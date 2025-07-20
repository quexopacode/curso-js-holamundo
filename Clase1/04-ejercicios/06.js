// Devuelva un array de numeros positivos

let arreglo = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arreglo){
    let contador = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > 0){
            contador++;
        }
    }
    return contador;
}

let resultado = cuantosPositivos(arreglo);
console.log(resultado); 