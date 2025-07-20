function suma(a, b) { // a y b son parámetros
    // console.log(arguments);
    // return a + b;

    // arguments es un objeto que tiene todos los argumentos que se le pasan a la función
    return Array.from(arguments)
    .reduce((a, b) => a + b);

    // let result = 0;
    // for (let valor of arguments) {
    //     result += valor;
    // }
    // return result;
}

// console.log(suma(1, 2)); // 3
// console.log(suma(3)); //NaN not a number poruqe no se le paso el segundo argumento
console.log(suma(1,2,3,4)); // 7 porque solo toma los dos primeros argumentos