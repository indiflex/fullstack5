import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';
import { useCounter } from './hooks/counter-context';
import { useTimer } from './hooks/timer-hooks';

type ChildHandler = {
  appendPeriod: () => void;
};
const ChildComponent = forwardRef((_, ref) => {
  const [childText, setChildText] = useState('.');
  const [badCount, setBadCount] = useState(0);
  const [goodCount, setGoodCount] = useState(0);

  const { useInterval } = useTimer();

  useInterval(() => setBadCount((pre) => pre + 1), 1000);

  useEffect(() => {
    const intl = setInterval(() => setGoodCount((pre) => pre + 1), 1000);

    return () => clearInterval(intl);
  }, []);

  // useTimeout(
  //   (initSec) => {
  //     setBadCount(initSec);
  //     setGoodCount(initSec);
  //   },
  //   5000,
  //   100
  // );
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

function App() {
  // const [count, setCount] = useState(0);
  const { count, plusCount } = useCounter();

  const childRef = useRef<ChildHandler>(null);

  return (
    <>
      <ChildComponent ref={childRef} />
      <hr />
      <button onClick={() => childRef.current?.appendPeriod()}>
        Call Child Component
      </button>
      <Hello age={32} plusCount={plusCount} />
      <hr />
      <My
      // loginHandleRef={loginHandleRef}
      />
      <div className='card'>
        <button onClick={plusCount}>
          count is {count > 0 ? 'Big' : 'Zero'}
        </button>
      </div>
    </>
  );
}

export default App;
