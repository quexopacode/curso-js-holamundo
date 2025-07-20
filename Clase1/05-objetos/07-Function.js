function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function() {
    console.log(`Dibujando....`);
  }
}

let punto = {z: 7};
//Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);

console.log(punto); // agregar y aumentar obj que se le pasan al constructor
// const Point = new Function('x', 'y');

// const p = new Punto(1, 2);
// console.log(p);