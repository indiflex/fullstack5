const user = {
  '': 1,
  ' ': 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: 'Hong', // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: 'HongSym', // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  'my-friends': ['Han', 'Kim'],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

// console.table(user);
// console.log(JSON.stringify(user, null, 4));
const keys = Object.keys(user);
const vals = Object.values(user);
// console.log('🚀  vals:', vals);
console.log('🚀  keys:', keys, keys.length);

console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);
console.log({ ...user, addr: 'Seoul' });
user.addr2 = { city: 'Pusan' };

console.log('>>', 'addr2' in user, user.hasOwnProperty('addr2'));

console.log('user entries=', Object.entries(user));

function entriesWithSymbol(obj) {
  const rets = [];
  if (!obj || typeof obj !== 'object') return [];
  for (const k of Reflect.ownKeys(obj)) {
    console.log('k=', k);
    rets.push([[k, obj[k]]]);
  }
  return rets;
}
console.log('ref.entries>>', entriesWithSymbol(user));

console.log('=====================================');

console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertyDescriptor(user, 'id'));
Object.defineProperty(user, 'name', {
  value: 'Kim',
  writable: false,
  enumerable: false,
});
user.name = 'Lee';
console.log('🚀  user.name ====>', user.name);

console.log(Object.keys(user));

const arr = ['a', 'b', 'c'];
const arrEntries = arr.map(function (a, i) {
  return [i, a];
});
console.log('🚀  arrEntries:', arrEntries);
console.log('🚀  arr:', arr);
console.log('🚀  arr2obj:', Object.fromEntries(arrEntries));
console.dir(arr);

const u1 = Object.assign({}, user);
// u1.addr2 = { city: 'Seoul' };
u1.addr2.city = 'Seoul';
console.log('u1=', u1, user === u1, user.id === u1.id, user.addr2 === u1.addr2);
const u2 = { ...user };
console.log('u2=', u2);
const u3 = new Object(user);
const u4 = Object.create(user);
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log('u3=', u3);
console.log('u4=', u4);
console.log('u4.proto=', Object.getPrototypeOf(u4), u4.__proto__);

console.log(typeof entriesWithSymbol);

function f(n) {
  if (n.hasOwnProperty('id')) n.id += 1;
  else n += 1;
}

// const f2 = function ({ id }) { return id += 1; }
const f2 = ({ id }) => (id += 1);

let n = 10;
f(n);
let nobj = {
  id: 10,
  toString() {
    return JSON.stringify(this);
  },
};
console.log(nobj.id);
f(nobj);
console.log(nobj);
f2(nobj);
console.log(nobj.toString());

(function ff(x, isLast) {
  console.log('x=', x);
  if (isLast) return;
  else ff('efg', true);
})('a');
// f1('a');

// curring
// const addTax = function (resolve) {
//   return function (price) {
//     return resolve(price * 1.1);
//   };
// };
const addTax = resolve => price => resolve(price * 1.1);

console.log('=====================================');
const name = 'MMMMMMMMM';
globalThis.name = 'GGGGGGG';
const obj = {
  name: 'ObjName',
  bark1() {
    const name = 'XXXXXX';
    console.log('1=', this.name);
    const self = this;
    // 0.5초 후 AA(obj)   setTimeout(a, b, c) => b초 후 a(c)
    setTimeout(function AA() {
      return console.log('11=', self.name, name);
    }, 500);
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => console.log('22=', this.name), 500);
  },
  bark3: function () {
    console.log('3=', this.name);
  },
  bark4: () => {
    console.log('4=', this.name);
  },
};

// obj.bark1();
// obj.bark2();
obj.bark3();
obj.bark4();

const bbb = obj.bark2;
bbb();

const newObj = {};
for (const k in nobj) {
  console.log(':::>', k, nobj[k]);
  newObj[k] = nobj[k];
}
// newObj[k] = obj[k];
console.log('🚀  newObj:', newObj);
