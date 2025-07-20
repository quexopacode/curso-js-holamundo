const usuarios= [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 13, nombre: 'Chanchito', plan: 'free'},
    {edad: 32, nombre: 'Fernanda', plan: 'free'},
    {edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//esta funcion deberia retornar un objeto con los usuarios agrupados por propiedad
function groupBy(arr, propiedad){
    return arr.reduce((acc, el) => { //agrupar segun tipos de propiedad 
        let valor = el[propiedad];
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {})
};

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped }); 

