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
  new Promise((resolve, reject) => {
    const delay = Math.random() * 1000;
    console.log('randTime>>', val, delay);
    // if (delay >= 0) return reject(new Error('YYYY'));
    // if (delay >= 0) return reject('YYYY');
    setTimeout(() => {
      resolve(val);
    }, delay);
  });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    // if (now % 2 >= 0) resolve(now); // success
    if (now % 2 < 0) resolve(now); // failure
    else reject('어디로?');
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
    // return 'FiNALLY';
    throw new Error('XXXXXX');
  })
  .then(console.log('p.then.res33!!!'))
  .then(res => res || 'TTT')
  .catch(err => {
    console.error('err-11>>', err);
    throw new Error('ERR-11-1');
  })
  .catch(err => {
    console.error('err-22>>', err.message);
  })
  .finally(() => {
    console.log('finally-11');
  })
  .finally(() => console.log('finally-22'));

setTimeout(() => console.log('222>>', p), 3000);

function Promise(cb) {
  let thenFns = [];
  let catchFns = [];
  let finalFns = [];

  Promise.prototype.then = fn => {
    thenFns.push(fn);
    return this;
  };

  Promise.prototype.catch = fn => {
    catchFns.push(fn);
    return this;
  };

  Promise.prototype.finally = fn => {
    finalFns.push(fn);
    return this;
  };

  const thenRecur = preResult => {
    const fn = thenFns.shift();
    if (!fn) {
      this.state = 'fulfill';
      return finalRunner();
    }

    if (preResult instanceof Promise) {
      preResult.then(fn).then(thenRecur).catch(catchRecur);
    } else {
      try {
        const ret = fn(preResult);
        thenRecur(ret);
      } catch (error) {
        catchRecur(error);
      }
    }
  };

  const catchRecur = preReason => {
    const fn = catchFns.shift();
    if (!fn) {
      finalRunner();
      throw preReason;
    }

    try {
      fn(preReason);
      finalRunner();
    } catch (error) {
      catchRecur(error);
    }
  };

  const finalRunner = () => {
    for (const fn of finalFns) fn();
  };

  cb(
    succ => {
      // console.log('RESOLVE', succ);
      this.state = 'fulfill';
      thenRecur(succ);
    },
    err => {
      // console.log('REJECT', err);
      this.state = 'reject';
      catchRecur(err);
    }
  );
}
