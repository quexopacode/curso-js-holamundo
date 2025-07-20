//short-circuit

//Falso o conocidos como Falsy
// false
// 0
// null
// NaN
// undefined
// ''
let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';
console.log(username, 'con ||');

function fn1() {
    console.log('Hola soy la funcion 1');
    return false;
}

function fn2() {
    console.log('Hola soy la funcion 2');
    return true;
}   

let x = fn1() && fn2(); //si la primera funcion es falsa no ejecuta la segunda