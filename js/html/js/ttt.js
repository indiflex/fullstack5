import { debounce, throttle } from '../../utils/timer-utils.js';

const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const search = () => {
  console.log('search!!!');
};
const getNextWeek = function () {
  let widx = -1;
  return function () {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
};

const getNextWeekKorean = getNextWeek();
const getNextWeekMath = getNextWeek();

// let cnt = 0;
window.addEventListener('load', event => {
  const spanA = document.getElementById('a');
  const spanB = document.getElementById('b');

  const searcher = debounce(() => {
    console.log(searchStr.value);
  }, 500);
  searchStr.addEventListener('keyup', function (e) {
    // console.log('******>', searchStr.value, this.value, e.keyCode)
    searcher();
  });

  const koClicker = debounce(() => {
    spanA.innerText = getNextWeekKorean();
  }, 500);
  const mathClicker = throttle(() => {
    spanB.innerText = getNextWeekMath();
  }, 500);

  document
    .getElementById('buttonA')
    .addEventListener('click', function (event) {
      // cnt++;
      // console.log(event.target, cnt);
      // this.textContent = `ButtonA ${cnt}`;
      // spanA.innerText = getNextWeekKorean();
      koClicker();
    });

  document.getElementById('buttonB').addEventListener('click', event => {
    // cnt++;
    // console.log(event.target, cnt);
    // event.currentTarget.textContent = `ButtonB ${cnt}`;
    // spanB.innerText = getNextWeekMath();
    mathClicker();
  });

  console.log('Window Loaded!'); // (다)
});
