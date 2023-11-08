import { rand } from '../utils/math-utils.js';
import { debounce, throttle } from '../utils/timer-utils.js';

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
