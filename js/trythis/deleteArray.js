import assert from 'assert';

// const deleteArray = (arr, ...args) => arr.slice(...args);
const deleteArray = (arr, start, end) =>
  arr.filter((a, i) => i < start || i >= (end ?? Infinity));

const arr = [1, 2, 3, 4];
// const x = deleteArray(arr, 2);
// const x = deleteArray(arr, 1, 3);
// console.log('🚀  x:', x, arr);
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

const deleteObjectArray = (objs, startOrKey, endOrValue) => {
  if (typeof startOrKey === 'number')
    return deleteArray(objs, startOrKey, endOrValue);

  return objs.filter(obj => obj[startOrKey] !== endOrValue);
};

// const x = deleteObjectArray(users, 2);
// console.log('🚀  x:', x);
// return;
assert.deepStrictEqual(deleteObjectArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteObjectArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, 'name', 'Lee'), [Hong, Kim]);
