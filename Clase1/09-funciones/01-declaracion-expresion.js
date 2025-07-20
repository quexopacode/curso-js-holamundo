//Declaracion de funcioens: function declaration

console.log(suma);
// funcion nombrada -> nombre de function
function suma() {
    console.log("sumando....");
}

// funcion anonima -> no tiene nombre
// function () {
//     console.log("funcion anonima....");
// }


//se le asigna a resta la funcion anonima
// se puede usar let o const
let resta = function () {
    console.log("restando....");
}

//se le asigna a multiplica la funcion nombrada
const multiplica = function multi() {
    console.log("multiplicando....");
}

const divide = () => { //esta es una funcion anonima
    console.log("dividiendo....");
}

console.log(suma);
console.log(resta);
console.log(multiplica);
console.log(divide);