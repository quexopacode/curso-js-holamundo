// Ejercicio devuelva un array de objeto en base a pares

let array = [
    {id: 1,
    name: "Nicolas"},
    {id: 2,
    name: "Felipe"},
    {id: 3,
    name: "Chanchito"},
];
let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Chanchito"}],
]

function toCollection(arr){
    let collection = [];
    for (indice in arr){
        let elemento = arr[indice];
        collection[indice] = elemento[1];
        collection[indice].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pares);
console.log(resultado);