let c = 0;
const f = (a, b) => ((c += 1), a + b);

const r1 = f(1, 2);
console.log('🚀  r1:', r1);

// c += 1;
const r2 = f(1, 2);
console.log('🚀  r2:', r2);
