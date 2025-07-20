const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 1},
    ['lala'],
]
//numeros, string y objetos
function dividePorTipo(arr){
    // return arr.reduce((acc, el) => {
    //     const tipo = typeof el;
    //     acc[tipo].push(el);
    //     return acc;
    // }, {
    //     string: [],
    //     number: [],
    //     object: [],
    // });
    return {
        numeros: arr.filter(el => typeof el === 'number'),
        cadena: arr.filter(el => typeof el === 'string'),
        objetocs: arr.filter(el => typeof el === 'object'),
    }
}
const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);