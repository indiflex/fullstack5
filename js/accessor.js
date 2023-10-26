class User {
  userName;
  constructor(name) {
    this.userName = name;
  }
  set name(nm) {
    this.userName = nm;
  }
  get name() {
    return this.userName;
  }
}

const hong = new User('Hong');
console.log(hong.name);

console.log(Object.getOwnPropertyDescriptors(User.prototype));
