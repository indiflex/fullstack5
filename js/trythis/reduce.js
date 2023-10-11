const assert = require('assert');

const arr = [1, 2, 3];

const ar = arr.reduce((acc, a) => acc + a);
console.log('🚀  ar:', ar);

const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? ((i += 1), arr[0]);
  // if (initValue !== undefined) {
  //   acc = initValue;
  //   i = i + 1;
  // }
  for (; i < arr.length; i += 1) {
    acc = fn(acc, arr[i]);
  }

  return acc;
};

const r1 = reduce([1, 2, 3], (a, b) => a + b, 0);
console.log('🚀  r1:', r1);

assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
);
assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
);
assert.strictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
);
assert.strictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
);
