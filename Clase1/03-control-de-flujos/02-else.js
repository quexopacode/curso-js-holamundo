/* if (condicion){ si se cumple ejecuta estas expresiones
    expresion 1
    expresion 2
    expresion 3
}  else { sino se cumple la primera ejecuta estas expresiones
    expresion 4
    expresion 5
    expresion 6
}
*/

let edad = 15;
if (edad > 17){
    console.log("Eres un usuario mayor de edad");
} else if(edad>13){
    console.log("Eres un usuario adolescente, necesita estar acompañado de sus padres");
} else {
    console.log("Eres un usuario menor de edad");
}