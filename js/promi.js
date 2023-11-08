const promi = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // setTimeout(() => reject(new Error('ERRRRRRR')), 1500);
});
console.log('🚀  promi:', promi);

promi
  .then(response => {
    console.log('res>>', response);
    return 'XXXXXXX';
  })
  .then(res2 => {
    console.log('second>>', res2);
    // throw new Error('YYYYYY');
    new Promise((resolve, reject) => resolve('***'));
  })
  .then(res3 => console.log('third>>', res3))
  .catch(error => console.error('error>>', error))
  .finally(() => console.log('DONE!!'));

// function Promise(cb) {
//   console.log('xxxxxxxxxxx');
// }

const promi2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // setTimeout(() => reject(new Error('ERRRRRRR')), 1500);
});

promi2.then(res => console.log('promi2>>>', res));

setTimeout(() => console.log('cb1'));
setImmediate(() => console.log('cb11'));
Promise.resolve()
  .then(() => console.log('cb2'))
  .then(() => console.log('cb3'));
