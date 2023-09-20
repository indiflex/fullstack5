// 'use strict';
y = 1;
console.log('🚀  y:', y);

// NaN = 1;
// Infinity = 0;
// console.log(isNaN(Infinity), Infinity, NaN);

function f(id, name, addr) {
  // 'use strict';
  let z = 0;
  console.log('🚀 outer-f  z:', id, z);
}

var x = 1;

// {
//   function f() {
//     console.log('block -f');
//   }
//   var x = 2;
// }

f(10, 20);

let z = 9;
console.log('🚀  x,y,z:', x, y, z);
