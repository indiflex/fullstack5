import assert from 'assert';

const HANGUL = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const hasHangul = str => HANGUL.test(str);

assert.strictEqual(hasHangul('강원도'), true);
assert.strictEqual(hasHangul('ㄱㄴㄷ'), true);
assert.strictEqual(hasHangul('ㅜㅜㅠㅠ'), true);
assert.strictEqual(hasHangul('케잌뷐'), true);
assert.strictEqual(hasHangul('12345'), false);
assert.strictEqual(hasHangul('IC'), false);

const NOT_HANGUL = /[^ㄱ-ㅎㅏ-ㅣ가-힣]/;
const isHangul = str => !NOT_HANGUL.test(str);
assert.strictEqual(isHangul('강원도'), true);
assert.strictEqual(isHangul('ㄱㄴㄷ'), true);
assert.strictEqual(isHangul('ㅜㅜㅠㅠ'), true);
assert.strictEqual(isHangul('케잌뷐'), true);
assert.strictEqual(isHangul('12한글345'), false);
assert.strictEqual(isHangul('아산IC'), false);
assert.strictEqual(isHangul('아산*'), false);
