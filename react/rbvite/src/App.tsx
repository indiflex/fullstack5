import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type ChildHandler = {
  appendPeriod: () => void;
};
const ChildComponent = forwardRef((_, ref) => {
  const [childText, setChildText] = useState('.');

  const handler: ChildHandler = {
    appendPeriod: () => setChildText((c) => c + '.'),
  };
  useImperativeHandle(ref, () => handler);
  return <>childComp: {childText}</>;
});

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => {
    setCount((count) => count + 1);
  };

  const login = ({ id, name }: LoginUser) => {
    if (!name) return alert('Input User Name, please.');
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  const removeCartItem = (itemId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

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
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
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
