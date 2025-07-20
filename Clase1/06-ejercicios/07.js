let objeto = {name: "Luis"};

function agregarId(obj){
    let numero = Math.floor(Math.random() * 1000);
    obj.id = numero;
}

agregarId(objeto);
console.log(objeto);