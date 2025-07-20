const ahora = new Date();
// console.log(ahora); 


//Mes dia anio
const fecha = new Date("December 11 1986 14:15 GMT -0300");
// console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
// console.log(fecha2, fecha3);

console.log("Date String",fecha3.toDateString());
console.log("ISO String",fecha3.toISOString());
console.log("Time String",fecha3.toTimeString());

console.log(fecha3.setFullYear(2021));
console.log(fecha3);