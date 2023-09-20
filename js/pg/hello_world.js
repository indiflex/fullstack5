// console.log('Hello, world');

// const arr = [1, 2];
// arr.map(a => console.log(a));

function f() {
  let x = 1;
  {
    x = 10;
    let y = 2;
  }
  console.log('sss>>', this.a, this.b, x);
}

const obj = { a: 1, b: 2 };
f.bind(obj)();
f.apply(obj);
