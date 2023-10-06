const expressFn = function(name) {
  // if, 'use strict'?
  this.name = name;
  console.log(this, new.target, this.name, name);
}

// new expressFn('Hong')


const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name);
}

// arrowFn('Kim')

const Dog = function(name, a, b) {
  console.log('🚀  name:', name, a, b, this.name)
  // console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
  console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);
}

const hong = { id: 1, name: 'Hong' }

// const dog = Dog('Doggy');
// const lucy = new Dog('Lucy');
// Dog.bark(); // ?
// lucy.bark(); // ?
// lucy.bark.bind(hong)();
Dog.call(hong, 'KIM', 1, 2);
Dog.apply(hong, ['KIM', 1, 2])
// lucy.bark2(); // ?
// console.log('type=', typeof dog); // ?
// console.log('type=', typeof lucy); // ?

