import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { useState } from 'react';
// import { useState } from 'react';

export const ItemLayout = () => {
  const {
    session: { cart },
    removeCartItem,
    saveCartItem,
  } = useSession();
  // const [searchStr, setSearchStr] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({
    searchStr: '',
  });
  // console.log('🚀  searchParams:', searchParams);
  const [currItem, setCurrItem] = useState<Cart | null>(null);

  return (
    <>
      Search:
      <input
        type='text'
        value={searchParams.get('searchStr') || ''}
        onChange={(e) => setSearchParams({ searchStr: e.currentTarget.value })}
      />
      <ul>
        {cart
          .filter((item) =>
            item.name.includes(searchParams.get('searchStr') || '')
          )
          .map((item) => (
            <li key={item.id}>
              <small>{item.id}</small>
              <Link to={`/items/${item.id}`} state={item}>
                <strong>{item.name}</strong>
              </Link>
              <small>({item.price.toLocaleString()}원)</small>
              <button onClick={() => removeCartItem(item.id)}>X</button>
            </li>
          ))}
      </ul>
      <div style={{ border: '2px solid green', padding: '2rem' }}>
        <Outlet context={{ item: currItem, saveCartItem }} />
      </div>
    </>
  );
};
