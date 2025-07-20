/**
 * {
 *  url: ...
 *  bucket: amazon S3
 *  port:  80 
 *
 * }
 */
// const config ={
//     url: 'http://holamundo.io',

// }

function configurarAPI(url, bucket = 145, port = 90) {
    return `${url}/${bucket}:${port}`;
}

// console.log(configurarAPI(config));
console.log(configurarAPI('holamundo,io'));