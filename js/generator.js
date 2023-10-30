// function* route() {
//   console.log('*******');
//   const start = yield '출발 역은?';
//   console.log('start=', start);
//   const end = yield '도착 역은?';
//   console.log('end=', end);
//   return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
// }

// const caller = route(); // next() 함수가 있는것으로 볼 때, "내 안에 이터레이터 있다!"
// console.log('🚀  caller:', caller);
// const x1 = caller.next();
// console.log('🚀  x1:', x1);
// const x2 = caller.next('문래');
// console.log('🚀  x2:', x2);
// const x3 = caller.next('신림');
// console.log('🚀  x3:', x3);
// return;

function* gener() {
  console.log('********');
  const x = yield 1;
  const y = yield x + 10;
  console.log('x y =', x, y);
  return x + y;
}
const it3 = gener();
console.log('🚀  it3:', it3);
console.log(it3.next()); // { value: 1, done: false }
console.log(it3.next(3)); // { value: 13, done: false }
// x y = 3 5
console.log(it3.next(5)); // { value: 8, done: true }
