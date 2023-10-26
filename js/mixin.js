class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log('bowwow!', this.name);
  }
}

class Pet {
  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}
// console.log(Object.getOwnPropertyDescriptors(Pet.prototype));
// Object.defineProperty(Pet.prototype, 'feed', { enumerable: true });
// console.log(Pet.prototype);
// return;

// 방법1)
// Dog.prototype.feed = Pet.prototype.feed;

const jake = new Dog('Jake');
jake.bark();

Object.assign(jake, {
  likesPeople() {
    console.log(`${this.name} likes you.`);
  },
});

jake.likesPeople();

// 방법2)
Object.assign(
  jake,
  new Object({
    feed: Pet.prototype.feed,
  })
);

// 방법3) : 시코 방식
// Object.defineProperty(Pet.prototype, 'feed', { enumerable: true });
// Object.assign(jake, Pet.prototype);
// Object.defineProperty(Pet.prototype, 'feed', { enumerable: false });

jake.feed('dog-food');
