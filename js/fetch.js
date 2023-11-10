const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
// const myFetch = url => fetch(url);

// // (async function X() {
// const resA = await myFetch(sampleUrl);
// const jsonA = await resA.json();
// console.log('🚀  myFetch:', jsonA);
// })();

// const res = myFetch(sampleUrl);
// res
//   .then(res2 => {
//     const j = res2.json();
//     console.log('🚀  j:', j);
//     return j;
//   })
//   .then(last => console.log('last=', last));

// myFetch.then(user => user.json());

// myFetch(sampleUrl).then(user => {
//   console.log('user>>>', user);
// });

async function request(url) {
  const response = await fetch(url);
  // return await response.json(); // BAD!! Anti-Pattern!!
  // const result = await response.json();
  // console.log('🚀  result:', result);
  // return result;
  return response.json();
}

try {
  console.log('aa>>', await request(sampleUrl));
} catch (err) {
  console.error(err);
}

// const promisify = async cb => cb();

// const mapResult = [1, 2, 3].map(async val => {
//   const r = await afterTime(val);
//   console.log('r=', r);
//   return r;
// });
// console.log('mapResult=', mapResult);
