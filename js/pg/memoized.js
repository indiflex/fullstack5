function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    // return memoizedTable[k] || (memoizedTable[k] = fn(k));
    console.log(k, '->  memoizedTable:', memoizedTable);
    if (memoizedTable[k]) {
      return memoizedTable[k];
    } else {
      memoizedTable[k] = fn(k);
      console.log(k, '=> memoizedTable:', memoizedTable);
      return memoizedTable[k];
    }
  };
}

const memoizedFactorial = memoized(function (n) {
  memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

let memoizedFactorialRunCnt = 0;
console.log('3=', memoizedFactorial(3)); // 3
console.log('5=', memoizedFactorial(5)); // 2
console.log(`runCnt=${memoizedFactorialRunCnt}`);
