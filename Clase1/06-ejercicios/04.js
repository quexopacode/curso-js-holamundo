let objeto = {
    id: 1,
    nombre: "Juan",
    login: function (){},
    logout: function (){},
}

//con console.log y almacenando en el arreglo para ver fuera
function cualesMetodos(obj){
    let objeto = [];
    for (let llave in obj){
        if (typeof obj[llave] === "function"){
            console.log(llave);
            objeto.push(llave);
        }
    }
    return objeto;
}

console.log(cualesMetodos(objeto)); 
cualesMetodos(objeto); 