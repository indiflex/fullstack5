// const m = new Map();

// m.set(1, '10');
// m.set(2, '20');
// m.set(1, '100');
// console.log('🚀  m:', m, m.get(2), m.keys());
// const e = m.entries();
// console.log('🚀  e:', e);
// console.log('===============================');

const wm = new WeakMap();
const m = new Map();
{
  let obj1 = { id: 1 }; // &700
  const obj2 = { id: 2 }; // &750

  wm.set(obj1, 1);
  wm.set(obj2, 2222);
  // obj1 = null; // obj1 주소 변경!  &800
  console.log('www=', wm, wm.has(obj1), wm.get(obj2));

  m.set(obj1, 1);
  m.set(obj2, 2);
  console.log('mmm=', m, m.has(obj1));
  obj1 = null;
} // wm만 전역이라면 obj1, obj2는 GC!!
console.log('333=', m, m.size, wm.size);

console.log('===========================');
const arr = [1, 2, 3, 2, 4, 5, 4, 3];
const set = new Set(arr);
console.log('🚀  set:', set, [...set]);
