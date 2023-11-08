import assert from 'assert';
import { deepCopyObject as deepCopy } from '../utils/utils.js';
// import * as utils from '../utils/utils.js';
// const { deepCopyObject: deepCopy } = utils;
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

const newKim = deepCopy(kim);

// console.log('----------------');
// kim.zs.keys().next().value[0] = 9;
// console.log(kim.zs);
// console.log(newKim.zs);
// console.log('----------------');
// kim.zm.values().next().value[0] = 9;
// console.log(kim.zm);
// console.log(newKim.zm);
// console.log('----------------');
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
