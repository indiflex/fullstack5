const arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];
const pop = (arr, idx = -1) => arr.slice(idx);
const unshift = (arr, ...args) => [...args, ...arr];
const shift = (arr, idx = 1) => arr.slice(idx);

console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // 4
console.log(pop(arr, 2)); // 2개 팝! ⇒ [3, 4]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]
