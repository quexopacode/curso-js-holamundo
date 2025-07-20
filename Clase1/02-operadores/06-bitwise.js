//bit: 0 1
//Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1  
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7

//Decimal: 0 1 2 3 4 5 6 7 8 9 
//Binario: 0 1

//Toma los numeros y los convierte a binario y solo captura los 1
console.log(1 | 3); 
console.log(1 | 4); 
console.log(3 | 5); 

//Toma los numeros y los convierte a binario y solo captura compara que todos sean 1, solo quedan estos
console.log(1 & 3); 
console.log(1 & 4); 
console.log(3 & 5); 

