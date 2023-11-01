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

  has(val) {
    return this.#arr.includes(val);
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

  toList() {
    return Collection.arrayToList(this.#arr);
  }

  // [1,2] ==> {value: 1, rest: {value:2, rest: undefined}}
  static arrayToList(arr = []) {
    let node;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      node = { value: arr[i], rest: node };
    }
    return node;
  }

  static listToArray(lst) {
    const rets = [];
    let node = lst;
    while (true) {
      if (!node) return rets;
      rets.push(node.value);
      node = node.rest;
    }
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

  // [Symbol.iterator]() {
  //   return this.#arr.values();
  // }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i += 1) yield this.#arr[i];
  }

  iterator() {
    return this[Symbol.iterator]();
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

class ArrayList extends Collection {
  get(idx) {
    return this._arr[idx];
  }

  set(idx, val) {
    this._arr[idx] = val;
  }

  add(val, idx) {
    this._arr.splice(idx ?? this.length, 0, val);
  }

  indexOf(val) {
    return this._arr.indexOf(val);
  }

  contains(val) {
    return this.has(val);
  }

  remove(val) {
    // 1개밖에 못지워 + 2회전
    // this._arr.splice(this._arr.indexOf(val), 1);
    this._arr = this._arr.filter(a => a !== val);
  }

  print() {
    console.log(this.toList());
  }
}

console.log('==========================');
const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.print();
const list = alist.toList();
console.log('🚀  list:', list);
console.log('arr->list:', ArrayList.listToArray(list));
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.print();
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.print();
return;
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);
alist.size; // 22, 4
alist.indexOf(300); // 1
alist.contains(300);
alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear
