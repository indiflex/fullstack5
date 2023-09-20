let i = 1;
console.log(i);
console.log('x=', x);
var x = 1;
console.log(ff);
// console.log(ff, f);
var f = undefined; // <f.o> when run line 10
var x = undefined; // until line 17
{
  function f() {
    // <f.o> when runtime
    // Bad!!
    // const f = function () {  // Good
    console.log('f>', x, xx);
  }
  f();
  x = 2;
}
f();
function ff() {
  // global function : <f.0> when compile
  // console.log('ff>', y, yy);
}
if (x > 2) {
  var y = 5;
  let yy = 55;
}
var xx = 100;
ff();
