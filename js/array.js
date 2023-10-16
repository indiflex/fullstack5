const arr = [1, 2, 3];

const a1 = arr.concat([4, 5]);
console.log('🚀  a1:', a1);
console.log('🚀  arr:', arr);
const a2 = arr.join(', ');
console.log('🚀  a2:', a2, '::>');

console.dir([...arr.keys()]);
console.dir([...arr.values()]);

console.log(arr.indexOf(2));

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [hong, kim, lee];

console.log(
  'lee=',
  users.findIndex(a => a.id == 3),
  users.find(a => a.id == 3)
);

console.log(Array.prototype);

const arr2 = new Array(3);
const arr3 = Array(3);

console.log(arr2, arr3, arr2 === arr3);

const arr5 = Array(5).fill(0, 1);
arr5[2] = 9;
arr5[4] = 99;
console.log('🚀  arr5:', arr5, arr5.length);

const s = 'abc';
const arr6 = Array.from(arr);
arr6[1] = 666;
console.log('🚀  arr6:', arr6, arr);

function f(a, b) {
  console.log(arguments, Array.isArray(arguments), arguments instanceof Array);
}

f(1, 2);
