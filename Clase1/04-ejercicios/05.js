// devuelva el numero mayor y menor de un arreglo

let arreglo = [2, 5, 7, 15, -5, -100, 100, 101, -200];
function mayorMenor(arreglo){
    let mayor = arreglo[0];
    let menor = arreglo[0];
    for (numero of arreglo){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = mayorMenor(arreglo);
console.log(numeros); // deberia imprimir [-100, 55]