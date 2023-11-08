const randTime = val =>
  new Promise(resolve => {
    const delay = Math.random() * 1000;
    console.log('randTime>>', val, delay);
    setTimeout(() => {
      resolve(val);
    }, delay);
  });

// randTime(100).then(res => console.log(res));
[1, 2, 3, 4, 5].forEach(a => randTime(a).then(console.log));
