import assert from 'assert';

const vals = [1, 2, 3];
let maxSpendTime = 0;
const randTime = val =>
  new Promise(resolve => {
    // const delay = Math.random() * 1000;
    const delay = val * 1000;
    maxSpendTime = maxSpendTime < delay ? delay : maxSpendTime;
    setTimeout(resolve, delay, val);
  });

const promiseAll = promises =>
  new Promise((resolve, reject) => {
    if (!promises?.length) reject('Input Promises!!');

    const results = [];

    // const recur = () => {
    //   const f = promises.shift();
    //   if (!f) return resolve(results);
    //   f.then(res => {
    //     results.push(res);
    //     recur();
    //   });
    // };

    // recur();

    let leftRunCnt = promises?.length;
    for (let i = 0; i < promises.length; i += 1) {
      promises[i].then(res => {
        results[i] = res;
        leftRunCnt -= 1;

        if (leftRunCnt === 0) resolve(results);
      });
    }
  });

console.time('PPP');
promiseAll([randTime(1), randTime(2), randTime(3)])
  // Promise.all([randTime(1), randTime(2), randTime(3)])
  .then(arr => {
    console.table(arr);
    console.timeEnd('PPP');
    console.log('maxSpendTime=', maxSpendTime);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

// promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
//   .then(array => {
//     console.log('여긴 과연 호출될까?!');
//   })
//   .catch(error => {
//     console.log('reject!!!!!!>>', error);
//   });
