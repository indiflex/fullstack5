// [5]
// [4, 5] <-- [...makeArray(4),        5]
// [4, 5] <-- [...makeArray(3), 4,     5]
// [4, 5] <-- [...makeArray(2), 3,     4, 5]
// [4, 5] <-- [...makeArray(1), 2,     3, 4, 5]
// [4, 5] <-- [...[1],                 2, 3, 4, 5]

const arr = [];
function ma(n) {
  if (n === 1) {
    arr.push(1);
    return arr.reverse();
  }
  arr.push(n);
  ma(n - 1);
}
ma(5);
console.log(arr);

console.log('-------------------------');
function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
}
console.log(makeArray(10));
console.log(makeArray(5));

console.log('-------------------------');

// 5, [] ===> [5]
// 4, [5] ====> [4, ...acc]
// 3, [4, 5] =====> [3, ...acc]
// 2 , [3,4,5] <-- [2, ...acc]
// 1, [2,3,4,5] <--- [1, ...acc]
function makeArrayTco(n, acc = []) {
  if (n === 1) return [1, ...acc];
  return makeArrayTco(n - 1, [n, ...acc]);
}
console.log(makeArrayTco(10));
console.log(makeArrayTco(5));
