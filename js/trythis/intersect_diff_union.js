const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (arr1, arr2) => [
  ...new Set(arr1.filter(a => arr2.includes(a))),
];
const diff = (arr1, arr2) => [...new Set(arr1.filter(a => !arr2.includes(a)))];

const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(intersect(A, B)); // [1, 3, 5]
console.log(intersect(A, C)); // [3, 4]
console.log('-------------------');
console.log(diff(A, B)); // [2, 4]
console.log(diff(B, A)); // [22, 44]
console.log(diff(A, C)); // [1, 2, 5]
console.log(diff(B, C)); // [1, 22, 44, 5]
console.log('-------------------');
console.log(union(A, B)); // [1, 2, 3, 4, 5, 22, 44]
console.log(union(A, C)); // [1, 2, 3, 4, 5, 11, 222, 555]
