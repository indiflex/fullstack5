const x: number = 1;
const myName = 'Senior Coding';

let z: boolean;

// ant
let y: any;
y = 1;
y;
y = 'x';
// y.length();

// let s: string = undefined;
// console.log(s.length);

const songs = ['One More Time', 'I AM', 'Cry'];

// song : string
// index : number

songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

declare global {
  interface Window {
    X: string;
    saveMovie: (movie: string) => void;
  }
}

window.X = 'abc';
window.saveMovie = movie => {
  console.log('uploadd....');
};
declare global {
  interface Array<T> {
    first: () => T;
    mapBy: (prop: string) => any;
  }
}

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.mapBy = function (prop: string) {
  return this.map(a => a[prop]);
};

const users = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
];
console.log(users.mapBy('name'));

let a: number[] = [1, 2];
let b: Array<number> = [2, 3, 4];

export {};
