function sumar(fn, ...rest){
    fn(rest.reduce((a, b) => a + b, 0));
}

sumar(resultado => console.log(resultado), 1, 2, 3, 4);