let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1,3,4  ,...arr2];
let arr4 = [...arr3];
arr4.pop();

console.log(arr4);
console.log(arr3); 