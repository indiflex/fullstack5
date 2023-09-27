// 1. loop
// 2. recursive function
// 3. memoized function

function fibonacci(n) {
  const arr = [0, 1];
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) arr[i] = arr[i - 2] + arr[i - 1];

  return arr[n];
}

console.time('LOOP');
console.log(fibonacci(3));
console.log(fibonacci(15));
console.log(fibonacci(5000));
console.timeEnd('LOOP');
console.log('------------------');

let rcnt = 0;
function fibonacciByRecursive(n) {
  rcnt += 1;
  if (n <= 1) return n;
  return fibonacciByRecursive(n - 2) + fibonacciByRecursive(n - 1);
}

// console.time('RECUR');
// console.log(fiboR(3));
// console.log(fiboR(15));
// console.log(fiboR(30));
// console.timeEnd('RECUR');
// console.log('------------------', rcnt);

let mcnt = 0;
const memoizedFibonacci = memoized(function (n) {
  mcnt += 1;
  // console.log('🚀  mcnt:', mcnt);
  if (n <= 1) return n;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

console.time('MemoFIBO');
console.log(memoizedFibonacci(3));
console.log(memoizedFibonacci(15));
console.log(memoizedFibonacci(10000));
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

console.log('================================');

const MAX_CALLABLE = 5000;
function neverFullCallStack(n, fn) {
  for (let i = 1; i < Math.floor(n / MAX_CALLABLE); i += 1) {
    console.log(i, i * MAX_CALLABLE);
    fn(i * MAX_CALLABLE);
  }

  return fn(n);
}

// const nfcs1 = neverFullCallStack(100, memoizedFibonacci);
const nfcs1 = neverFullCallStack(50000, memoizedFibonacci);
console.log('🚀  nfcs1:', nfcs1);
// console.log('org>>', memoizedFibonacci(50000));

function neverFullV1(fn) {
  const maxCallable = 5000;

  return function (n) {
    for (let i = 1; i < Math.floor(n / maxCallable); i += 1) {
      console.log(i, i * maxCallable);
      fn(i * maxCallable);
    }

    return fn(n);
  };
}

function neverFullV2(fn) {
  const maxCallable = 5000;
  let step = 0;
  let n = 0; // 100

  return function A(k) {
    console.log('A=', k);
    if (k < maxCallable || (n !== 0 && k >= n)) {
      const ret = fn(k < maxCallable ? k : n);
      step = n = 0;
      return ret;
    }

    if (n === 0) n = k;
    step += 1;
    fn(step * maxCallable);
    return A(step * maxCallable); // 5 10 ... 95
  };
}

const neverFullFibonacci = neverFullV2(memoizedFibonacci);
console.log('ret>>', neverFullFibonacci(4));
console.log('ret>>', neverFullFibonacci(8));
console.log('ret>>', neverFullFibonacci(100));
console.log('ret>>', neverFullFibonacci(50000));
