let obj = {};
let objeto2 = new Object();
/**
 * new Array(); []
 * new String(); ''
 * new Number(); 0
 * new Boolean(); false true
 */

function Usuario (){
    this.nombre = 'Chanchito Feliz';
}

let user = new Usuario();
console.log(user.constructor);


const s1 = "1 +1";
const s2 = new String("1 +1");
console.log(s2.valueOf());


