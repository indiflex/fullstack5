import { Outlet, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
// import { useState } from 'react';

export const ItemLayout = () => {
  const {
    session: { cart },
    removeCartItem,
    saveCartItem,
  } = useSession();

  const [items, setItems] = useState<Cart[]>([]);
  const [currItem, setCurrItem] = useState<Cart | null>(null);

  // const [searchStr, setSearchStr] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({
    searchStr: '',
  });
  // console.log('🚀  searchParams:', searchParams);
  const searchStr = searchParams.get('searchStr') || '';

  useEffect(() => {
    if (searchStr)
      setItems(cart.filter((item) => item.name.includes(searchStr)));
    else setItems(cart);
  }, [cart, searchStr]);

  useEffect(() => {
    setCurrItem(items[0]);
  }, [items]);

  return (
    <>
      Search:
      <input
        type='text'
        value={searchParams.get('searchStr') || ''}
        onChange={(e) => setSearchParams({ searchStr: e.currentTarget.value })}
      />
      {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}> */}
      <div
        style={{
          margin: '1rem',
          display: 'grid',
          gridTemplateColumns: '2fr 2fr',
          gap: '1em',
          width: '80vw',
        }}
      >
        <div>
          <ul className='no-list'>
            {items.map((item) => (
              <li
                key={item.id}
                className={clsx({ active: item.id === currItem?.id })}
              >
                <small>{item.id}</small>
                <button onClick={() => setCurrItem(item)}>
                  <strong>{item.name}</strong>
                </button>
                <small>({item.price.toLocaleString()}원)</small>
                <button onClick={() => removeCartItem(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setCurrItem({ id: 0, name: '', price: 0 })}
            style={{ backgroundColor: 'aqua' }}
          >
            + Add Item
          </button>
        </div>
        <div style={{ border: '2px solid green', padding: '2rem' }}>
          <Outlet context={{ item: currItem, saveCartItem }} />
        </div>
      </div>
    </>
  );
};
