function Usuario(){
    let id =1;
    this.nombre = "Luis";
    let log = function(){
        console.log(id);
        console.log("logging...");
    }
    this.guardar = function(){
        log();
        console.log("guardando...");
    }
}

const usuario = new Usuario();
usuario.guardar();