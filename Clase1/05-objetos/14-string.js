const saludo = "Hola Mundo!";

const despedida = new String("Adios Mundo");

saludo.split(" ");
console.log(saludo.length);
console.log(saludo.indexOf("")); //-1 si no existe
console.log(saludo.indexOf("aeou"));
console.log(saludo.includes(" Mundo")); //true o false
console.log(saludo.replace(" Mundo", " Nicolas"), saludo); //true o false
let nuevoSaludo = saludo.replace(" Mundo", " Nicolas");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));
console.log(saludo.substr(5));

const espacios = "    Hola     Mundo!    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());