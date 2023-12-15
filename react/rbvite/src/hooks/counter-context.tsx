import {
  // Dispatch,
  PropsWithChildren,
  // SetStateAction,
  createContext,
  useContext,
  useReducer,
} from 'react';

type CounterContextProps = {
  count: number;
  // setCount: Dispatch<SetStateAction<number>>;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  // setCount: () => {},
  plusCount: () => {},
  minusCount: () => {},
});

type Action = { type: 'plus' | 'minus'; payload?: number };
const reducer = (count: number, { type, payload = 1 }: Action) => {
  switch (type) {
    case 'plus':
      return count + payload;
    case 'minus':
      return count - payload;
  }
};

const CounterContextProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0);
  // const plusCount = () => setCount(count + 1);
  // const minusCount = () => setCount((count) => count - 1);

  const [count, dispach] = useReducer(reducer, 0);
  const plusCount = () => dispach({ type: 'plus', payload: 2 });
  const minusCount = () => dispach({ type: 'minus' });

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CounterContextProvider, useCounter };
