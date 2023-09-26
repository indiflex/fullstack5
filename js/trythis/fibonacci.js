// 1. loop
// 2. recursive function
// 3. memoized function

function fibo(n) {
  const arr = [0, 1];
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) arr[i] = arr[i - 2] + arr[i - 1];

  return arr[n];
}

console.time('LOOP');
console.log(fibo(3));
console.log(fibo(15));
console.log(fibo(100000));
console.timeEnd('LOOP');
console.log('------------------');

let rcnt = 0;
function fiboR(n) {
  rcnt += 1;
  if (n <= 1) return n;
  return fiboR(n - 2) + fiboR(n - 1);
}

// console.time('RECUR');
// console.log(fiboR(3));
// console.log(fiboR(15));
// console.log(fiboR(30));
// console.timeEnd('RECUR');
// console.log('------------------', rcnt);

let mcnt = 0;
const memoFibo = memoized(function (n) {
  mcnt += 1;
  if (n <= 1) return n;
  return memoFibo(n - 2) + memoFibo(n - 1);
});

console.time('MemoFIBO');
console.log(memoFibo(3));
console.log(memoFibo(15));
console.log(memoFibo(100000));
console.timeEnd('MemoFIBO');
console.log('------------------', mcnt);

function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

console.log('=============================');

function fiboArray(n) {
  const arr = [0, 1];
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) arr[i] = arr[i - 2] + arr[i - 1];

  const rets = [];
  for (let i = 0; i <= n; i += 1) rets[i] = arr[i];
  return rets;
}
console.log(fiboArray(3));
console.log(fiboArray(5));

console.log('=============================');
function fiboCachedArray() {
  const cachedArray = [0, 1]; // [0, 1, 1, 2, 3, 5]

  return function (n) {
    if (cachedArray.length <= n) {
      for (let i = cachedArray.length; i <= n; i++)
        cachedArray[i] = cachedArray[i - 2] + cachedArray[i - 1];
    }

    const rets = [];
    for (let i = 0; i <= n; i += 1) rets[i] = cachedArray[i];
    return rets;
    // return cachedArray.slice(0, n + 1);
  };
}

const fibonacciX = fiboCachedArray();
console.log(fibonacciX(3));
console.log(fibonacciX(5));
console.log(fibonacciX(7));
console.log(fibonacciX(2));
