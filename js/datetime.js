const d = new Date();
console.log('🚀  d:', d);

const moment = require('moment');
require('moment/locale/ko');

const m = moment('2022-10-30');
// m.tz('Asiz/Korean');
// moment.locale('ko');
console.log('🚀  d2:', m, m.format('llll'));
console.log(m.format('YYYY-MM-DD HH:mm:ss (ddd)'));
console.log(m.fromNow());

setTimeout(
  (x, y) => {
    console.log('********', x, y);
  },
  1000,
  'x',
  'y'
);

const f = () => {
  console.log('********', new Date().getSeconds());
  if (++cnt > 10) clearInterval(intl);
};

let cnt = 0;
const intl = setInterval(f, 500);
