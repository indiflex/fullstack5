// O(n^2)
const keyPairBigO_NSquare = (arr, n) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return [i, j];
    }
  }
};

const keyPair = (arr, n) => {
  // {yourValue: pair-idx}
  const yourValueVsPairIdx = {}; // {6:0, 4:1}

  for (let i = 0; i < arr.length; i += 1) {
    const yourValue = arr[i];
    const pairIdx = yourValueVsPairIdx[yourValue];
    if (pairIdx) return [pairIdx, i];
    yourValueVsPairIdx[n - yourValue] = i;
    console.log('🚀  yourValueVsPairIdx:', yourValueVsPairIdx);
  }
};

console.log(keyPair([1, 3, 4, 5], 7));
// const x = keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
// console.log('🚀  x:', x);
// const y = keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
// console.log('🚀  y:', y);
// const z = keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
// console.log('🚀  z:', z);
