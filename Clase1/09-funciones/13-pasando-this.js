// (function saludar(...rest) {
//   console.log(this, rest);
// }).bind({propiedad: 'hola mundo'})(3,5);

// // Call hay que pasarlos uno a uno
// saludar.call({propiedad: 'hola mundo'},1,5);


// // Apply hay que agruparlos
// saludar.apply({propiedad: 'hola mundo'},[1,5]);


// // Bind devuelve una nueva función
// saludar.bind({propiedad: 'hola mundo'})(3,5);

const usuario ={
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(function (ciudadania){
                console.log(this.nombre, ciudadania);
            }, this);
    },
};

usuario.mostrarCiudadanias();