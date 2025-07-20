// {id: 1, recuperarClave: function(){} }
function Usuario(){
    this.id =1;
    this.recuperarClave = function(){ // no se llaman funciones sino metodos
        // los metodos son funciones que pertenecen a un objeto
        console.log('Recuperando clave');
    }
}

let usuario = new Usuario();
console.log(usuario);