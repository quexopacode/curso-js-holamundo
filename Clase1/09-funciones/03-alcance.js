let afuera = 'Estoy afuera';

function alcance(){
    afuera = 'Estoy dentro';
    function saludo(){}
    var vieja = 'Ya no usar';
    let variable = 'Hola Mundo';
    const constante = 'Hola Mundo!';
}

console.log(afuera);
alcance();
console.log(afuera);

console.log(saludo);
console.log(vieja);
console.log(variable);
console.log(constante);