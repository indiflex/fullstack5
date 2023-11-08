import { WEEKS, calendar } from '../utils/date-utils.js';

console.log(WEEKS.map(w => w.padStart(2)).join(''));

console.log(calendar('2023-10-01'));
