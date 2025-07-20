//AND, OR , NOT

//AND &&

console.log(true && true); //ambas deben ser true para retonar true
console.log(true && false); //una de las dos debe ser false para retornar false
console.log(false && true); //una de las dos debe ser false para retornar false
console.log(false && false); //ambas deben ser false para retornar false


let mayor = false;
let suscrito = true;
console.log('operador and', mayor && suscrito); 

//OR ||
console.log('operador or', mayor || suscrito); //una de las dos debe ser true para retornar true


//NOT !
console.log('operador not', !mayor); //cambia el valor de la variable a su contrario
console.log('operador not', !suscrito); //cambia el valor de la variable a su contrario

let soloCatalogoInfantil = !mayor;
console.log('catalogoInfantil', soloCatalogoInfantil);