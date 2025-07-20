function paraAbsoluto(arr){
    return arr.map((n) => Math.abs(n))// returna el valor absoluto de n
};

const ns = [-2,3,5,-15];

const absoluto = paraAbsoluto(ns);
console.log(absoluto); 