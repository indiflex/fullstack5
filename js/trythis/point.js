// ex1)
for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(Number(i.toFixed(1)));
}

// ex2) 0.21354 + 0.1 = 0.31354
const a = 0.21354;
const b = 0.1;
const a0 = a + b;
console.log('🚀  a:', a0);

// const a1 = Math.round(a * 100000 + b * 100000) / 100000;
const a1 = (a * 100000 + b * 100000) / 100000;
console.log('🚀  a1:', a1);

const a2 = Number((0.21354 + 0.1).toFixed(5));
console.log('🚀  a2:', a2);

function addPoint(x, y) {
  const ex = x.toString().length - 2;
  const ey = y.toString().length - 2;
  const e = ex > ey ? ex : ey;
  console.log(ex, ey, e);
  return Number((x + y).toFixed(e));
}

console.log('result=', addPoint(a, b));

// ex3) 0.17 + 0.28 = ?
const result3 = addPoint(0.17, 0.28);
console.log('🚀  result3:', result3);
