import assert from 'assert';

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const lucy = new Dog('Lucy');

const arr = [1, 2, 3];
const hong = { id: 1, name: 'Hong' };

const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
  xx: null,
  yy: a => {
    return a;
    this.addr;
  },
  yyy(x, y) {
    return this.oo;
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol('symbol2'),
  dog: lucy,
  sobj: new String('abc'),
  nobj: new Number(123),
  bobj: new Boolean(true),
  [Symbol()]: Object(Symbol('symbol3')),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

const deepCopy = obj => {
  if (
    obj === null ||
    typeof obj !== 'object' ||
    obj instanceof WeakMap ||
    obj instanceof WeakSet
  )
    return obj;

  const value = obj.valueOf();
  if (obj.constructor.name === 'Symbol') return Object(value);

  if (obj instanceof Map) {
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepCopy(k), deepCopy(v)])
    );
  } else if (obj instanceof Set) {
    return new Set([...obj].map(a => deepCopy(a)));
  }

  const copiedObj = new obj.constructor(typeof value !== 'object' ? value : {});
  for (const k of Reflect.ownKeys(obj)) {
    copiedObj[k] = deepCopy(obj[k]);
  }
  return copiedObj;
};

// const newk = deepCopy(kim);
// kim.arr[1] = 200;
// kim.oo.id = 300;
// console.log(kim, '\n------\n', newk);
// return;

const newKim = deepCopy(kim);
console.log('----------------');
kim.zs.keys().next().value[0] = 9;
console.log(kim.zs);
console.log(newKim.zs);
console.log('----------------');
kim.zm.values().next().value[0] = 9;
console.log(kim.zm);
console.log(newKim.zm);
console.log('----------------');
return;
assert.deepStrictEqual(newKim, kim, 'deepCopy equal fail!');
newKim.addr = 'Daegu';
console.log('kim.yy=', kim.yy(100));
console.log('newKim.yy=', newKim.yy(200));
newKim.oo.name = 'Kim';
assert.notDeepStrictEqual(newKim, kim, 'Not Valid Deep Copy!');
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], 'pass2: 다르지 않아요!');
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  'Not Pass3: city가 다르지 않아요!'
);

console.log('kim.yyy=', kim.yyy());
console.log('newKim.yyy=', newKim.yyy());

// const deepCopyObject = obj => {
//   if (obj === null || typeof obj !== 'object') return obj;
//   const copiedObj = new obj.constructor();
//   for (const k of Reflect.ownKeys(obj)) {
//     if (typeof obj[k] === 'function') copiedObj[k] = obj[k].bind(copiedObj);
//     else copiedObj[k] = deepCopyObject(obj[k]);
//   }
//   return copiedObj;
// };
// const newKim = deepCopyObject(kim);

// ### copy function version
// const deepCopy = obj => {
//   const cloneObj = deepCopyObj(obj);
//   if (typeof obj === 'function') return obj.bind(cloneObj);

//   for (const k of Object.keys(obj)) {
//     if (typeof obj[k] === 'function') cloneObj[k] = obj[k].bind(cloneObj);
//   }
//   return cloneObj;
// };
// function F() {
//   console.log('FFF');
// }
// const cloneF = deepCopy(F);
// assert.notDeepStrictEqual(F, cloneF);
