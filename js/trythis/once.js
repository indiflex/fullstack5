const once1 = fn => {
  let done = false;
  return function () {
    if (done) return undefined;
    done = true;
    return fn.call(this, arguments);
  };
};

const once2 = fn => {
  let done = false;
  return (...args) => {
    if (done) return undefined;
    return (done = true), fn.call(this, ...args);
  };
};

const once = (fn, thisValue) => {
  let done = false;
  return (...args) =>
    done ? undefined : ((done = true), fn.apply(thisValue || this, args));
};

const onceX = (fn, thisValue) => {
  return (...args) => {
    let ret;
    if (fn) {
      ret = fn.apply(thisValue || this, args);
      fn = null;
    }

    return ret;
  };
};

const canDrive = (x, y) =>
  `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! - ${this.id}`;

const canDrive2 = function (x, y) {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! - ${this.id}`;
};

const user = { id: 1, name: 'Hong' };
const fn = once(canDrive, user);
const fn2 = once(canDrive2, user);

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn2(3, 8)); // undefined
console.log(fn2(33, 88)); // undefined
