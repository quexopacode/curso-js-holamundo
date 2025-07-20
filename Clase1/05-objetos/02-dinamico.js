const user = { id: 1,};

user.name = 'Luis';
user.guardar = function() {
    console.log('Guardando...', user.name, user.id);
}

user.guardar();
delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1 }); no nos permite modificar ni agregar
const user1 = Object.seal({ id: 1 }); //nos permite modificar las ya creadas
user1.name = 'Luis';
user1.id = 2;
console.log(user1);