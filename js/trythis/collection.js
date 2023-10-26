const assert = require('assert');

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  toArray() {
    return this.#arr;
  }

  get _arr() {
    return this.#arr;
  }

  set _arr(values) {
    return (this.#arr = values);
  }

  clear() {
    this.#arr.length = 0;
  }

  print() {
    // console.table(this.#arr);
    console.log(JSON.stringify(this.#arr, null, 2));
  }

  // [Symbol.iterator]() {}
}

class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(value) {
    this._arr.push(value);
  }

  pop() {
    return this._arr.pop();
  }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log('stack=', stack.toArray()); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack.toArray(), [3]);

class Queue extends Collection {
  #arr;
  constructor(...args) {
    super(...args);
  }

  enqueue(value) {
    this._arr.push(value);
  }

  dequeue() {
    return this._arr.shift();
  }
}
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.print();
assert.deepStrictEqual(queue.toArray(), [3]);

const queue2 = new Queue([1, 2]);
queue2.enqueue(3); // 추가하기
queue2.print();
assert.deepStrictEqual(queue2.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue2.dequeue(), 1);
assert.deepStrictEqual(queue2.toArray(), [2, 3]);

const queue3 = new Queue(1, 2);
queue3.enqueue(3); // 추가하기
assert.deepStrictEqual(queue3.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue3.dequeue(), 1);
assert.deepStrictEqual(queue3.toArray(), [2, 3]);
queue3.print();

queue3.clear();
assert.deepStrictEqual(queue3.toArray(), []);

console.log([...queue3]);
