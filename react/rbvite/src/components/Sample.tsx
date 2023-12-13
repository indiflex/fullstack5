import { ChangeEvent, useEffect, useMemo, useState } from 'react';

export const Sample = () => {
  // dummy state to test
  const [, rerender] = useState<ChangeEvent<HTMLInputElement>>();
  const [array, setArray] = useState([1, 2, 3]);

  // const array = [1, 2, 3];
  const memoArray = useMemo(() => array, [array]);
  useEffect(() => {
    // console.log('effect Array@@@');
  }, [memoArray]);

  return (
    <>
      Array: {array}
      <button onClick={() => setArray([...array, 1])}>Add-Array</button>
      <input type='text' onChange={rerender} />
    </>
  );
};
