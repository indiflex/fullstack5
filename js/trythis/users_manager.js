import assert from 'assert';

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

const addUser = user => [...users, user];
const removeUser = user => users.filter(_user => _user.id !== user.id);
const changeUser = (target, newUser) =>
  users.map(_user => (_user.id === target.id ? newUser : _user));

const a = addUser(hong);
assert.deepStrictEqual(a, [kim, lee, park, hong]);

const r = removeUser(lee);
assert.deepStrictEqual(r, [kim, park]);

assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
