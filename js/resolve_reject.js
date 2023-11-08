const f = val =>
  new Promise((resolve, reject) => {
    if (val % 2 === 0) resolve('Even');
    // setTimeout(() => reject('Odd'), 500);
    reject('Odd');
  });

const f2 = val =>
  val % 2 === 0 ? Promise.resolve('Even') : Promise.reject('Odd');

f2(4)
  .then(
    res =>
      new Promise(resolve => {
        setTimeout(() => resolve('*******'.length));
      })
  )
  .then(res => f(res))
  .then(console.log)
  .catch(err => console.error('ERR>>', err));
