// class Promise {
//   constructor(cb) {
//     cb(
//   succ => {
//     console.log('RESOLVE', succ);
//     this.state = 'fulfill';
//     this.thenFn(succ);
//   },
//   err => {
//     // console.log('REJECT', err);
//     this.catchFn(err);
//     this.state = 'reject';
//   }
// );

//     this.state = 'pending';

//     Object.defineProperties(this, {
//       thenFn: {
//         enumerable: false,
//         writable: true,
//       },
//       catchFn: {
//         enumerable: false,
//         writable: true,
//       },
//     });
//   }

//   then(fn) {
//     this.thenFn = fn;
//     return this;
//   }

//   catch(fn) {
//     this.catchFn = fn;
//     return this;
//   }
// }

const randTime = val =>
  new Promise(resolve => {
    const delay = Math.random() * 1000;
    console.log('randTime>>', val, delay);
    setTimeout(() => {
      resolve(val);
    }, delay);
  });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 < 0) resolve(now);
    else reject('어디로? CATCH로!');
  }, 1000);
});

console.log('111>>', p);
p.then(res => {
  console.log('p.then.res11>>>', res);
  return randTime(1);
})
  .then(res => randTime(res + 1))
  .then(res => {
    console.log('p.then.res22>>>', res);
    return 'FiNALLY';
  })
  .then(console.log('p.then.res33!!!'))
  .then(res => res || 'TTT')
  .catch(err => {
    console.error('err-11>>', err);
    throw new Error('ERR-11-1');
  })
  .catch(err => console.error('err-22>>', err))
  .finally(() => {
    console.log('finally-11');
  })
  .finally(() => console.log('finally-22'));

setTimeout(() => console.log('222>>', p), 2000);

// function Promise(cb) {
//   let thenFns = [];
//   let catchFn;

//   Promise.prototype.then = fn => {
//     thenFn = fn;
//     return this;
//   };

//   Promise.prototype.catch = fn => {
//     catchFn = fn;
//     return this;
//   };

//   cb(
//     succ => {
//       console.log('RESOLVE', succ);
//       this.state = 'fulfill';
//       thenFn(succ);
//     },
//     err => {
//       // console.log('REJECT', err);
//       catchFn(err);
//       this.state = 'reject';
//     }
//   );
// }
