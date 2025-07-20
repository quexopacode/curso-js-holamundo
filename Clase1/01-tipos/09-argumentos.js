function suma(a, b){
    console.log(arguments); //arguments es un objeto que contiene todos los argumentos que se le pasan a la funcion
    return a+b; //parametros cuando se les declara
}

let resultado = suma(5, 6, 1, 2, 3); //argumentos cuando se les pasan
console.log(resultado);
console.log(typeof suma);
