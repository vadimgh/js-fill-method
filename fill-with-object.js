const obj = {};

const array = [1, 2, 3, 4];

array.fill(obj);

console.log(array);

console.log(array.every(el => el === obj));