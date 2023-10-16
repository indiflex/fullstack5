const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const rangeSum = (start = 0, end = arr.length - 1) => {
  let sum = 0;
  for (let i = start; i <= end; i += 1) sum += arr[i];

  console.log(start, end, '==>', sum);
};
rangeSum(2, 5); // 19
rangeSum(3, 5); // 15
rangeSum(1, 4); // 14
rangeSum(0, 4); // 15
rangeSum(5, 8); // 30
rangeSum(6, 8); // 22
rangeSum(2, 8); // 41
rangeSum(4, 4); // 5
rangeSum(5); // 30
rangeSum(2); // 41
rangeSum(); // 45
