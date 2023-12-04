import { PropsWithChildren, useId } from 'react';

type Props = {
  name?: string;
  age: number;
  plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
};

const Hello = ({
  name = 'CCC',
  age,
  plusCount,
  children,
}: PropsWithChildren<Props>) => {
  console.log('Hello.age>>', age);

  const helloId = useId();

  return (
    <div style={{ border: '2px solid red' }}>
      <h5 id={helloId}>
        Hello, {name} ({age}세)
      </h5>
      {children}
      <button onClick={plusCount}>+count</button>
    </div>
  );
};

// Hello.defaultProps = { name: 'Choi' };

export default Hello;
