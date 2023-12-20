import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useCounter } from '../hooks/counter-context';
import { useTimer } from '../hooks/timer-hooks';
import * as CN from 'classnames';
import clsx from 'clsx';

type ChildHandler = {
  appendPeriod: () => void;
};
const ChildComponent = forwardRef((_, ref) => {
  const [childText, setChildText] = useState('.');
  const [badCount, setBadCount] = useState(0);
  const [goodCount, setGoodCount] = useState(0);

  const { useInterval, useTimeout } = useTimer();

  useInterval(() => setBadCount((pre) => pre + 1), 1000);

  useInterval(() => setGoodCount((pre) => pre + 1), 1000);
  // useEffect(() => {
  //   const intl = setInterval(() => setGoodCount((pre) => pre + 1), 1000);

  //   return () => clearInterval(intl);
  // }, []);

  useTimeout(
    (initSec) => {
      setBadCount(initSec);
      setGoodCount(initSec);
    },
    5000,
    100
  );
  // useEffect(() => {
  //   const timer = setTimeout(
  //     (initSec: number) => {
  //       setBadCount(initSec);
  //       setGoodCount(initSec);
  //     },
  //     5000,
  //     [100]
  //   );

  //   return () => clearTimeout(timer);
  // }, []);

  const handler: ChildHandler = {
    appendPeriod: () => setChildText((c) => c + '.'),
  };
  useImperativeHandle(ref, () => handler);
  return (
    <>
      <strong style={{ float: 'left', color: 'red' }}>{badCount}</strong>
      childComp: {childText}
      <strong style={{ float: 'right', color: 'green' }}>{goodCount}</strong>
    </>
  );
});

export const Home = () => {
  const { count, plusCount, minusCount } = useCounter();

  const childRef = useRef<ChildHandler>(null);

  const rrr = () => ['bold', 'red'];
  return (
    <>
      <ChildComponent ref={childRef} />
      <hr />
      <button onClick={() => childRef.current?.appendPeriod()}>
        Call Child Component
      </button>
      {/* <Hello age={age} fn={fn} /> */}

      <hr />

      {/* <div className={count % 2 === 0 ? 'card' : ''}> */}
      <div className={CN({ card: count % 2 === 0 })}>
        <button onClick={plusCount}>
          count is {count > 0 ? 'Big' : 'Zero'}
        </button>
        <span className={clsx('card', { bold: count > 1 }, rrr())}>
          {count}
        </span>
        <button onClick={minusCount}>Minus</button>
      </div>
    </>
  );
};
