let numeros = [15, 10, -3];
numeros.sort(); // Ordena los elementos de un array alfabéticamente
console.log(numeros); 
let letras = ['z', 'a', 'd'];
console.log(letras);
letras.reverse(); // Invierte el orden de los elementos de un array
console.log(letras);
letras.sort();
console.log(letras);
letras.push('A', 'Z'); // Se añade la letra mayuscúla A al final del array
console.log(letras);
letras.sort(); //Al ser un letra mayuscula en ASCCI tiene menor valor num que las minisculas
console.log(letras);
let conMayuscula = ['Z', 'a', 'd', 'A', 'D'];
console.log(conMayuscula); // Imprime como se guardo
conMayuscula.sort((a,b) =>{
    /**
     * a antes que b => -1
     * b antes que a => 1
     * sison iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();
    if(alower < blower){
        return -1;
    } else if(alower > blower){
        return 1;
    } else {
        return 0;
    };
} )

console.log(conMayuscula);

let usuarios = [{
    edad: 15, nombre: 'Marta' },{
    edad: 25, nombre: 'Juan' },{
    edad: 10, nombre: 'Pepe'},
];
console.log(usuarios);

usuarios.sort((a,b) => {
    if(a.edad < b.edad){
        return -1;
    } else if(a.edad > b.edad){
        return 1;
    } else {
        return 0;
    }
});
console.log(usuarios);