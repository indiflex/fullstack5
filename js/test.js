import assert from 'assert';
import { Stack, Queue, ArrayList, Collection } from './utils/index.js';

const v = process.env.VERSION;
console.log('v=', v);

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
