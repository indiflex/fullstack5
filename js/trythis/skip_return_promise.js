const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log('id>>', id);
    if (id < 7) resolve(id + 1);
    else reject(new Error('어디로?' + id));
  });

promiseFn(1)
  .then(res => {
    console.log('res1>>', res);
    promiseFn(res); // Need Return the Promise Object!!
  })
  .then(res => {
    console.log('res2>>', res); // undefined
    // if (res === undefined) throw new Error('Not Valid!!');
    if (res === undefined) return Promise.reject('Not Valid!!');
    return promiseFn(res ?? 3);
  })
  .catch(err => console.log('Error!!>>', err));
