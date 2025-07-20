const suma = (a,b,...rest) =>{
    console.log(rest);
}


// suma(1,2,3,4);

function logMsg (desc, ...msgs) {
    for (let msg of msgs){
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'Peticion aceptada', 'socket activo');
let mensajes = ['Error 1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente movil:', ...mensajes);