const cache = { 100: 2323233 };
// console.log(cache[3], cache.id, cache['id']);

function factorial(n) {
  console.log('facto>>', n);
  if (n === 1) return 1;

  // if (cache[n]) return cache[n];
  // return n * factorial(n - 1);

  return cache[n] || n * factorial(n - 1);
}
// fn(3): 3 * 2 * 1
// f(5) = 5 * f(4) ==> 5 * 4 * f(3)
// f(4) = 4 * f(3)

const f3 = factorial(3);
cache[3] = f3;
console.log('>>', f3, cache);

const f5 = factorial(5);
console.log(f5); // 5 * 4 * f(3)
cache[5] = f5;

console.log(factorial(7)); // 7 * 6 * f(5)
