import localdata from '../localdata.json' assert { type: 'json' };

const { LINE2 } = localdata;
console.log('🚀  LINE2:', LINE2);
class Subway {
  #currIdx;
  #end;
  #isEnd = false;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#end = end;
  }

  // [Symbol.iterator]() {
  //   return {
  //     next: () => {
  //       if (this.#isEnd) return { done: true };

  //       if (this.#currIdx === LINE2.length) this.#currIdx = 0;
  //       const value = LINE2[this.#currIdx++];
  //       this.#isEnd = value === this.#end;

  //       return { value, done: false };
  //     },
  //   };
  // }

  goNext() {
    if (this.#currIdx === LINE2.length) this.#currIdx = 0;
    const value = LINE2[this.#currIdx++];
    this.#isEnd = value === this.#end;

    return value;
  }

  *[Symbol.iterator]() {
    while (true) {
      if (this.#isEnd) break;

      yield this.goNext();
    }
  }
}

// const routes = new Subway('문래', '신림');
// const routes = new Subway('문래', '을지로입구');
// const routes = new Subway('구로디지털단지', '성수'); // 32
// const routes = new Subway('문래', '합정'); // 46
const routes = new Subway('신도림', '을지로입구'); // 48
const it1 = routes[Symbol.iterator]();
// console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
let cnt = 0;
for (const s of routes) {
  console.log('curr station is', s, ++cnt);
}
