class Emp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName') {
          return `${target.firstName} ${target.lastName}`;
        } else {
          return target[prop];
        }
      },
      set(target, prop, value) {
        if (prop === 'fullName') {
          const [firstName, lastName] = value.split(' ');
          target.firstName = firstName;
          target.lastName = lastName?.toUpperCase();
        } else {
          target[prop] = value;
        }
      },
    });
  }
}

const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log('fullName=', hong.fullName); // 'Kildong HONG' 출력하면 통과!
console.log('lastName=', hong.lastName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
