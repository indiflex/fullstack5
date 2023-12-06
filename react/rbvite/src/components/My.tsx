// src/components/My.tsx
import { FormEvent, RefObject, useRef } from 'react';
import { LoginUser, Session } from '../App';
import Login, { LoginHandle } from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  loginHandleRef: RefObject<LoginHandle>;
  saveCartItem: (name: string, price: number) => void;
  removeCartItem: (itemId: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  loginHandleRef,
  saveCartItem,
  removeCartItem,
}: Props) => {
  console.log('@@@My');
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;

    if (!name) {
      alert('상품명을 정확히 입력해 주세요!');
      return itemNameRef.current?.focus();
    }

    if (!price) {
      alert('금액을 정확히 입력해 주세요!');
      return itemPriceRef.current?.focus();
    }

    saveCartItem(name, Number(price));
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
  };

  return (
    <>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} ref={loginHandleRef} />
      )}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            <small>{id}</small> <strong>{name}</strong>
            <small>({price.toLocaleString()}원)</small>
            <button onClick={() => removeCartItem(id)}>X</button>
          </li>
        ))}
        <form onSubmit={submit}>
          <input type='text' ref={itemNameRef} />
          <input type='number' ref={itemPriceRef} />
          <button type='submit'>Save</button>
        </form>
      </ul>
    </>
  );
};
export default My;
