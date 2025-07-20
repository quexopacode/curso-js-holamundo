// Personaje TV
let nombre = 'Tanjiro';
let anime = 'Kimetsu no Yaiba';
let edad = 15;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.anime = 'Demon Slayer';
personaje['edad'] = 15;

let llave = 'nombre';
personaje[llave] = 'Kamado Tanjiro';

delete personaje.anime;
console.log(personaje);