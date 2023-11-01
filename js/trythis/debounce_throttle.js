const rand = (s, e) => {
  const ret = s + Math.floor((e - s + 1) * Math.random());
  console.log('rand>>', ret);
  return ret;
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

let cnt = 0;
const debouncer = debounce(rand, 1000);
const throttler = throttle(rand, 1000);
const intl = setInterval(() => {
  // console.log('1)', cnt, rand(1, 10));
  // console.log('2)', cnt, debouncer(1, 10));
  // debouncer(1, 10);
  throttler(1, 10);
  if (++cnt >= 20) {
    clearInterval(intl);
  }
}, 100);
