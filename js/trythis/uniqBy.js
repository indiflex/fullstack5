import { localdata } from '../utils/index.js';

const { USERS: users } = localdata;

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map(a => a[prop]))];
};

console.log(users.uniqBy('dept'));
