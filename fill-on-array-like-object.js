const arrayLikeObject = {
  length: 3,
  0: 'one',
  1: 'two',
  2: 'three'
};

Array.prototype.fill.call(arrayLikeObject, 4);

console.log(arrayLikeObject);