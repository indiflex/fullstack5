import assert from 'assert';

class Stack {
  #arr;
  constructor(...args) {
    this.#arr = args;
    console.log('🚀 stack- #arr:', this.#arr);
  }

  push(value) {
    this.#arr.push(value);
  }

  pop() {
    return this.#arr.pop();
  }

  toArray() {
    return this.#arr;
  }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log('stack=', stack.toArray()); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack.toArray(), [3]);

class Queue {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  enqueue(value) {
    this.#arr.push(value);
  }

  dequeue() {
    return this.#arr.shift();
  }

  toArray() {
    return this.#arr;
  }
}
const queue = new Queue();
queue.enqueue(3); // 추가하기
// console.log('🚀  queue:', queue.toArray());
assert.deepStrictEqual(queue.toArray(), [3]);

const queue2 = new Queue([1, 2]);
queue2.enqueue(3); // 추가하기
console.log('🚀  queue2:', queue2.toArray());

assert.deepStrictEqual(queue2.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue2.dequeue(), 1);
assert.deepStrictEqual(queue2.toArray(), [2, 3]);

const queue3 = new Queue(1, 2);
queue3.enqueue(3); // 추가하기
assert.deepStrictEqual(queue3.toArray(), [1, 2, 3]);
assert.deepStrictEqual(queue3.dequeue(), 1);
assert.deepStrictEqual(queue3.toArray(), [2, 3]);
console.log('🚀  queue3:', queue3.toArray());
