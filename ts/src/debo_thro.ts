function throttle<T extends any[]>(fn: (...params: T) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<typeof fn>) => {
    //   return (...args: T) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

function debounce<T extends any[] = number[]>(
  fn: (...params: T) => void,
  delay = 0
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay, ...args);
  };
}

const act = debounce((a) => console.log(a + 1), 1000);
// const act = throttle<number[]>(a => console.log(a+1), 1000);
for (let i = 10; i < 15; i++) act(i);
