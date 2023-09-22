let tot = 0;
for (let i = 1; i <= 10; i += 1) {
  // console.log(i, ':', tot);
  tot += i;
}
console.log('🚀  tot:', tot);

function sum(n) {
  // console.log(`${n} + sum(${n - 1})`);
  if (n === 1) return 1;
  return n + sum(n - 1);
}

const tot1 = sum(10);
console.log('🚀  tot1:', tot1);

// f(10, 0)
// f(9,  10 + 99
//
function f1(n, acc = 0) {
  if (n === 1) return 1 + acc;
  return f1(n - 1, n + acc);
}

// f2(1, 0)
// f2(2, 1)
// f2(3, 2 + 1) => 6
function f2(n, acc = 0) {
  if (n === 10) return n + acc;
  return f2(n + 1, n + acc);
}

console.log('f1>>', f1(10));
console.log('f2>>', f2(1));
