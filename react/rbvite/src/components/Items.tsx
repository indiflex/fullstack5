import { FormEvent, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import { Link } from 'react-router-dom';

export const Items = () => {
  const {
    session: { cart },
    saveCartItem,
    removeCartItem,
  } = useSession();

  const itemIdRef = useRef<number>(0);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const [hasDirty, setDirty] = useState(false);
  const checkDirty = () => {
    const id = itemIdRef.current;
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;

    const selectedItem = !id
      ? { name: '', price: '' }
      : cart.find((item) => item.id === id) || {
          name: '',
          price: '',
        };

    setDirty(name !== selectedItem.name || price != selectedItem.price);
  };

  const setCartItem = (id: number) => {
    itemIdRef.current = id;
    const selectedItem = cart.find((item) => item.id === id) || {
      name: '',
      price: 0,
    };
    if (itemNameRef.current && itemPriceRef.current) {
      itemNameRef.current.value = selectedItem?.name;
      itemPriceRef.current.value = selectedItem?.price.toString();
    }
  };

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

    saveCartItem(itemIdRef.current, name, Number(price));
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
    setDirty(false);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' ref={itemNameRef} onChange={() => checkDirty()} />
        <input type='number' ref={itemPriceRef} onChange={() => checkDirty()} />
        {hasDirty && <button type='submit'>Save</button>}
      </form>
    </div>
  );
};
