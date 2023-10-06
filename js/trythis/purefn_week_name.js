const weeks = ['일', '월', '화', '수', '목', '금', '토'];

// (function f() {
//   console.log('fffff');
// })();

// return;

const getNextWeekX = () => {
  let widx = -1;
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};
const getNextWeekMaker = (function () {
  let widx = -1;
  return function () {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

const getNextWeek = getNextWeekMaker();
// const getNextWeekEn = getNextWeekMaker(0);

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 100);
