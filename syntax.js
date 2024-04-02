const actions = ['rest', 'watch', 'read', 'walk'];

actions.fill('code', 2, 4);

console.log(actions);

actions.fill('work', 2);

console.log(actions);

actions.fill('hanging out');

console.log(actions);

const array = new Array(5).fill(5);

console.log(array);