let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
// console.log(combinados, arr1, arr2); 

let divididos = combinados.slice(combinados.length/2);
let divididos2 = combinados.slice(0, combinados.length/2);

console.log(divididos); 
console.log(divididos2);