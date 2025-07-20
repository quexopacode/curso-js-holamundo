
const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'Hola mundo',
        numero: 80,
    }
}

const configuracion = [
    'https://holamundo.io',
    145,
    80,
]

function webserver([url, bucket, port]){
    return url;
}
console.log(webserver(configuracion));


function webserver2(config){
    const {url, ...rest} = config;
    console.log(rest);
    return url;
}
console.log(webserver2(config));

// function webserver({url, direccion: {calle}}){
//     // const {url} = config;
//     console.log(calle);
//     return url;
// }

// console.log( webserver(config) );
// console.log( webserver({url: 'https://holamundo.io'}) );