let objeto = {
    id: 1,
    nombre: false,
    login: function (){},
    logout: function (){},
}

let propiedad = 'nombre';

function tieneProp(obj, propiedad){
    //return obj.hasOwnProperty(propiedad);
    let control = false;
    for (let llave in obj){
        if (llave === propiedad){
            control = true;
        }
    }
    return control;
}

console.log(tieneProp(objeto, propiedad)); 