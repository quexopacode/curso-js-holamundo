const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando');
    }
};


// delete punto.dibujar;
if('dibujar' in punto) {
    punto.dibujar();
}

// let keys = Object.keys(punto);
console.log(Object.keys(punto));
 

//metodos de clase Object  keys y entries
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
    console.log(entry); 
}

for (let llave in punto) {
    console.log(llave, punto[llave]);
}//esta funciones es mas nueva
