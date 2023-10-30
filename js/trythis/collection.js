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

  remove() {
    this.#arr.pop();
  }

  get peek() {
    return this.#arr.at(-1);
  }

  get poll() {
    if (this.#isQueue()) {
      return this.dequeue();
      // } else if (this.pop) {
      //   return this.pop();
    } else {
      return this.#arr.pop();
    }
  }

  get isEmpty() {
    return !this.length;
  }
  get length() {
    return this.#arr?.length ?? 0;
  }

  print(flag) {
    // console.table(this.#arr);
    // console.log(JSON.stringify(this.#arr, null, 2));
    console.log(
      `${flag ?? this.constructor.name}=${JSON.stringify(this.#arr)}`
    );
  }

  #isQueue() {
    return this.constructor.name === 'Queue';
  }

  [Symbol.iterator]() {
    return this.#arr.values();
  }
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
const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
stack.push(5); // 추가하기
stack.push(7); // 추가하기
stack.print();
stack.clear();
console.log('poll_stack=', stack.poll, stack.isEmpty, stack.length);

const coll = new Collection([3, 5, 7]);
console.log('poll_coll=', coll.poll);

const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.print();
assert.deepStrictEqual(queue.toArray(), [3]);
queue.enqueue(5);
queue.enqueue(7);
queue.print();
console.log('poll_queue=', queue.poll);

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

console.log('queue==', [...queue]);
