const arr = [1, 2, 3];

const a1 = arr.concat([4, 5]);
console.log('🚀  a1:', a1);
console.log('🚀  arr:', arr);
const a2 = arr.join(', ');
console.log('🚀  a2:', a2, '::>');

console.dir([...arr.keys()]);
console.dir([...arr.values()]);
