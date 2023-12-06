import {
  // Dispatch,
  PropsWithChildren,
  // SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type CounterContextProps = {
  count: number;
  // setCount: Dispatch<SetStateAction<number>>;
  plusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  // setCount: () => {},
  plusCount: () => {},
});

const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const plusCount = () => setCount(count + 1);

  return (
    <CounterContext.Provider value={{ count, plusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CounterContextProvider, useCounter };
