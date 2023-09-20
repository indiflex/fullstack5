function f1(id, name) {
  console.log('f1>>', id, name);
}

function f2(user) {
  console.log('f1>>', user.id, user.name);
}

function f3({ id, name }) {
  console.log('f1>>', id, name);
}

function f4() {
  const { id, name } = arguments[0] || {};
  console.log('f4>>', id, name);
}

const f5 = (...args) => {
  if (!args.length) return;
  console.log('🚀  args:', args);
  // const { id, name } = args[0] || {};
  // const [{ id, name }] = args.length ? args : [{}];
  const [{ id, name }] = args;
  console.log('f5>>', id, name);
};

const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

f1(hong.id, hong.name);
f2(hong);
f3(hong);
f4(hong);
f5(hong);
