let factoCnt = 0;
function factorial(n) {
  factoCnt += 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

let memoFactoCnt = 0;
function memoized(fn) {
  const memoizedTable = {}; // {3: 6, 5: 120}
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoFactorial = memoized(function (n) {
  memoFactoCnt += 1;
  if (n === 1) return 1;
  return n * memoFactorial(n - 1);
});
console.log(memoFactorial(3)); // 3
console.log(memoFactorial(5)); // 3
console.log(memoFactorial(7)); // 5
console.log(memoFactoCnt);
// console.log('-------------------');
// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factoCnt);
