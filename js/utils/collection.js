import assert from 'assert';

export class Collection {
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

export { Stack, Queue, ArrayList };
