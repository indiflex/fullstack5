import { FormEvent, useRef } from 'react';
import Login from './Login';
import Profile from './Profile';
import { useSession } from '../hooks/session-context';

const My = () => {
  console.log('@@@My');
  const {
    session: { loginUser, cart },
    saveCartItem,
    removeCartItem,
  } = useSession();
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
      {loginUser ? <Profile /> : <Login />}
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
