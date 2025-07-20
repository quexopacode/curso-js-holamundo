function similares(obj1,obj2){
    let distinto = false;
    for(let llave in obj1){
        if(obj1[llave] !== obj2[llave]){
            distinto = true;
        } 
    }
    return !distinto;
}

let resultado = similares(
    {id:1, name: "Nico"},
    {id:1, name: "Lalo"}
)

console.log(resultado) // true
