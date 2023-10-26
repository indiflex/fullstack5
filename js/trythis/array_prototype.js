const assert = require('assert');

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const choi = { id: 4, name: 'Choi' };

const users = [hong, kim, lee]; // new Array(hong, kim)

Array.prototype.mapBy = function (prop) {
  return this.map(a => a[prop]);
};

Array.prototype.filterBy = function (prop, value) {
  return this.filter(a => a[prop] === value);
};

Array.prototype.findBy = function (prop, value) {
  return this.find(a => a[prop] === value);
};

// Array.prototype.firstObject = this.at(0) Bad!!
// Object.defineProperty(Array.prototype, 'firstObject', {
//   get() {
//     return this[0]; // this.at(0)
//   },
//   set(value) {
//     this[0] = value;
//   },
// });

// Object.defineProperty(Array.prototype, 'lastObject', {
//   get() {
//     return this.at(-1);
//   },
//   set(value) {
//     this[this.length - 1] = value;
//   },
// });

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this.at(0);
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});

assert.deepStrictEqual(users.mapBy('id'), [1, 2, 3]);
assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Kim', 'Lee']);
assert.deepStrictEqual(users.filterBy('id', 2), [{ id: 2, name: 'Kim' }]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), { id: 2, name: 'Kim' });
assert.deepStrictEqual(users.firstObject, { id: 1, name: 'Hong' });
assert.deepStrictEqual(users.lastObject, { id: 3, name: 'Lee' });

users.firstObject = choi;
users.lastObject = choi;
console.log('🚀  users:', users, users.firstObject);
