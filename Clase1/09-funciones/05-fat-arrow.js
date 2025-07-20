const suma = (a, b) => {
    return Array.from(arguments)
    .reduce((acc, val) => acc + val);
}

console.log(suma(1, 2, 3, 4, 5)); // 15