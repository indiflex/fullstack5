// setTimeout(function () {
//   console.log('depth1', new Date());
//   setTimeout(function () {
//     console.log('depth2', new Date());
//     setTimeout(function () {
//       console.log('depth3', new Date());
//       throw new Error('Already 3-depth!!');
//     }, 3000);
//   }, 2000);
// }, 1000);

const depthTimer = depth =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('depth' + depth, new Date());
      if (depth >= 3) return reject(new Error('Already 3-depth!!'));

      resolve(depth + 1);
    }, 500 * depth);
  });

depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .then(console.log)
  .catch(err => console.error(err));
