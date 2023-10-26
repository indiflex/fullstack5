const obj = { id: 1, name: 'Hong' };
console.log(obj.toString);
Object.getPrototypeOf(obj) === Object.prototype;
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) {
    this.name = name || super.name;
  }
}
const dog = new Animal('Dog');
console.log('ok=', Object.keys(obj));
console.log('ak=', Object.keys(dog));
for (let k in dog) console.log('k=', k);
console.log('oh=', obj.hasOwnProperty('id'), 'id' in obj);
console.log('dh=', dog.hasOwnProperty('id'));

console.log('============================');
class Emp {
  firstName = 'F';
  lastName = 'L';
  // set fullName(name) {
  //   [this.firstName, this.lastName] = name.split(' ');
  // }

  // get fullName() {
  //   // accessor
  //   return `${this.firstName} ${this.lastName}`;
  // }
}
const _hong = new Emp();
const hong = new Proxy(_hong, {
  get(target, prop) {
    if (prop === 'fullName') return target.firstName + ' ' + target.lastName;
    return target[prop];
  },
});
// hong.fullName = 'Kildong Hong';

console.log(hong.fullName);
