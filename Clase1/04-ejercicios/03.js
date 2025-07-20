function getbyIDX(arr, idx) {
    // if (idx < 0) {
    //     return "No puedes poner un indice menor a 0";
    // }
    // if (idx >= arr.length) {
    //     return "No puedes poner un indice mayor al tamaño del array";
    // } 
    if (idx < 0 || idx >= arr.length) {
        return "El elemento no existe";
    }
    return arr[idx];
}

let resultado = getbyIDX([1,2], 0)
console.log(resultado);