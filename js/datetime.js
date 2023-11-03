import moment from 'moment';
import 'moment/locale/ko';

const d = new Date();
console.log('🚀  d:', d);

function tmpFn() {
  const m = moment('2022-10-30');
  // m.tz('Asiz/Korean');
  // moment.locale('ko');
  console.log('🚀  d2:', m, m.format('llll'));
  console.log(m.format('YYYY-MM-DD HH:mm:ss (ddd)'));
  console.log(m.fromNow());
}

tmpFn();
console.log('mmmm>>', moment().format('L'));
return;

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
