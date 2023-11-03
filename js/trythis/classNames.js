import assert from 'assert';

const arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

const classNamesBefore = (...args) => args.filter(a => a !== '').join(' ');

const classNames = (...args) => args.filter(Boolean).join(' ');
// const fn = a => Boolean(a);
// args.filter((a, i, args) => fn(a, i, args)).join(' ');
const ret2 = classNames('', 'a b c', 'd', '', 'e');
console.log('🚀  ret2:', ret2);
assert.strictEqual(ret2, 'a b c d e'); // 주의: ' a b c d  e'면 안됨!!
