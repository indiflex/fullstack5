export const range = (start, end, step = start > end ? -1 : 1) => {
  if (start === end) return [start];

  // (start > end && step > 0) || (start < end && step < 0)
  if ((start - end) * step > 0) return [];

  const tmp = start;
  // end ?? (start > 0 ? ((start = 1), tmp) : start === 0 ? 0 : -1);
  end = end ?? (start > 0 ? ((start = 1), tmp) : start % 2);

  const results = [];
  // if (end === undefined || step === 0) return [start];
  if (step === 0) return [start];

  // const until = i => (start > end ? i >= end : i <= end);
  // const until2 = i => Math.abs(i - end) < Math.abs(step);
  // for (let i = start; until(i); i += step) {
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    results.push(i);
    // if (until2(i)) return results;
  }

  return results;
};
