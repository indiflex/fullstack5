f(2);

function f(x) {
  let y = 9;
  switch (x) {
    case 1:
      y = 10;
      console.log('One!', y);
      break;

    case 2:
      let x = 1;
      console.log('Two!', x);
    case 3:
      console.log('Three!', ++x);

    default:
      console.log('default!!');
      break;
  }
}
