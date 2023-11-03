import assert from 'assert';

const powSqrtByForOf = array => {
  const pows = [];
  const sqrts = [];
  for (const a of array) {
    pows.push(a * a);
    sqrts.push(Math.sqrt(a));
  }

  return [pows, sqrts];
};

const arr = [1, 4, 9];
assert.deepStrictEqual(powSqrtByForOf(arr), [
  [1, 16, 81],
  [1, 2, 3],
]);

const powSqrtByForEach = array => {
  const pows = [];
  const sqrts = [];
  array.forEach(a => {
    pows.push(a * a);
    sqrts.push(Math.sqrt(a));
  });

  return [pows, sqrts];
};

const powSqrtByMap = array => {
  const pows = array.map(a => a * a);
  const sqrts = array.map(Math.sqrt);

  return [pows, sqrts];
};

assert.deepStrictEqual(powSqrtByForEach(arr), [
  [1, 16, 81],
  [1, 2, 3],
]);
assert.deepStrictEqual(powSqrtByMap(arr), [
  [1, 16, 81],
  [1, 2, 3],
]);

// ---------------- composition & pipeline(x|y|z)
const pow2 = a => a ** 2;
const pow3 = a => a ** 3;
const sqrt = Math.sqrt;
const x = arr
  .map(a => pow2(a)) // 1, 16, 81
  .map(Math.sqrt) // 1, 4, 9
  .map(a => pow3(a)); // 1, 64, 729

console.log('🚀  x:', x);

assert.deepStrictEqual(x, [1, 64, 729]);

const y = [pow2, Math.sqrt, pow3].reduce((acc, f) => arr.map(f));
console.log('🚀  y:', y);

const z = n => [pow2, Math.sqrt, pow3].reduce((acc, f) => f(acc), n);
const z2 = (n, fns) => fns.reduce((acc, f) => f(acc), n);

console.log('🚀  z:', z(4));
console.log('🚀  z2:', z2(4, [pow2, Math.sqrt, pow3]));
console.log('🚀  z3:', z2(9, [pow2, Math.sqrt]));
console.log('🚀  z4:', z2(16, [Math.sqrt]));
