function sumaTODO(arr){
    if(!Array.isArray(arr)){
        throw new Error('El argumento debe ser un array');
    }
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number'|| Number.isNaN(el)){
            throw new Error(`El elemento ${el} no es un numero`);
        }
        return acc + el;
    });
}

// console.log(sumaTODO([1,2,3,4]));

try {
    console.log(sumaTODO([1,2,3,4]))
} catch (e) {
    console.log(e.message);
}

console.log('Esto de aqui al final despues del trycatch ');
