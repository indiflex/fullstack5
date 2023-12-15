import { memo, useId, useReducer } from 'react';

type Props = {
  // name?: string;
  age: number;
  // plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
  fn: () => void;
};

// const Hello = ({ age }: PropsWithChildren<Props>) => {
// const Hello = ({ age, fn }: PropsWithChildren<Props>) => {
export const Hello = ({ age, fn }: Props) => {
  // console.log('Hello.age>>', age);
  // const { count, plusCount } = useCounter();
  const helloId = useId();
  // const [isActive, setActive] = useState(false);
  const [isActive, toggleActive] = useReducer((preActive) => !preActive, false);

  // useEffect(() => {
  //   console.log('child.fn>>>', age, fn());
  // }, [age, fn]);

  return (
    <div style={{ border: '2px solid red' }}>
      <h5 id={helloId}>Hello, {age}</h5>
      {/* <button onClick={plusCount}>+count</button> */}
      <hr />
      {isActive ? 'Active' : 'Passive'}
      <button onClick={toggleActive}>Toggle</button>
      {/* <Sample /> */}
    </div>
  );
};

// Hello.defaultProps = { name: 'Choi' };

// export default Hello;
export const MemoHello = memo(Hello, ({ age }, { age: age2 }) => {
  // console.log('🚀  prePorp:', age, age2);
  // return Object.is(preProp.fn, postProp.fn) && preProp.age === postProp.age;
  return age === age2;
});
