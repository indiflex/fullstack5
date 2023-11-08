import assert from 'assert';

const ALPHANUMS = [108, 76, 109, 77, 110, 78, 114, 82, 49, 51, 54, 55, 56, 48];

const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0); // 44032

const isEndJaum = str => {
  const s = str.charCodeAt(str.length - 1);
  // console.log('🚀  s:', str, s, (s - 가) % 28);

  return ALPHANUMS.includes(s) || (s >= ㄱ && s <= ㅎ) || (s - 가) % 28 > 0;
};

// console.log('x=', isEndJaum('아지오ㄱ'));
assert.equal(isEndJaum('아지오'), false);
assert.equal(isEndJaum('떡볶'), true);
assert.equal(isEndJaum('북한강'), true);
assert.equal(isEndJaum('뷁'), true);
assert.equal(isEndJaum('강원도'), false);
assert.equal(isEndJaum('바라당'), true);
assert.equal(isEndJaum('ㅜㅜ'), false);
assert.equal(isEndJaum('케잌'), true);

assert.equal(isEndJaum('점수 A'), false);
assert.equal(isEndJaum('알파벳L'), true);
assert.equal(isEndJaum('24'), false);
assert.equal(isEndJaum('23'), true);

// josa('세종대왕', '은/는')  ==> '세종대왕은'
const josa = (str, ja_mo) => {
  const [ja, mo] = ja_mo.split('/');
  return `${str}${isEndJaum(str) ? ja : mo}`;
};

const iga = str => josa(str, '이/가');
const ennun = str => josa(str, '은/는');
const eulul = str => josa(str, '을/를');

console.log(josa('세종대왕', '은/는'));
console.log(josa('세종대왕', '이어야/여야'));
console.log(josa('세종대왕', '이랑/랑'));
console.log(josa('세종대왕', '이어야/여야'));
console.log(iga('세종대왕'));
console.log(ennun('세종대왕'));
console.log(eulul('세종대왕'));
console.log(josa('서울시', '은/는'));
console.log(josa('서울시', '이어야/여야'));
