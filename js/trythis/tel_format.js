import assert from 'assert';

const telfmt = tel => {
  const len = tel?.length ?? 0;
  if (len < 7) return tel;

  if (len <= 8) return `${tel.substring(0, len - 4)}-${tel.substring(len - 4)}`;

  const c = 4;
  const a = tel.startsWith('02') ? 2 : len >= 12 ? 4 : 3;
  const b = len - a - c;

  const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${c}})`);
  return tel.replace(regex, '$1-$2-$3');
};

assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('2341577'), '234-1577');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');
