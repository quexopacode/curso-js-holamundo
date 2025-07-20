function dividePorTipo(arr){
    //Manera larga
    // let obj = {
    //     string: [],
    //     number: [],
    //     boolean: [],
    //     object: [],
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'string') {
    //         obj.string.push(arr[i]);
    //     } else if (typeof arr[i] === 'number') {
    //         obj.number.push(arr[i]);
    //     } else if (typeof arr[i] === 'boolean') {
    //         obj.boolean.push(arr[i]);
    //     } else if (typeof arr[i] === 'object') {
    //             obj.object.push(arr[i]);
    //     }
    // }
    // return obj;

    return arr.reduce((acumulador, elemento) => {
        let llave = typeof elemento; //string, number, boolean, object
        acumulador[llave] = acumulador[llave] ? acumulador[llave]: []; // si existe la llave, se le agrega el elemento, si no, se crea un arreglo con el elemento
        acumulador[llave].push(elemento); // se agrega el elemento al arreglo
        return acumulador;
    }, {}// se le pasa el objeto vacio para que el acumulador sea un objeto
    );// fin reduce function
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 1},
    ['lala'],
]

let arr = dividePorTipo(miArray);
console.log(arr);